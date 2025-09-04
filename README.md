# Girman Search App

A **search-based web application** built as part of the **Girman Technologies Frontend Developer Assignment**.  
The app allows users to search through local user data and view details in a clean, card-based UI following the provided Figma design.

---

## 🚀 Features

- Minimal **landing page** with Girman Technologies branding.
- **Top navigation bar** with links to Website, LinkedIn, and Contact.
- **Search functionality** with input validation and real-time filtering.
- **Card-based results** with placeholder avatars.
- **Details dialog** built with Shadcn UI components.
- Handles edge cases:
  - Empty or invalid input
  - No results found (empty state UI)
  - Error while loading data
- **Responsive design** matching Figma spacing guidelines.

---

## 🛠️ Tech Stack

- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 🧩 Shadcn/UI
- 🛣️ React Router

---

## 📂 Project Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/erayushs/girman-tech-assignment
cd girman-tech-assignment
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

```
📁 Project Structure
src/
├── components/   # Reusable UI components
├── pages/        # Home and Search Results pages
├── context/      # Context provider for user data
├── lib/          # Helper functions (e.g., search filter)
├── assets/       # Static assets (if needed)
public/
└── users.json    # Local user data
```

```
🌐 Deployment

The app is deployed on Vercel:
🔗 Live Demo - *Coming soon*
```

```
👨‍💻 Author

Ayush Singh
Frontend Developer Candidate – Girman Technologies Assignment
```
