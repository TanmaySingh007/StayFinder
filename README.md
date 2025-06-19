# Welcome to StayFinder
# 🏠 StayFinder

StayFinder is a full-stack web application inspired by Airbnb, designed for booking short-term and long-term rental properties. It allows users to browse property listings, register and log in, and make bookings through a clean and responsive interface.

🌐 **Live Demo:** [stayfinder-20.netlify.app](https://stayfinder-20.netlify.app/)  
📂 **Source Code:** [GitHub Repository](https://github.com/TanmaySingh007/StayFinder)

---

## 🚀 Features

- 🔍 Browse available properties with images, pricing, and descriptions
- 🧑‍💼 User authentication (Register & Login with JWT)
- 📦 Secure password hashing using bcrypt
- 📩 Booking confirmation via UI (email support coming soon)
- 🌍 Responsive design for all screen sizes
- 🌐 Frontend & backend decoupled for scalability

---

## 🛠 Tech Stack

### 🔹 Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### 🔹 Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Auth
- bcrypt, CORS, Nodemailer

---

## 📦 Installation & Setup

### Clone the repo
```bash
git clone https://github.com/TanmaySingh007/StayFinder.git
cd StayFinder
Setup Backend
bash
Copy
Edit
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
The frontend will run at http://localhost:3000, and the backend will run at http://localhost:5000.
