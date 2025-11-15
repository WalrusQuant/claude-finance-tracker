# Personal Finance Tracker

A comprehensive web-based personal finance tracking application that helps you manage your money across multiple areas. All data is stored locally in your browser using localStorage - no backend or database required!

## Features

### 📊 Dashboard
- Overview of your financial health at a glance
- Monthly income vs expenses with visual charts
- Current net worth calculation
- Quick stats and alerts for upcoming bills and budget warnings
- Mini charts showing key trends

### 💰 Income & Expenses
- Track all income and expense transactions
- Categorize transactions (groceries, rent, entertainment, etc.)
- Filter and search transaction history
- Visual spending trends and category breakdowns
- Export transactions to CSV

### 📈 Budget Manager
- Set monthly spending limits for each category
- Visual progress bars with color-coded warnings
- Budget vs actual comparison charts
- Smart budget recommendations based on spending history
- Alerts when approaching or exceeding budget limits

### 🎯 Savings Goals
- Create and track multiple savings goals
- Visual progress tracking with progress bars
- Calculate monthly savings needed to reach goals
- Mark goals as complete with celebration animations
- Track contributions toward each goal

### 📅 Bills & Recurring Payments
- Track recurring bills and subscriptions
- Calendar view of upcoming bills
- Mark bills as paid and track payment history
- Overdue bill alerts
- Auto-pay status tracking
- Monthly bills summary

### 💎 Net Worth Tracker
- Track all your assets (cash, savings, investments, property, vehicles)
- Track all liabilities (loans, credit cards, mortgages)
- Calculate total net worth automatically
- Asset and liability distribution charts
- Debt payoff progress tracking

### 📊 Reports & Insights
- Financial health score calculation
- Year-over-year comparisons
- Monthly spending trends analysis
- Best and worst spending months
- Detailed financial statistics
- Personalized insights and recommendations
- Export all data to JSON for backup

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start tracking your finances!

No installation, build process, or server required. Just open the HTML file and you're ready to go.

### First Time Setup

When you first open the application:

1. Click "Load Sample Data" on the dashboard to populate the app with example data
2. Explore the different pages to understand the features
3. Clear the sample data when ready (Reports page → Clear Data)
4. Start adding your own financial information

## Usage Guide

### Adding Transactions

1. Go to the **Transactions** page
2. Click "Add Transaction"
3. Select type (Income or Expense)
4. Choose a category
5. Enter amount, date, and optional description
6. Save the transaction

### Setting Up Budgets

1. Go to the **Budget** page
2. Click "Add Budget"
3. Select a category
4. Enter your monthly budget limit
5. Monitor your spending against the budget

### Creating Savings Goals

1. Go to the **Savings Goals** page
2. Click "Create Goal"
3. Enter goal name, target amount, and target date
4. Add contributions as you save
5. Mark as complete when achieved

### Managing Bills

1. Go to the **Bills** page
2. Click "Add Bill"
3. Enter bill details (name, amount, due date, frequency)
4. Mark bills as paid when you pay them
5. View payment history

### Tracking Net Worth

1. Go to the **Net Worth** page
2. Add your assets (bank accounts, investments, property, etc.)
3. Add your liabilities (loans, credit cards, mortgages, etc.)
4. View your total net worth calculation

## Data Management

### Local Storage
All your data is stored locally in your browser's localStorage. This means:
- ✅ Your data stays on your device
- ✅ No internet connection required
- ✅ Complete privacy
- ⚠️ Data is browser-specific (clearing browser data will delete your financial data)
- ⚠️ Not shared across devices

### Backup & Export

**To backup your data:**
1. Go to the **Reports** page
2. Click "Export All Data"
3. Save the JSON file to a safe location

**To restore from backup:**
Currently, restoration requires manually importing the JSON data into localStorage. Future updates may include an import feature.

### Clear All Data

To start fresh:
1. Go to the **Reports** page
2. Click "Clear Data"
3. Confirm the deletion (this cannot be undone!)

## Browser Compatibility

This application works in all modern browsers:
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

Requires JavaScript to be enabled.

## Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling with custom design system
- **JavaScript (ES6+)** - Application logic
- **Chart.js** - Data visualization
- **Font Awesome** - Icons
- **localStorage API** - Data persistence

## File Structure

```
finance-tracker/
├── index.html              # Dashboard/Overview
├── transactions.html       # Income & Expenses
├── budget.html            # Budget Manager
├── savings.html           # Savings Goals
├── bills.html             # Bills & Recurring Payments
├── networth.html          # Net Worth Tracker
├── reports.html           # Reports & Insights
├── css/
│   └── styles.css         # Global styles
├── js/
│   └── common.js          # Shared functions and data management
└── README.md              # This file
```

## Features in Detail

### Color-Coded System
- 🟢 **Green** - Positive/good (income, under budget, savings)
- 🔴 **Red** - Negative/warnings (expenses, over budget, overdue)
- 🔵 **Blue** - Neutral information
- 🟡 **Yellow** - Warnings (approaching limits)

### Smart Calculations
- Automatic net worth calculation (Assets - Liabilities)
- Monthly income and expense totals
- Budget adherence percentages
- Savings rate calculations
- Financial health score
- Year-over-year comparisons

### Visual Analytics
- Income vs expense bar charts
- Category spending pie charts
- Spending trend line charts
- Budget progress bars
- Savings goal progress indicators
- Asset and liability distribution charts

## Tips for Best Results

1. **Regular Updates** - Add transactions regularly for accurate tracking
2. **Set Realistic Budgets** - Use your spending history to set achievable limits
3. **Review Monthly** - Check the Reports page monthly to track progress
4. **Backup Frequently** - Export your data regularly to prevent loss
5. **Use Categories** - Categorize transactions for better insights
6. **Track Everything** - Include all income sources and expenses for complete picture

## Privacy & Security

- All data is stored locally in your browser
- No data is sent to external servers
- No account creation or login required
- Your financial information never leaves your device
- Clear your browser data to completely remove all information

## Limitations

- Data is not synchronized across devices
- No cloud backup (manual export required)
- No multi-user support
- No data encryption (relies on device security)
- Browser data clearing will delete all information

## Future Enhancements

Potential features for future versions:
- Data import functionality
- Recurring transaction automation
- Investment portfolio tracking
- Tax planning tools
- Mobile app version
- Cloud sync option
- Data encryption
- Multi-currency support

## Support

This is a standalone application with no official support. However, you can:
- Review the code in the repository
- Modify the application to suit your needs
- Share improvements with others

## License

This project is provided as-is for personal use. Feel free to modify and distribute as needed.

## Acknowledgments

- Built with vanilla JavaScript for maximum compatibility
- Uses Chart.js for beautiful data visualizations
- Icons provided by Font Awesome
- Designed with a focus on simplicity and usability

---

**Happy budgeting! 💰**
