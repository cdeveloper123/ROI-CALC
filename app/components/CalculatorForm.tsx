'use client'

import { useState } from 'react'

import { CalculatorFormData } from '../types/calculator'

interface CalculatorFormProps {
  onCalculate: (data: CalculatorFormData) => void
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [annualSavings, setAnnualSavings] = useState('')
  const [productivityIncrease, setProductivityIncrease] = useState('')
  const [maintenanceReduction, setMaintenanceReduction] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCalculate({
      initialInvestment,
      annualSavings,
      productivityIncrease,
      maintenanceReduction
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        ROI & Sustainability Calculator
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-2">
              Initial Investment (£)
            </label>
            <input
              type="number"
              id="investment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              placeholder="0"
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div>
            <label htmlFor="savings" className="block text-sm font-medium text-gray-700 mb-2">
              Annual Savings (£)
            </label>
            <input
              type="number"
              id="savings"
              value={annualSavings}
              onChange={(e) => setAnnualSavings(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              placeholder="0"
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div>
            <label htmlFor="productivity" className="block text-sm font-medium text-gray-700 mb-2">
              Productivity (%)
            </label>
            <input
              type="number"
              id="productivity"
              value={productivityIncrease}
              onChange={(e) => setProductivityIncrease(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              placeholder="0"
              min="0"
              max="100"
              step="0.1"
              required
            />
          </div>
          
          <div>
            <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700 mb-2">
              Maintenance (£/year)
            </label>
            <input
              type="number"
              id="maintenance"
              value={maintenanceReduction}
              onChange={(e) => setMaintenanceReduction(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
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
  )
} 