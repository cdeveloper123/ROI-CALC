import ResultCard from './ResultCard'
import { CalculationResult } from '../types/calculator'

interface BasicResultsProps {
  results: CalculationResult
}

export default function BasicResults({ results }: BasicResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Results</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <ResultCard
          title="ROI Percentage"
          value={`${results.roiPercentage}%`}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
          titleColor="text-blue-900"
        />
        <ResultCard
          title="Annual Return"
          value={`£${results.annualReturn.toLocaleString()}`}
          bgColor="bg-teal-50"
          textColor="text-teal-600"
          titleColor="text-teal-900"
        />
        <ResultCard
          title="Payback Period"
          value={`${results.roiYears} years`}
          bgColor="bg-indigo-50"
          textColor="text-indigo-600"
          titleColor="text-indigo-900"
        />
        <ResultCard
          title="After Payback"
          value={`£${results.totalAfterPayback.toLocaleString()}`}
          bgColor="bg-orange-50"
          textColor="text-orange-600"
          titleColor="text-orange-900"
        />
        <ResultCard
          title="Productivity Increase"
          value={`${results.productivityIncrease}%`}
          bgColor="bg-green-50"
          textColor="text-green-600"
          titleColor="text-green-900"
        />
        <ResultCard
          title="Maintenance Reduction"
          value={`£${results.maintenanceReduction}/year`}
          bgColor="bg-purple-50"
          textColor="text-purple-600"
          titleColor="text-purple-900"
        />
      </div>
    </div>
  )
} 