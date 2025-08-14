'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface CalculationResult {
  roiYears: number
  roiPercentage: number
  annualReturn: number
  totalAfterPayback: number
  productivityIncrease: number
  maintenanceReduction: number
}

export default function CalculatorPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [initialInvestment, setInitialInvestment] = useState('')
  const [annualSavings, setAnnualSavings] = useState('')
  const [productivityIncrease, setProductivityIncrease] = useState('')
  const [maintenanceReduction, setMaintenanceReduction] = useState('')
  const [results, setResults] = useState<CalculationResult | null>(null)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  const calculateROI = () => {
    const investment = parseFloat(initialInvestment)
    const savings = parseFloat(annualSavings)
    const productivity = parseFloat(productivityIncrease)
    const maintenance = parseFloat(maintenanceReduction)

    if (investment > 0 && savings > 0) {
      const roiYears = investment / savings
      const roiPercentage = (savings / investment) * 100
      const totalAfterPayback = savings - investment
      setResults({
        roiYears: Math.round(roiYears * 100) / 100,
        roiPercentage: Math.round(roiPercentage * 100) / 100,
        annualReturn: savings,
        totalAfterPayback: Math.round(totalAfterPayback * 100) / 100,
        productivityIncrease: productivity,
        maintenanceReduction: maintenance
      })
    }
  }

  const chartData = {
    labels: ['Investment', 'Annual Savings'],
    datasets: [
      {
        label: 'Amount (£)',
        data: [
          parseFloat(initialInvestment) || 0,
          parseFloat(annualSavings) || 0
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)'
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(34, 197, 94, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Investment vs Annual Savings Comparison',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '£' + value.toLocaleString()
          }
        }
      }
    }
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
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ROI & Sustainability Calculator
          </h2>
          
          <form onSubmit={(e) => { e.preventDefault(); calculateROI(); }} className="space-y-6">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="investment" className="block text-xs font-medium text-gray-700 mb-1">
                  Initial Investment (£)
                </label>
                <input
                  type="number"
                  id="investment"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm"
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="savings" className="block text-xs font-medium text-gray-700 mb-1">
                  Annual Savings (£)
                </label>
                <input
                  type="number"
                  id="savings"
                  value={annualSavings}
                  onChange={(e) => setAnnualSavings(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm"
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="productivity" className="block text-xs font-medium text-gray-700 mb-1">
                  Productivity (%)
                </label>
                <input
                  type="number"
                  id="productivity"
                  value={productivityIncrease}
                  onChange={(e) => setProductivityIncrease(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm"
                  placeholder="0"
                  min="0"
                  max="100"
                  step="0.1"
                  required
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="maintenance" className="block text-xs font-medium text-gray-700 mb-1">
                  Maintenance (£/year)
                </label>
                <input
                  type="number"
                  id="maintenance"
                  value={maintenanceReduction}
                  onChange={(e) => setMaintenanceReduction(e.target.value)}
                  className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 text-sm"
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Calculate ROI
            </button>
          </form>
        </div>

        {results && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-blue-900">ROI Percentage</h4>
                  <p className="text-xl font-bold text-blue-600">{results.roiPercentage}%</p>
                </div>
                <div className="bg-teal-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-teal-900">Annual Return</h4>
                  <p className="text-xl font-bold text-teal-600">£{results.annualReturn.toLocaleString()}</p>
                </div>
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-indigo-900">Payback Period</h4>
                  <p className="text-xl font-bold text-indigo-600">{results.roiYears} years</p>
                </div>
                <div className="bg-orange-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-orange-900">After Payback</h4>
                  <p className="text-xl font-bold text-orange-600">£{results.totalAfterPayback.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-green-900">Productivity Increase</h4>
                  <p className="text-xl font-bold text-green-600">{results.productivityIncrease}%</p>
                </div>
                <div className="bg-purple-50 p-2 rounded-lg">
                  <h4 className="text-xs font-medium text-purple-900">Maintenance Reduction</h4>
                  <p className="text-xl font-bold text-purple-600">£{results.maintenanceReduction}/year</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-96">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 