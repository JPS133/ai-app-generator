# 🚀 AI App Generator

An AI-powered full-stack web application that transforms natural language prompts into structured application blueprints.

The application uses **Groq AI** to generate complete software planning documents, including application pages, UI components, APIs, and database structure. Generated projects are stored in a PostgreSQL database using Prisma ORM and can be revisited through the application history.

## 🌐 Live Demo

**Live Application:** https://ai-app-generator-smoky.vercel.app/

**GitHub Repository:** https://github.com/JPS133/ai-app-generator

---

# ✨ Features

* 🤖 AI-powered application blueprint generation
* 📝 Prompt-based application creation
* 📄 Automatic page generation
* 🧩 UI component planning
* 🔌 REST API suggestions
* 🗄 Database schema generation
* 💾 PostgreSQL storage using Prisma ORM
* 📚 History of generated applications
* 🔍 Search previously generated apps
* 🌙 Dark & Light theme
* 📱 Fully responsive interface
* 📋 Copy generated blueprint
* ⬇ Download blueprint as JSON
* ✅ Schema validation using Zod

---

# 🛠 Tech Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React

## Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL (Neon)

## AI

* Groq API
* Llama 3

## Validation

* Zod

## Notifications

* Sonner

---

# 📂 Project Structure

```
app/
│
├── api/
│   ├── apps/
│   ├── generate/
│   ├── repair/
│   └── validate/
│
├── apps/
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── app-generator/
├── layout/
├── providers/
└── ui/

constants/
hooks/
lib/
prisma/
prompts/
public/
services/
types/
utils/
validators/
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/JPS133/ai-app-generator.git
```

```bash
cd ai-app-generator
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL=your_database_url

GROQ_API_KEY=your_groq_api_key
```

---

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Push Database Schema

```bash
npx prisma db push
```

---

## 6. Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🏗 Production Build

Create an optimized production build.

```bash
npm run build
```

Run the production server.

```bash
npm start
```

---

# ⚙ How It Works

1. User enters an application idea.
2. The prompt is sent to the Groq AI API.
3. AI generates a structured application blueprint.
4. The response is validated using Zod.
5. Prisma stores the generated blueprint in PostgreSQL.
6. Users can browse previous generations through the history section.

---

# 📌 Example Prompt

```
Build a College Management System with Student Login, Faculty Dashboard, Attendance Management, Course Registration and Examination Module.
```

---

# 📋 Generated Output Includes

* Application Overview
* Application Description
* Pages
* Components
* Suggested APIs
* Database Schema
* Development Blueprint

---

# 🎯 Future Improvements

* User Authentication
* Team Collaboration
* PDF Export
* React Code Generation
* SQL Schema Generation
* Version History
* Share Generated Blueprints
* Live Wireframe Preview

---

# 📚 Learning Outcomes

This project demonstrates practical experience with:

* Full Stack Development
* Next.js App Router
* REST API Development
* AI Integration
* Prompt Engineering
* Database Design
* Prisma ORM
* PostgreSQL
* TypeScript
* Tailwind CSS
* Responsive UI Design
* Production Deployment

---

# 🚀 Deployment

The application is deployed on Vercel using automatic GitHub deployments. Vercel provides seamless deployment for Next.js applications with support for environment variables and serverless API routes.

---

# 👨‍💻 Author

**Jai Pratap Singh**

B.Tech Computer Science & Engineering

Passionate about Full-Stack Development, Artificial Intelligence, and Building Real-World Software Projects.

* GitHub: https://github.com/JPS133
* Project: https://github.com/JPS133/ai-app-generator

---

# 📄 License

This project was developed for educational purposes and as part of an AI Software Engineer internship assignment.

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.
