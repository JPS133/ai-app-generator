# 🚀 AI App Generator

An AI-powered full-stack web application that generates complete application blueprints from a simple text prompt.

Users describe their idea in one sentence, and the AI generates:

- 📄 Application Pages
- 🧩 UI Components
- 🔗 API Endpoints
- 🗄 Database Schema
- ⚙️ Development Workflow

Built using **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Prisma**, **PostgreSQL**, and **Groq AI**.

---

# ✨ Features

- 🤖 AI-powered application generation
- 📝 Prompt-based app creation
- 📋 Generated pages and components preview
- 📚 History of previously generated applications
- 🔍 Search generated applications
- 🌙 Dark / Light mode
- 📱 Fully responsive design
- ⚡ Fast UI with modern animations
- 📥 Download generated specifications
- 📋 Copy generated output
- ✅ Schema validation using Zod

---

# 🛠 Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React

### Backend

- Next.js API Routes
- Prisma ORM
- PostgreSQL (Neon)

### AI

- Groq API
- Llama 3

### Validation

- Zod

### Notifications

- Sonner Toast

---

# 📂 Project Structure

```
app/
 ├── api/
 │   ├── generate/
 │   ├── apps/
 │   ├── repair/
 │   └── validate/
 │
 ├── apps/
 │
 └── page.tsx

components/
 ├── app-generator/
 ├── layout/
 ├── providers/
 └── ui/

lib/
services/
validators/
utils/
prompts/
types/
hooks/
prisma/
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/ai-app-generator.git
```

Move into the project

```bash
cd ai-app-generator
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=your_database_url
GROQ_API_KEY=your_groq_api_key
```

Generate Prisma Client

```bash
npx prisma generate
```

Push database schema

```bash
npx prisma db push
```

Run development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

# 🚀 Build for Production

```bash
npm run build
```

Start production server

```bash
npm start
```

---

# 📸 Screenshots

Add screenshots of:

- Home Page
- AI Generation
- Generated Preview
- Recent Applications
- Dark Mode

---

# 🧠 How It Works

1. User enters an application idea.
2. Request is sent to the Groq API.
3. AI generates a structured application blueprint.
4. Output is validated using Zod.
5. Data is stored using Prisma.
6. Generated applications are displayed in the history section.
7. Users can reopen previous generations anytime.

---

# 📌 Example Prompt

```
Build a College Management System with Student Login, Faculty Dashboard, Attendance Management, Exams, and Course Registration.
```

---

# 🌟 Future Improvements

- User Authentication
- Export as PDF
- Generate React Components
- Generate Database SQL
- AI Chat Assistant
- Deployment Templates
- Version History
- Team Collaboration

---

# 👨‍💻 Author

**Jai Pratap Singh**

B.Tech Computer Science & Engineering

---

# 📄 License

This project is developed for educational and internship demonstration purposes.

---

## ⭐ If you like this project, consider giving it a star.
