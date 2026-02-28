import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/calendar" element={<div className="flex h-screen bg-brand-light"><Sidebar /><RightPanel /><main className="flex-1 ml-64 mr-80 p-8"><h1>Calendar Coming Soon</h1></main></div>} />
            <Route path="/calculator" element={<div className="flex h-screen bg-brand-light"><Sidebar /><RightPanel /><main className="flex-1 ml-64 mr-80 p-8"><h1>Calculator Coming Soon</h1></main></div>} />
            <Route path="/sticky-notes" element={<div className="flex h-screen bg-brand-light"><Sidebar /><RightPanel /><main className="flex-1 ml-64 mr-80 p-8"><h1>Sticky Notes Coming Soon</h1></main></div>} />
            <Route path="/drawing-pad" element={<div className="flex h-screen bg-brand-light"><Sidebar /><RightPanel /><main className="flex-1 ml-64 mr-80 p-8"><h1>Drawing Pad Coming Soon</h1></main></div>} />
            <Route path="/todos" element={<div className="flex h-screen bg-brand-light"><Sidebar /><RightPanel /><main className="flex-1 ml-64 mr-80 p-8"><h1>Todo Lists Coming Soon</h1></main></div>} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
