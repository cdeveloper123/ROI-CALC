interface ResultCardProps {
  title: string
  value: string | number
  subtitle?: string
  bgColor: string
  textColor: string
  titleColor: string
  borderColor?: string
}

export default function ResultCard({
  title,
  value,
  subtitle,
  bgColor,
  textColor,
  titleColor,
  borderColor
}: ResultCardProps) {
  return (
    <div className={`${bgColor} p-4 rounded-lg ${borderColor ? `border-l-4 ${borderColor}` : ''}`}>
      <h4 className={`text-sm font-medium ${titleColor}`}>{title}</h4>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      {subtitle && (
        <p className={`text-xs ${textColor} mt-1`}>{subtitle}</p>
      )}
    </div>
  )
} 