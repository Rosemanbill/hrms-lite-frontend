<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# hrms-lite-frontend
>>>>>>> 26e7fa19da2dbd86f6875d110a9efdb216ba6714

# HRMS Lite

HRMS Lite is a lightweight Human Resource Management System built as a full-stack web application.  
It allows an admin to manage employee records and track daily attendance through a clean, professional interface.

This project was developed as part of a full-stack technical assessment to demonstrate end-to-end application development, deployment, and stability.

---

##  Live Application

- **Frontend:** https://<YOUR-VERCEL-URL>
- **Backend API:** https://<YOUR-RENDER-URL>

---

##  Features

### Employee Management
- Add new employees with unique Employee ID
- View list of all employees
- Delete employees

### Attendance Management
- Mark daily attendance (Present / Absent)
- View attendance records per employee
- Prevent duplicate attendance entries for the same date

---

##  Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Axios
- HTML / CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Running the Project Locally

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

---

### Backend Setup

```bash
cd backend
npm install
