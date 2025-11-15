// Personal Finance Tracker - Common Functions and Data Management

// ==================== DATA STORAGE ====================

const StorageKeys = {
    TRANSACTIONS: 'finance_transactions',
    BUDGETS: 'finance_budgets',
    GOALS: 'finance_goals',
    BILLS: 'finance_bills',
    ASSETS: 'finance_assets',
    LIABILITIES: 'finance_liabilities',
    SETTINGS: 'finance_settings'
};

// Default categories for expenses
const DEFAULT_EXPENSE_CATEGORIES = [
    'Groceries', 'Rent/Mortgage', 'Utilities', 'Transportation',
    'Entertainment', 'Healthcare', 'Shopping', 'Dining Out',
    'Insurance', 'Education', 'Personal Care', 'Other'
];

const DEFAULT_INCOME_CATEGORIES = [
    'Salary', 'Freelance', 'Investments', 'Business', 'Gift', 'Other'
];

const PAYMENT_METHODS = [
    'Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'Digital Wallet', 'Check'
];

// ==================== LOCAL STORAGE FUNCTIONS ====================

function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function initializeStorage() {
    if (!getData(StorageKeys.TRANSACTIONS)) setData(StorageKeys.TRANSACTIONS, []);
    if (!getData(StorageKeys.BUDGETS)) setData(StorageKeys.BUDGETS, {});
    if (!getData(StorageKeys.GOALS)) setData(StorageKeys.GOALS, []);
    if (!getData(StorageKeys.BILLS)) setData(StorageKeys.BILLS, []);
    if (!getData(StorageKeys.ASSETS)) setData(StorageKeys.ASSETS, []);
    if (!getData(StorageKeys.LIABILITIES)) setData(StorageKeys.LIABILITIES, []);
    if (!getData(StorageKeys.SETTINGS)) setData(StorageKeys.SETTINGS, { currency: 'USD', currencySymbol: '$' });
}

// ==================== TRANSACTION FUNCTIONS ====================

function addTransaction(transaction) {
    const transactions = getData(StorageKeys.TRANSACTIONS) || [];
    transaction.id = Date.now().toString();
    transaction.timestamp = new Date().toISOString();
    transactions.push(transaction);
    setData(StorageKeys.TRANSACTIONS, transactions);
    return transaction;
}

function getTransactions() {
    return getData(StorageKeys.TRANSACTIONS) || [];
}

function updateTransaction(id, updatedData) {
    const transactions = getData(StorageKeys.TRANSACTIONS) || [];
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
        transactions[index] = { ...transactions[index], ...updatedData };
        setData(StorageKeys.TRANSACTIONS, transactions);
        return transactions[index];
    }
    return null;
}

function deleteTransaction(id) {
    let transactions = getData(StorageKeys.TRANSACTIONS) || [];
    transactions = transactions.filter(t => t.id !== id);
    setData(StorageKeys.TRANSACTIONS, transactions);
}

// ==================== BUDGET FUNCTIONS ====================

function getBudgets() {
    return getData(StorageKeys.BUDGETS) || {};
}

function setBudget(category, amount) {
    const budgets = getBudgets();
    budgets[category] = parseFloat(amount);
    setData(StorageKeys.BUDGETS, budgets);
}

function deleteBudget(category) {
    const budgets = getBudgets();
    delete budgets[category];
    setData(StorageKeys.BUDGETS, budgets);
}

// ==================== SAVINGS GOALS FUNCTIONS ====================

function addGoal(goal) {
    const goals = getData(StorageKeys.GOALS) || [];
    goal.id = Date.now().toString();
    goal.currentAmount = parseFloat(goal.currentAmount) || 0;
    goal.targetAmount = parseFloat(goal.targetAmount);
    goal.completed = false;
    goals.push(goal);
    setData(StorageKeys.GOALS, goals);
    return goal;
}

function getGoals() {
    return getData(StorageKeys.GOALS) || [];
}

function updateGoal(id, updatedData) {
    const goals = getData(StorageKeys.GOALS) || [];
    const index = goals.findIndex(g => g.id === id);
    if (index !== -1) {
        goals[index] = { ...goals[index], ...updatedData };
        setData(StorageKeys.GOALS, goals);
        return goals[index];
    }
    return null;
}

function deleteGoal(id) {
    let goals = getData(StorageKeys.GOALS) || [];
    goals = goals.filter(g => g.id !== id);
    setData(StorageKeys.GOALS, goals);
}

// ==================== BILLS FUNCTIONS ====================

function addBill(bill) {
    const bills = getData(StorageKeys.BILLS) || [];
    bill.id = Date.now().toString();
    bill.amount = parseFloat(bill.amount);
    bill.autoPay = bill.autoPay || false;
    bill.paymentHistory = [];
    bills.push(bill);
    setData(StorageKeys.BILLS, bills);
    return bill;
}

function getBills() {
    return getData(StorageKeys.BILLS) || [];
}

function updateBill(id, updatedData) {
    const bills = getData(StorageKeys.BILLS) || [];
    const index = bills.findIndex(b => b.id === id);
    if (index !== -1) {
        bills[index] = { ...bills[index], ...updatedData };
        setData(StorageKeys.BILLS, bills);
        return bills[index];
    }
    return null;
}

function deleteBill(id) {
    let bills = getData(StorageKeys.BILLS) || [];
    bills = bills.filter(b => b.id !== id);
    setData(StorageKeys.BILLS, bills);
}

function markBillPaid(id, paymentDate) {
    const bills = getData(StorageKeys.BILLS) || [];
    const bill = bills.find(b => b.id === id);
    if (bill) {
        if (!bill.paymentHistory) bill.paymentHistory = [];
        bill.paymentHistory.push({
            date: paymentDate || new Date().toISOString(),
            amount: bill.amount
        });
        setData(StorageKeys.BILLS, bills);
        return bill;
    }
    return null;
}

// ==================== ASSETS & LIABILITIES FUNCTIONS ====================

function addAsset(asset) {
    const assets = getData(StorageKeys.ASSETS) || [];
    asset.id = Date.now().toString();
    asset.value = parseFloat(asset.value);
    asset.date = asset.date || new Date().toISOString();
    assets.push(asset);
    setData(StorageKeys.ASSETS, assets);
    return asset;
}

function getAssets() {
    return getData(StorageKeys.ASSETS) || [];
}

function updateAsset(id, updatedData) {
    const assets = getData(StorageKeys.ASSETS) || [];
    const index = assets.findIndex(a => a.id === id);
    if (index !== -1) {
        assets[index] = { ...assets[index], ...updatedData };
        setData(StorageKeys.ASSETS, assets);
        return assets[index];
    }
    return null;
}

function deleteAsset(id) {
    let assets = getData(StorageKeys.ASSETS) || [];
    assets = assets.filter(a => a.id !== id);
    setData(StorageKeys.ASSETS, assets);
}

function addLiability(liability) {
    const liabilities = getData(StorageKeys.LIABILITIES) || [];
    liability.id = Date.now().toString();
    liability.amount = parseFloat(liability.amount);
    liability.date = liability.date || new Date().toISOString();
    liabilities.push(liability);
    setData(StorageKeys.LIABILITIES, liabilities);
    return liability;
}

function getLiabilities() {
    return getData(StorageKeys.LIABILITIES) || [];
}

function updateLiability(id, updatedData) {
    const liabilities = getData(StorageKeys.LIABILITIES) || [];
    const index = liabilities.findIndex(l => l.id === id);
    if (index !== -1) {
        liabilities[index] = { ...liabilities[index], ...updatedData };
        setData(StorageKeys.LIABILITIES, liabilities);
        return liabilities[index];
    }
    return null;
}

function deleteLiability(id) {
    let liabilities = getData(StorageKeys.LIABILITIES) || [];
    liabilities = liabilities.filter(l => l.id !== id);
    setData(StorageKeys.LIABILITIES, liabilities);
}

// ==================== CALCULATION FUNCTIONS ====================

function calculateNetWorth() {
    const assets = getAssets();
    const liabilities = getLiabilities();

    const totalAssets = assets.reduce((sum, asset) => sum + parseFloat(asset.value || 0), 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + parseFloat(liability.amount || 0), 0);

    return totalAssets - totalLiabilities;
}

function getMonthlyIncome(month, year) {
    const transactions = getTransactions();
    return transactions
        .filter(t => {
            const date = new Date(t.date);
            return t.type === 'income' &&
                   date.getMonth() === month &&
                   date.getFullYear() === year;
        })
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

function getMonthlyExpenses(month, year) {
    const transactions = getTransactions();
    return transactions
        .filter(t => {
            const date = new Date(t.date);
            return t.type === 'expense' &&
                   date.getMonth() === month &&
                   date.getFullYear() === year;
        })
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

function getCategorySpending(category, month, year) {
    const transactions = getTransactions();
    return transactions
        .filter(t => {
            const date = new Date(t.date);
            return t.type === 'expense' &&
                   t.category === category &&
                   date.getMonth() === month &&
                   date.getFullYear() === year;
        })
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

function getUpcomingBills(daysAhead = 7) {
    const bills = getBills();
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + daysAhead);

    return bills.filter(bill => {
        const billDate = new Date(bill.dueDate);
        return billDate >= today && billDate <= futureDate;
    }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

function getOverdueBills() {
    const bills = getBills();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return bills.filter(bill => {
        const billDate = new Date(bill.dueDate);
        billDate.setHours(0, 0, 0, 0);

        // Check if bill is overdue and hasn't been paid this month
        if (billDate < today) {
            const lastPayment = bill.paymentHistory && bill.paymentHistory.length > 0
                ? new Date(bill.paymentHistory[bill.paymentHistory.length - 1].date)
                : null;

            if (!lastPayment || lastPayment < billDate) {
                return true;
            }
        }
        return false;
    });
}

// ==================== UTILITY FUNCTIONS ====================

function formatCurrency(amount) {
    const settings = getData(StorageKeys.SETTINGS) || { currencySymbol: '$' };
    return settings.currencySymbol + parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getCurrentMonth() {
    return new Date().getMonth();
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}

function exportDataToCSV(dataType) {
    let data, headers, filename;

    switch(dataType) {
        case 'transactions':
            data = getTransactions();
            headers = ['Date', 'Type', 'Category', 'Amount', 'Description', 'Payment Method'];
            filename = 'transactions.csv';
            break;
        case 'budgets':
            const budgets = getBudgets();
            data = Object.entries(budgets).map(([category, amount]) => ({ category, amount }));
            headers = ['Category', 'Amount'];
            filename = 'budgets.csv';
            break;
        case 'goals':
            data = getGoals();
            headers = ['Name', 'Target Amount', 'Current Amount', 'Target Date', 'Completed'];
            filename = 'goals.csv';
            break;
        case 'bills':
            data = getBills();
            headers = ['Name', 'Amount', 'Due Date', 'Frequency', 'Auto Pay'];
            filename = 'bills.csv';
            break;
        default:
            return;
    }

    if (data.length === 0) {
        alert('No data to export!');
        return;
    }

    // Create CSV content
    let csv = headers.join(',') + '\n';
    data.forEach(item => {
        const row = headers.map(header => {
            const key = header.toLowerCase().replace(/ /g, '');
            return `"${item[key] || ''}"`;
        });
        csv += row.join(',') + '\n';
    });

    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function clearAllData() {
    if (confirm('Are you sure you want to delete ALL data? This cannot be undone!')) {
        if (confirm('This will permanently delete all transactions, budgets, goals, bills, and assets. Are you absolutely sure?')) {
            localStorage.clear();
            initializeStorage();
            alert('All data has been cleared.');
            window.location.reload();
        }
    }
}

// ==================== NAVIGATION ====================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initializeStorage();
    setActiveNavLink();
});

// ==================== SAMPLE DATA (for first-time users) ====================

function addSampleData() {
    // Check if there's already data
    const transactions = getTransactions();
    if (transactions.length > 0) {
        if (!confirm('You already have data. Do you want to add sample data anyway?')) {
            return;
        }
    }

    // Sample transactions
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();

    addTransaction({
        type: 'income',
        category: 'Salary',
        amount: 5000,
        date: new Date(thisYear, thisMonth, 1).toISOString().split('T')[0],
        description: 'Monthly salary',
        paymentMethod: 'Bank Transfer'
    });

    addTransaction({
        type: 'expense',
        category: 'Rent/Mortgage',
        amount: 1500,
        date: new Date(thisYear, thisMonth, 1).toISOString().split('T')[0],
        description: 'Monthly rent',
        paymentMethod: 'Bank Transfer'
    });

    addTransaction({
        type: 'expense',
        category: 'Groceries',
        amount: 320,
        date: new Date(thisYear, thisMonth, 5).toISOString().split('T')[0],
        description: 'Weekly groceries',
        paymentMethod: 'Credit Card'
    });

    addTransaction({
        type: 'expense',
        category: 'Utilities',
        amount: 150,
        date: new Date(thisYear, thisMonth, 3).toISOString().split('T')[0],
        description: 'Electric bill',
        paymentMethod: 'Debit Card'
    });

    addTransaction({
        type: 'expense',
        category: 'Transportation',
        amount: 80,
        date: new Date(thisYear, thisMonth, 7).toISOString().split('T')[0],
        description: 'Gas',
        paymentMethod: 'Credit Card'
    });

    // Sample budgets
    setBudget('Groceries', 500);
    setBudget('Utilities', 200);
    setBudget('Transportation', 300);
    setBudget('Entertainment', 200);
    setBudget('Dining Out', 250);

    // Sample goals
    addGoal({
        name: 'Emergency Fund',
        targetAmount: 10000,
        currentAmount: 3500,
        targetDate: new Date(thisYear + 1, thisMonth, 1).toISOString().split('T')[0],
        description: 'Six months of expenses'
    });

    addGoal({
        name: 'Vacation',
        targetAmount: 3000,
        currentAmount: 1200,
        targetDate: new Date(thisYear, 6, 1).toISOString().split('T')[0],
        description: 'Summer vacation to Hawaii'
    });

    // Sample bills
    addBill({
        name: 'Internet',
        amount: 60,
        dueDate: new Date(thisYear, thisMonth, 15).toISOString().split('T')[0],
        frequency: 'Monthly',
        autoPay: true
    });

    addBill({
        name: 'Phone',
        amount: 85,
        dueDate: new Date(thisYear, thisMonth, 20).toISOString().split('T')[0],
        frequency: 'Monthly',
        autoPay: true
    });

    // Sample assets
    addAsset({
        name: 'Checking Account',
        type: 'Cash',
        value: 5000,
        description: 'Main checking account'
    });

    addAsset({
        name: 'Savings Account',
        type: 'Savings',
        value: 15000,
        description: 'Emergency fund savings'
    });

    addAsset({
        name: 'Car',
        type: 'Vehicle',
        value: 18000,
        description: '2020 Honda Civic'
    });

    // Sample liabilities
    addLiability({
        name: 'Student Loan',
        type: 'Student Loan',
        amount: 25000,
        description: 'Undergraduate loans',
        interestRate: 4.5
    });

    addLiability({
        name: 'Credit Card',
        type: 'Credit Card',
        amount: 2500,
        description: 'Chase Sapphire',
        interestRate: 18.99
    });

    alert('Sample data added successfully!');
    window.location.reload();
}
