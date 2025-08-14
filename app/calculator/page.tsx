'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import CalculatorForm from '../components/CalculatorForm'
import BasicResults from '../components/BasicResults'
import BreakEvenAnalysis from '../components/BreakEvenAnalysis'
import RiskAssessment from '../components/RiskAssessment'
import SensitivityAnalysis from '../components/SensitivityAnalysis'
import ChartVisualization from '../components/ChartVisualization'
import { CalculationResult, CalculatorFormData } from '../types/calculator'
import { calculateROI } from '../utils/roiCalculator'

export default function CalculatorPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [results, setResults] = useState<CalculationResult | null>(null)
  const [formData, setFormData] = useState<CalculatorFormData>({
    initialInvestment: '',
    annualSavings: '',
    productivityIncrease: '',
    maintenanceReduction: ''
  })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  const handleCalculate = (data: CalculatorFormData) => {
    setFormData(data)
    const result = calculateROI(data)
    setResults(result)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <CalculatorForm onCalculate={handleCalculate} />

        {results && (
          <>
            <BasicResults results={results} />
            <BreakEvenAnalysis results={results} />
            <RiskAssessment results={results} />
            <SensitivityAnalysis results={results} />
            <ChartVisualization 
              initialInvestment={formData.initialInvestment}
              annualSavings={formData.annualSavings}
            />
          </>
        )}
      </div>
    </div>
  )
} 