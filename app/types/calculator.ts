export interface CalculationResult {
  roiYears: number
  roiPercentage: number
  annualReturn: number
  totalAfterPayback: number
  productivityIncrease: number
  maintenanceReduction: number
  // Break-even Analysis
  monthlyBreakEven: number
  monthlySavings: number
  breakEvenMonths: number
  // Risk Assessment
  bestCaseROI: number
  worstCaseROI: number
  confidenceInterval: { lower: number; upper: number }
  riskScore: number
  // Sensitivity Analysis
  scenarios: {
    optimistic: { roi: number; payback: number }
    realistic: { roi: number; payback: number }
    pessimistic: { roi: number; payback: number }
  }
}

export interface CalculatorFormData {
  initialInvestment: string
  annualSavings: string
  productivityIncrease: string
  maintenanceReduction: string
} 