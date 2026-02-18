# 👁️ EyeGasto – Expense Tracker App

EyeGasto is a modern, responsive **expense tracker web application** that helps you manage your money like a digital bank account.

Track your savings, monitor expenses, analyze spending habits, and visualize your financial activity — all in one clean interface.

---

## 🚀 Live Demo

🔗 Deployed on Vercel  
(Add your Vercel link here)

---

## ✨ Features

### 💰 Savings Management (Bank-Like System)
- Add money to your balance
- Withdraw money
- Real-time balance tracking
- Keep an eye on your available funds

### 🧾 Transactions History
View your recent transactions filtered by:
- 📅 Today  
- 📆 Last 7 Days  
- 🕒 All Time  

### ➕ Add Expenses
Create new expenses with:
- Expense name
- Amount
- Category selection

#### 📂 Available Categories:
- 🍔 Food
- 🚗 Transport
- 🛍️ Shopping
- 💡 Bills
- 🏥 Health
- 🎮 Entertainment
- 📚 Education
- 💰 Savings
- 💳 Debt
- 📦 Others

Each category includes:
- Custom color styling
- Unique category icon/logo

### 📊 Expense Filtering
Expense container supports filtering by:
- Today
- Last 7 Days
- All Time

### 📈 Analytics Dashboard
EyeGasto gives you financial insights such as:
- 💵 Total Expenses
- 🔥 Biggest Expense Today (shows name + category)
- 🕒 Recent Expenses
- 📊 Category-based spending breakdown (Chart.js)

Charts are powered by **Chart.js**, allowing you to:
- Visualize spending per category
- Track where your money goes
- Analyze spending trends

### 🛠️ Edit & Delete with Error Handling
- Edit existing expense cards
- Delete expenses
- Confirmation prompts before deletion
- Validation handling to prevent invalid inputs

---

## 💾 Data Storage

Currently, EyeGasto uses **Local Storage** to temporarily save:
- Balance data  
- Transactions  
- Expenses  
- Category records  

This means:
- Data persists after page refresh
- Data is stored locally in the browser
- No backend or database is connected (yet)

⚠ Clearing browser data will remove saved information.  
Future updates may include database integration for permanent storage.

---

## 🖥️ Tech Stack

- HTML5  
- Tailwind CSS  
- JavaScript (Vanilla JS)  
- Chart.js  
- Vercel (Deployment)  

---

## 📱 Responsive Design

EyeGasto is fully responsive and works across:
- Desktop
- Tablet
- Mobile devices

Optimized layout for all screen sizes.

---

## 📷 Screenshots

(Add your UI screenshots here later)

### Dashboard
![Dashboard Screenshot](./screenshots/dashboard.png)

### Add Expense
![Add Expense Screenshot](./screenshots/add-expense.png)

### Analytics Chart
![Analytics Screenshot](./screenshots/chart.png)

---

## 🧠 Purpose of This Project

EyeGasto was built to:
- Practice real-world JavaScript logic
- Improve UI/UX design skills
- Implement financial tracking logic
- Work with data visualization (Chart.js)
- Deploy a production-ready web app

---

## 📦 Installation (Local Setup)

```bash
git clone https://github.com/your-username/eyegasto.git
cd eyegasto
