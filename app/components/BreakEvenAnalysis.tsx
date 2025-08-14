import ResultCard from './ResultCard'
import { CalculationResult } from '../types/calculator'

interface BreakEvenAnalysisProps {
  results: CalculationResult
}

export default function BreakEvenAnalysis({ results }: BreakEvenAnalysisProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Break-even Analysis</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ResultCard
          title="Monthly Savings"
          value={`£${results.monthlySavings.toLocaleString()}`}
          bgColor="bg-emerald-50"
          textColor="text-emerald-600"
          titleColor="text-emerald-900"
        />
        <ResultCard
          title="Break-even Months"
          value={`${results.breakEvenMonths} months`}
          bgColor="bg-amber-50"
          textColor="text-amber-600"
          titleColor="text-amber-900"
        />
        <ResultCard
          title="Monthly Break-even"
          value={`${results.monthlyBreakEven} months`}
          bgColor="bg-cyan-50"
          textColor="text-cyan-600"
          titleColor="text-cyan-900"
        />
      </div>
    </div>
  )
} 