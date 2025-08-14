# ROI & Sustainability Calculator

A full-stack web application built with Next.js, Tailwind CSS, and Chart.js for calculating Return on Investment (ROI) and sustainability metrics.

## Features

- **Authentication System**: Simple username/password authentication with session management
- **ROI Calculator**: Calculate payback period based on initial investment and annual savings
- **Sustainability Metrics**: Track CO₂ reduction alongside financial calculations
- **Interactive Charts**: Visualize investment vs savings comparison using Chart.js
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Protected Routes**: Secure access to calculator functionality

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Authentication**: Custom context-based auth with localStorage
- **Development**: ESLint, PostCSS, Autoprefixer

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd roi-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Credentials

- **Username**: `admin`
- **Password**: `password123`

## Project Structure

```
roi-calculator/
├── app/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation component
│   ├── context/
│   │   └── AuthContext.tsx     # Authentication context
│   ├── calculator/
│   │   └── page.tsx           # Main calculator page
│   ├── login/
│   │   └── page.tsx           # Login page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page (redirects)
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Usage

1. **Login**: Use the demo credentials to access the application
2. **Enter Data**: Fill in the four required fields:
   - Initial Investment (£)
   - Expected Annual Savings (£)
   - Productivity Increase (%)
   - Maintenance Cost Reduction (£/year)
3. **Calculate**: Click "Calculate ROI" to see results
4. **View Results**: See the payback period, productivity increase, maintenance savings, and chart visualization
5. **Logout**: Use the logout button in the navbar to end your session

## Calculations

- **ROI Percentage**: `(Annual Savings / Initial Investment) * 100` (annual return rate)
- **Annual Return**: `Annual Savings` (actual amount returned each year)
- **Payback Period**: `Initial Investment / Annual Savings` (in years)
- **After Payback**: `Annual Savings - Initial Investment` (net amount after breaking even)
- **Productivity Increase**: Direct input percentage for efficiency improvement
- **Maintenance Cost Reduction**: Direct input value for ongoing cost savings

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

- **Credentials**: Modify the `VALID_CREDENTIALS` object in `app/context/AuthContext.tsx`
- **Styling**: Update Tailwind classes or modify `tailwind.config.js`
- **Charts**: Customize chart options in `app/calculator/page.tsx`

## Security Notes

- This is a demo application with hardcoded credentials
- For production use, implement proper authentication with a database
- Consider adding input validation and sanitization
- Use environment variables for sensitive configuration

## License

This project is open source and available under the [MIT License](LICENSE). 