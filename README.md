# 🎓 Mantessa (StudyOS)

**Mantessa** is a premier, study-oriented productivity workspace tailored for students and lifelong learners. It unifies task management, scheduling, note-taking, and creative tools into a single, cohesive platform. Built on the robust **MERN Stack** (MongoDB, Express, React, Node.js), Mantessa features a modern **SaaS dashboard UI** inspired by **light neumorphism** to create a clean, fluid, and distraction-free environment for deep focus.

---

## ✨ Core Features

### 🖥️ Immersive Dashboard

The central hub of your academic life, designed for immediate insight and action.

- **Fluid Layout**: Dynamically expanding main content that stretches intuitively when side panels are collapsed.
- **Floating Navigation**: A sleek vertical dock that expands on desktop hover and compresses to icon-only on mobile.
- **Focus Timer (Pomodoro)**: Built-in timer with progress rings, live elapsed-time tracking, and session persistence via Zustand.
- **Productivity Visualization**:
  - **Stats Cards**: Study Hours (live-updated during sessions), Tasks Done, Current Streak, and Focus Score.
  - **Weekly Activity Chart**: Bar chart of daily study minutes for the past week.
- **Smart Greetings**: Personalized welcome with pending task count and quick actions.

### 🛠️ Integrated Productivity Suite

Accessible instantly from the floating sidebar — no app-switching required:

- **📅 Academic Calendar**: Month / Week / Day views for scheduling exams, assignments, and study blocks. Event reminders, search, and color-coded event types.
- **🧮 Scientific Calculator**: Embedded calculator for quick computations with calculation history stored in the database.
- **📝 Sticky Notes**: Color-coded notes and checklists, categorized by Personal / Study / Ideas / Work. Masonry grid layout.
- **📓 Notepad (Notebooks)**: Full rich-text editor with Markdown support, syntax-highlighted code blocks, tagging, and real-time collaborative editing via Socket.IO (Shared Notebooks).
- **🎨 Drawing Pad**: Infinite canvas with pen / highlighter / eraser tools, adjustable brush size and opacity, color palette, and sketch saving.
- **✅ Smart Todo Lists**: Kanban board with To Do → In Progress → Completed columns. Drag-to-move, priority levels (Low / Medium / High / Urgent), due dates, and overdue tracking.
- **📚 Subjects**: Track academic subjects with chapters, task counts, and progress bars.

### 👤 User Profile & Social Links

- **Profile Links**: Add LinkedIn, GitHub, Reddit, Discord, and Quora links during signup or later via the Profile Links modal.
- **Social Icons**: Displayed inline in the right panel; clickable links open in a new tab.
- **Edit Account**: Update social links anytime from the settings menu.

### 🤖 AI Nudges

- **NudgesPanel**: Context-aware productivity nudges that surface actionable tips based on your current stats and activity.

### 📄 PDF Tools

- Built-in PDF viewer and tools accessible from the right panel.

### 🎨 UI & Design Language

- **Modern SaaS Aesthetics**: Clean light/dark theme with soft neumorphism-inspired shadows (`shadow-soft`, `shadow-inner`).
- **Premium Typography**: **Plus Jakarta Sans** for crisp, highly legible data presentation.
- **Micro-Interactions**: Framer Motion entry/exit animations, hover-expansion effects, and smooth CSS transitions.
- **Fully Responsive**: Mobile-first approach with collapsible sidebar, slide-out right panel, hamburger menu on the landing page, touch-friendly action buttons, and adaptive layouts across all screen sizes.
- **Theme Toggle**: Switch between light and dark mode from the right panel.

---

## 🏗️ Technical Architecture

### Frontend (Client)

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 (Vite 7) |
| **Styling** | Tailwind CSS v4 — CSS-first `@theme` variables in `index.css` |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React + React Icons (social brands) |
| **State** | Zustand (dashboard, focus, nudge, theme stores) + React Context (auth) |
| **Routing** | React Router v7 |
| **Real-time** | Socket.IO Client |
| **PDF** | pdfjs-dist, jsPDF, html2canvas |
| **Doc Import** | Mammoth (`.docx` → HTML) |

### Backend (Server)

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js + Express 5 |
| **Database** | MongoDB via Mongoose 9 |
| **Auth** | JWT (httpOnly cookies) + bcryptjs |
| **Real-time** | Socket.IO |
| **File Storage** | Local filesystem (`StudyOS_Data/notebooks/`) |

### Data Models

`User` · `UserStat` · `Task` · `Event` · `Note` · `Notebook` · `Sketch` · `Subject` · `Calculation` · `FocusSession`

### API Routes

| Prefix | Resource |
|--------|----------|
| `/api/auth` | Register, Login, Logout, Profile, Social Links |
| `/api/tasks` | CRUD tasks with priority & status |
| `/api/events` | Calendar events with reminders |
| `/api/notes` | Sticky notes |
| `/api/notebooks` | Rich-text notebooks |
| `/api/sketches` | Drawing pad sketches |
| `/api/subjects` | Academic subjects |
| `/api/calculator` | Calculation history |
| `/api/focus` | Focus sessions (start / stop / history) |
| `/api/dashboard` | Aggregated stats & weekly activity |
| `/api/localsave` | Local file persistence |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.0.0 or higher
- **MongoDB** — a running local instance or cloud URI (e.g. MongoDB Atlas)
- **Git**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Mantessa.git
   cd Mantessa
   ```

2. **Install Dependencies**

   ```bash
   # Client
   cd client
   npm install

   # Server
   cd ../server
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/studyos
   JWT_SECRET=your_super_secret_key_change_this
   ```

4. **Launch the Application**

   Open two terminal windows:

   ```bash
   # Terminal 1 — Backend
   cd server
   npm run dev        # uses nodemon for hot-reload
   ```

   ```bash
   # Terminal 2 — Frontend
   cd client
   npm run dev        # Vite dev server on http://localhost:5173
   ```

---

## 📂 Folder Structure

```
Mantessa/
├── client/                          # React Frontend
│   ├── public/                      # Static assets (logo, favicon)
│   ├── src/
│   │   ├── assets/                  # Images & global static files
│   │   ├── components/
│   │   │   ├── Sidebar.jsx          # Floating hover-expand navigation
│   │   │   ├── RightPanel.jsx       # Focus timer, stats, profile, PDF tools
│   │   │   ├── NudgesPanel.jsx      # AI productivity nudges
│   │   │   ├── ProfileLinksModal.jsx # Edit social links modal
│   │   │   ├── PdfTools.jsx         # PDF viewer & utilities
│   │   │   ├── Character.jsx        # Login page mascot animation
│   │   │   └── ProtectedRoute.jsx   # Auth guard
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Auth state (login, register, social links)
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── store/
│   │   │   ├── dashboardStore.js    # Dashboard stats (Zustand)
│   │   │   ├── focusStore.js        # Focus timer state (Zustand)
│   │   │   ├── nudgeStore.js        # Nudge panel state (Zustand)
│   │   │   └── themeStore.js        # Light / dark theme (Zustand)
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx      # Public marketing page
│   │   │   ├── Login.jsx            # Auth (login + signup with social links)
│   │   │   ├── Dashboard.jsx        # Main hub
│   │   │   ├── TodoList.jsx         # Kanban task board
│   │   │   ├── Calendar.jsx         # Month / Week / Day calendar
│   │   │   ├── Calculator.jsx       # Scientific calculator
│   │   │   ├── StickyNotes.jsx      # Notes & checklists
│   │   │   ├── Notepad.jsx          # Rich-text notebook editor
│   │   │   ├── SharedNotebook.jsx   # Real-time collaborative editing
│   │   │   ├── DrawingPad.jsx       # Infinite drawing canvas
│   │   │   └── Subjects.jsx         # Academic subject tracker
│   │   ├── index.css                # Tailwind v4 theme & custom styles
│   │   ├── App.jsx                  # Route definitions
│   │   └── main.jsx                 # Entry point (axios defaults)
│   ├── index.html
│   └── vite.config.js
│
├── server/                          # Express API Server
│   ├── controllers/                 # Route handlers (11 controllers)
│   ├── middleware/                   # Auth middleware (JWT verification)
│   ├── models/                      # Mongoose schemas (10 models)
│   ├── routes/                      # API route definitions (11 routers)
│   └── index.js                     # Server entry, Socket.IO setup
│
└── StudyOS_Data/                    # Local file storage
    └── notebooks/                   # Saved notebook .json & .md files
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

_Built with ❤️ for the academic community._
