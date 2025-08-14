'use client'

import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Line, PolarArea, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface ChartVisualizationProps {
  initialInvestment: string
  annualSavings: string
}

export default function ChartVisualization({ initialInvestment, annualSavings }: ChartVisualizationProps) {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'polarArea' | 'pie'>('bar')

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
        tension: 0.4, // For line chart smoothness
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Investment vs Annual Savings Comparison',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ': £' + context.parsed.y?.toLocaleString() || context.parsed.toLocaleString()
          }
        }
      }
    },
    scales: chartType === 'bar' || chartType === 'line' ? {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '£' + value.toLocaleString()
          }
        }
      }
    } : undefined
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h3 className="text-lg font-semibold text-gray-900">Chart Visualization</h3>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value as 'bar' | 'line' | 'polarArea' | 'pie')}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 text-sm"
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="polarArea">Polar Area Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      <div className="h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
        {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
        {chartType === 'polarArea' && <PolarArea data={chartData} options={chartOptions} />}
        {chartType === 'pie' && <Pie data={chartData} options={chartOptions} />}
      </div>
    </div>
  )
} 