import React from 'react';
import { Calendar, Calculator, StickyNote, PenTool, ListTodo, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onMobileClose }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        if (onMobileClose) onMobileClose();
    };

    const handleLogout = () => {
        logout();
        navigate('/');
        if (onMobileClose) onMobileClose();
    };

    const navItems = [
        { icon: Calendar, label: 'Calendar', path: '/calendar' },
        { icon: Calculator, label: 'Calculator', path: '/calculator' },
        { icon: StickyNote, label: 'Sticky Notes', path: '/sticky-notes' },
        { icon: PenTool, label: 'Drawing Pad', path: '/drawing-pad' },
        { icon: ListTodo, label: 'Todo Lists', path: '/todos' },
    ];

    const currentPath = window.location.pathname;

    return (
        <aside className="w-72 bg-surface h-full flex flex-col justify-between p-6 z-50 border-r border-border overflow-y-auto custom-scrollbar">
            {/* Logo Area */}
            <div>
                <div 
                    onClick={() => handleNavigation('/dashboard')}
                    className="flex items-center gap-4 mb-10 px-2 cursor-pointer group"
                >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary-dark font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        S
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">StudyOS</span>
                </div>

                {/* Navigation */}
                <nav className="space-y-3">
                    {navItems.map((item, index) => {
                        const isActive = currentPath === item.path;
                        return (
                            <button
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                                    isActive 
                                    ? 'bg-primary text-slate-900 shadow-glow font-bold scale-[1.02]' 
                                    : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
                                }`}
                            >
                                <item.icon 
                                    size={20} 
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className={`transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-text-muted group-hover:text-primary'}`} 
                                />
                                <span className="text-base tracking-wide">{item.label}</span>
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/20 rounded-l-full"></div>
                                )}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section */}
            <div>
                <div className="bg-surface rounded-xl p-4 mb-4 border border-border/50">
                    <div className="flex justify-between items-end mb-2">
                         <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Daily Goal</h4>
                         <span className="text-xs font-bold text-primary">80%</span>
                    </div>
                    <div className="w-full bg-surface-hover rounded-full h-1.5 overflow-hidden">
                        <div className="bg-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(255,214,10,0.5)]" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-text-muted hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all duration-200 font-medium text-sm"
                >
                    <LogOut size={18} strokeWidth={2} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
