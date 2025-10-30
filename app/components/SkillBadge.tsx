// components/SkillBadge.tsx
interface SkillBadgeProps {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export default function SkillBadge({ name, level = 'intermediate' }: SkillBadgeProps) {
  const levelColors = {
    beginner: 'bg-blue-100 text-blue-800',
    intermediate: 'bg-green-100 text-green-800',
    advanced: 'bg-purple-100 text-purple-800',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${levelColors[level]}`}
    >
      {name}
    </span>
  )
}