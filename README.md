# Kikuyu Water Company – Frontend

Official frontend web application for **Kikuyu Water Company (kiwaco)**.  
This project provides a modern, responsive, and user-friendly platform for customers to access water services, view announcements, check tariffs, submit service requests, and contact the company online.

The frontend is built using **ReactJS**, **JavaScript**, and **Tailwind CSS**, and communicates with a RESTful backend powered by **Node.js and Express**.

---

## 🌐 Project Overview

The website is designed to:
- Improve digital access to water and sewerage services
- Provide transparent information to customers
- Reduce congestion at physical offices
- Enable online service enquiries and requests
- Support future digital expansion (billing, customer portals, SMS/email alerts)

The design is inspired by modern public utility websites and optimized for accessibility, performance, and mobile use.

---

## 🧩 Core Features

### ✅ Public Pages
- Home (Overview, key services, announcements)
- About Us
- Services
- Tariffs & Charges
- News & Notices
- Projects & Updates
- Contact Us

### ✅ Customer Interaction
- Online service request forms
- Feedback & complaints submission
- Emergency contact information
- Google Maps integration for office location

### ✅ UI/UX
- Fully responsive (mobile, tablet, desktop)
- Clean light-mode design
- Blue color scheme (trust & utilities branding)
- Lato sans-serif typography
- Accessible contrast and readable layouts

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS** (Functional Components & Hooks)
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **React Router**
- **Axios / Fetch API**
- **Vite or CRA** (depending on setup)

### Backend (Consumed by this app)
- Node.js
- Express.js
- REST API
- JSON-based responses

---

## 📂 Project Structure

```bash
src/
├── assets/            # Images, icons, logos
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Button.jsx
│   └── Card.jsx
├── pages/             # Page-level components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Tariffs.jsx
│   ├── Projects.jsx
│   ├── News.jsx
│   └── Contact.jsx
├── hooks/             # Custom React hooks
├── services/          # API calls
│   └── api.js
├── layouts/           # Page layouts
├── utils/             # Helper functions
├── App.jsx
├── main.jsx
└── index.css
