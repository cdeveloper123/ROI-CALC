import { CalculationResult, CalculatorFormData } from '../types/calculator'

export function calculateROI(data: CalculatorFormData): CalculationResult | null {
  const investment = parseFloat(data.initialInvestment)
  const savings = parseFloat(data.annualSavings)
  const productivity = parseFloat(data.productivityIncrease)
  const maintenance = parseFloat(data.maintenanceReduction)

  if (investment > 0 && savings > 0) {
    // Basic ROI calculations
    const roiYears = investment / savings
    const roiPercentage = (savings / investment) * 100
    const totalAfterPayback = savings - investment
    
    // Break-even Analysis
    const monthlySavings = savings / 12
    const monthlyBreakEven = investment / monthlySavings
    const breakEvenMonths = Math.ceil(monthlyBreakEven)
    
    // Risk Assessment (using productivity and market factors)
    const marketVolatility = 0.15 // 15% market volatility
    const inflationRisk = 0.03 // 3% annual inflation
    const productivityRisk = Math.max(0, (100 - productivity) / 100) // Higher productivity = lower risk
    
    const riskScore = Math.min(100, (marketVolatility + inflationRisk + productivityRisk) * 100)
    
    // Confidence intervals (95% confidence)
    const standardError = savings * 0.1 // 10% standard error
    const confidenceInterval = {
      lower: Math.max(0, roiPercentage - (1.96 * standardError / investment * 100)),
      upper: roiPercentage + (1.96 * standardError / investment * 100)
    }
    
    // Best/Worst case scenarios
    const bestCaseROI = roiPercentage * 1.2 // 20% better than expected
    const worstCaseROI = roiPercentage * 0.8 // 20% worse than expected
    
    // Sensitivity Analysis - Different scenarios
    const scenarios = {
      optimistic: {
        roi: roiPercentage * 1.3,
        payback: roiYears * 0.7
      },
      realistic: {
        roi: roiPercentage,
        payback: roiYears
      },
      pessimistic: {
        roi: roiPercentage * 0.7,
        payback: roiYears * 1.3
      }
    }
    
    return {
      roiYears: Math.round(roiYears * 100) / 100,
      roiPercentage: Math.round(roiPercentage * 100) / 100,
      annualReturn: savings,
      totalAfterPayback: Math.round(totalAfterPayback * 100) / 100,
      productivityIncrease: productivity,
      maintenanceReduction: maintenance,
      // Break-even Analysis
      monthlyBreakEven: Math.round(monthlyBreakEven * 100) / 100,
      monthlySavings: Math.round(monthlySavings * 100) / 100,
      breakEvenMonths: breakEvenMonths,
      // Risk Assessment
      bestCaseROI: Math.round(bestCaseROI * 100) / 100,
      worstCaseROI: Math.round(worstCaseROI * 100) / 100,
      confidenceInterval: {
        lower: Math.round(confidenceInterval.lower * 100) / 100,
        upper: Math.round(confidenceInterval.upper * 100) / 100
      },
      riskScore: Math.round(riskScore * 100) / 100,
      // Sensitivity Analysis
      scenarios: {
        optimistic: {
          roi: Math.round(scenarios.optimistic.roi * 100) / 100,
          payback: Math.round(scenarios.optimistic.payback * 100) / 100
        },
        realistic: {
          roi: Math.round(scenarios.realistic.roi * 100) / 100,
          payback: Math.round(scenarios.realistic.payback * 100) / 100
        },
        pessimistic: {
          roi: Math.round(scenarios.pessimistic.roi * 100) / 100,
          payback: Math.round(scenarios.pessimistic.payback * 100) / 100
        }
      }
    }
  }
  
  return null
} 