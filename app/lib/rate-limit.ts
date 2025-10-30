// Simple in-memory rate limiting without complex iteration

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

export function rateLimit(identifier: string): boolean {
  const now = Date.now();
  
  // Get existing data or initialize
  const existing = rateLimitMap.get(identifier);
  
  if (!existing) {
    // First request from this IP
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS
    });
    return true;
  }
  
  // Check if window has expired
  if (now > existing.resetTime) {
    // Reset counter
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS
    });
    return true;
  }
  
  // Check if over limit
  if (existing.count >= MAX_REQUESTS) {
    return false;
  }
  
  // Increment counter
  existing.count++;
  return true;
}

// Optional: Cleanup function to prevent memory leaks (run occasionally)
export function cleanupRateLimit(): void {
  const now = Date.now();
  const keysToDelete: string[] = [];
  
  rateLimitMap.forEach((value, key) => {
    if (now > value.resetTime + WINDOW_MS) { // 2 minutes after expiry
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => {
    rateLimitMap.delete(key);
  });
}

// Run cleanup every 5 minutes in production
if (typeof global !== 'undefined' && !global.rateLimitCleanupStarted) {
  global.rateLimitCleanupStarted = true;
  setInterval(cleanupRateLimit, 5 * 60 * 1000);
}