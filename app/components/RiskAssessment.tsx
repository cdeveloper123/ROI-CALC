import ResultCard from './ResultCard'
import { CalculationResult } from '../types/calculator'

interface RiskAssessmentProps {
  results: CalculationResult
}

export default function RiskAssessment({ results }: RiskAssessmentProps) {
  const getRiskLevel = (score: number) => {
    if (score < 30) return 'Low Risk'
    if (score < 60) return 'Medium Risk'
    return 'High Risk'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <ResultCard
          title="Risk Score"
          value={`${results.riskScore}%`}
          subtitle={getRiskLevel(results.riskScore)}
          bgColor="bg-red-50"
          textColor="text-red-600"
          titleColor="text-red-900"
        />
        <ResultCard
          title="Best Case ROI"
          value={`${results.bestCaseROI}%`}
          bgColor="bg-green-50"
          textColor="text-green-600"
          titleColor="text-green-900"
        />
        <ResultCard
          title="Worst Case ROI"
          value={`${results.worstCaseROI}%`}
          bgColor="bg-orange-50"
          textColor="text-orange-600"
          titleColor="text-orange-900"
        />
        <ResultCard
          title="Confidence Interval"
          value={`${results.confidenceInterval.lower}% - ${results.confidenceInterval.upper}%`}
          subtitle="95% confidence"
          bgColor="bg-blue-50"
          textColor="text-blue-600"
          titleColor="text-blue-900"
        />
      </div>
    </div>
  )
} 