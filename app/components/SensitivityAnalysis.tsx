import ResultCard from './ResultCard'
import { CalculationResult } from '../types/calculator'

interface SensitivityAnalysisProps {
  results: CalculationResult
}

export default function SensitivityAnalysis({ results }: SensitivityAnalysisProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Sensitivity Analysis</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ResultCard
          title="Optimistic Scenario"
          value={`${results.scenarios.optimistic.roi}% ROI`}
          subtitle={`${results.scenarios.optimistic.payback} years payback`}
          bgColor="bg-green-50"
          textColor="text-green-600"
          titleColor="text-green-900"
          borderColor="border-green-400"
        />
        <ResultCard
          title="Realistic Scenario"
          value={`${results.scenarios.realistic.roi}% ROI`}
          subtitle={`${results.scenarios.realistic.payback} years payback`}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
          titleColor="text-blue-900"
          borderColor="border-blue-400"
        />
        <ResultCard
          title="Pessimistic Scenario"
          value={`${results.scenarios.pessimistic.roi}% ROI`}
          subtitle={`${results.scenarios.pessimistic.payback} years payback`}
          bgColor="bg-red-50"
          textColor="text-red-600"
          titleColor="text-red-900"
          borderColor="border-red-400"
        />
      </div>
    </div>
  )
} 