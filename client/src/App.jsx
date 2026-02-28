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
            <Route path="/calendar" element={<div className="min-h-screen bg-background flex font-sans text-text-main"><div className="hidden md:block fixed inset-y-0 left-0 z-50"><Sidebar /></div><div className="hidden xl:block fixed inset-y-0 right-0 z-50"><RightPanel /></div><main className="flex-1 md:ml-20 main-content right-panel-transition p-8 overflow-y-auto"><h1 className="text-2xl font-bold">Calendar Coming Soon</h1></main></div>} />
            <Route path="/calculator" element={<div className="min-h-screen bg-background flex font-sans text-text-main"><div className="hidden md:block fixed inset-y-0 left-0 z-50"><Sidebar /></div><div className="hidden xl:block fixed inset-y-0 right-0 z-50"><RightPanel /></div><main className="flex-1 md:ml-20 main-content right-panel-transition p-8 overflow-y-auto"><h1 className="text-2xl font-bold">Calculator Coming Soon</h1></main></div>} />
            <Route path="/sticky-notes" element={<div className="min-h-screen bg-background flex font-sans text-text-main"><div className="hidden md:block fixed inset-y-0 left-0 z-50"><Sidebar /></div><div className="hidden xl:block fixed inset-y-0 right-0 z-50"><RightPanel /></div><main className="flex-1 md:ml-20 main-content right-panel-transition p-8 overflow-y-auto"><h1 className="text-2xl font-bold">Sticky Notes Coming Soon</h1></main></div>} />
            <Route path="/drawing-pad" element={<div className="min-h-screen bg-background flex font-sans text-text-main"><div className="hidden md:block fixed inset-y-0 left-0 z-50"><Sidebar /></div><div className="hidden xl:block fixed inset-y-0 right-0 z-50"><RightPanel /></div><main className="flex-1 md:ml-20 main-content right-panel-transition p-8 overflow-y-auto"><h1 className="text-2xl font-bold">Drawing Pad Coming Soon</h1></main></div>} />
            <Route path="/todos" element={<div className="min-h-screen bg-background flex font-sans text-text-main"><div className="hidden md:block fixed inset-y-0 left-0 z-50"><Sidebar /></div><div className="hidden xl:block fixed inset-y-0 right-0 z-50"><RightPanel /></div><main className="flex-1 md:ml-20 main-content right-panel-transition p-8 overflow-y-auto"><h1 className="text-2xl font-bold">Todo Lists Coming Soon</h1></main></div>} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
