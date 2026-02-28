# 🎓 StudyOS

**StudyOS** is a premier, study-oriented productivity workspace tailored for students and lifelong learners. It unifies task management, scheduling, and creative tools into a single, cohesive platform. Built on the robust **MERN Stack** (MongoDB, Express, React, Node.js), StudyOS features a high-contrast **"Slate & Yellow"** dark mode interface designed to minimize eye strain and maximize focus during late-night study sessions.

## ✨ Core Features

### 🖥️ immersive Dashboard
The central hub of your academic life, designed for immediate insight and action.
- **Focus Timer (Pomodoro)**: A built-in, distraction-free timer to manage study blocks. Includes animate-pulse indicators for active sessions.
- **Productivity Vizualization**:
  - **Daily Goals**: Visual progress bars tracking task completion.
  - **Activity Rings**: Apple-style rings for Study Hours, Tasks Done, and Focus Score.
- **Smart Greetings**: Personalized welcome messages with a snapshot of pending tasks and current productivity status.
- **Quick Actions**: One-click access to start a focus session, view the calendar, or check notifications.

### 🛠️ Integrated Productivity Suite
Accessible instantly from the sidebar, these tools eliminate the need to switch apps:
- **📅 Academic Calendar**: Drag-and-drop scheduling for exams, assignments, and study blocks. Visualizes deadlines clearly.
- **🧮 Scientific Calculator**: embedded calculator for quick math, physics, and science computations without leaving the workspace.
- **📝 Sticky Notes**: A digital scratchpad for quick ideas, reminders, and temporary data. Persists locally.
- **🎨 Creative Drawing Pad**: A canvas for mind-mapping, sketching diagrams, or visual brainstorming.
- **✅ Smart Todo Lists**: Advanced task management with priority levels (High, Medium, Low), categories, and status tracking.

### 🎨 UI & Design Language
- **Dark Mode First**: A deep "Slate" (`#0F172A`) background paired with a high-contrast "Vivid Yellow" (`#FFD60A`) accent.
- **Neumorphism**: Subtle depth effects, soft shadows, and rounded corners (`rounded-2xl`, `rounded-3xl`) create a premium, tactile feel.
- **Micro-Interactions**: Smooth transitions, hover effects, and Framer Motion animations for a responsive, modern experience.
- **Responsive Layout**: Sidebar navigation and a collapsible right panel for secondary information (Profile, Timer, Stats).

## 🏗️ Technical Architecture

### Frontend (Client)
- **Framework**: React 19 (via Vite) for blazing fast performance.
- **Styling Engine**: **Tailwind CSS v4**.
  - Uses the modern CSS-first configuration (`@theme` variables in `index.css`).
  - Custom color palette defining surface, primary, and text variables.
- **Motion Library**: Framer Motion for complex animations (entry transitions, modal popups).
- **Icons**: Lucide React for a consistent, lightweight icon set.
- **State Management**: React Context API (`AuthContext`) for global user state.

### Backend (Server)
- **Runtime**: Node.js & Express.js.
- **Database**: MongoDB (NoSQL) for flexible data storage of users, tasks, and notes.
- **Authentication**: Secure JWT (JSON Web Token) implementation with HttpOnly cookies.
- **API Structure**: RESTful API endpoints organized by resource (`/api/auth`, `/api/tasks`, etc.).

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher.
- **MongoDB**: A running local instance or a robust Atlas Cloud URI.
- **Git**: For version control.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/StudyOS.git
   cd StudyOS
   ```

2. **Install Dependencies**
   It is recommended to install dependencies for both the client and server concurrently.
   
   **Client:**
   ```bash
   cd client
   npm install
   ```

   **Server:**
   ```bash
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
   You will need two terminal windows.

   **Terminal 1 (Backend):**
   ```bash
   cd server
   npm start
   # API will run on http://localhost:5000
   ```

   **Terminal 2 (Frontend):**
   ```bash
   cd client
   npm run dev
   # UI will run on http://localhost:5173
   ```

## 📂 Folder Structure

```
StudyOS/
├── client/                     # React Frontend Application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images and global static files
│   │   ├── components/         # Reusable UI Blocks
│   │   │   ├── RightPanel.jsx  # Focus timer & Stats sidebar
│   │   │   ├── Sidebar.jsx     # Main navigation
│   │   │   └── ProtectedRoute.jsx # Auth Guard
│   │   ├── context/            # Global State (Auth)
│   │   ├── pages/              # Main Route Views
│   │   │   ├── Dashboard.jsx   # Main Hub
│   │   │   └── Login.jsx       # Auth Page
│   │   ├── index.css           # Tailwind v4 Theme Configuration
│   │   └── main.jsx            # App Entry Point
│   ├── index.html              # HTML Root
│   └── vite.config.js          # Vite Bundler Config
│
└── server/                     # Express API Server
    ├── controllers/            # Request Handlers (Auth, Data)
    ├── middleware/             # Auth checks, error handling
    ├── models/                 # Mongoose Data Schemas
    ├── routes/                 # API Route Definitions
    └── index.js                # Server Entry & Config
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Built with ❤️ for the academic community.*
