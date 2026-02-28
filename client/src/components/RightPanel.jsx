import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Settings, User, Edit3, LogOut,
    Moon, Bell,
    Linkedin, Github,
    Sparkles, TrendingUp, Target,
    X, Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// --- Circular Progress Ring -------------------------------------------------
const ProgressRing = ({ progress = 0, size = 56, strokeWidth = 4, color = '#6366F1' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width={size} height={size} className='progress-ring -rotate-90'>
            <circle
                cx={size / 2} cy={size / 2} r={radius}
                fill='none' stroke='currentColor'
                strokeWidth={strokeWidth}
                className='text-white/10'
            />
            <circle
                cx={size / 2} cy={size / 2} r={radius}
                fill='none' stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className='progress-ring-circle transition-all duration-1000 ease-out'
            />
            <text
                x={size / 2} y={size / 2}
                textAnchor='middle' dominantBaseline='central'
                className='fill-current text-text-main font-bold rotate-90 origin-center text-xs'
                style={{ fontSize: size * 0.25 }}
            >
                {progress}%
            </text>
        </svg>
    );
};

// --- Main Right Panel -------------------------------------------------------
const RightPanel = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // -- State ------------------------------------------------------------
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const [profileHover, setProfileHover] = useState(false);
    const [focusActive, setFocusActive] = useState(true);
    const [sessionSeconds, setSessionSeconds] = useState(0);

    // -- Live Timer -------------------------------------------------------
    useEffect(() => {
        let interval;
        if (focusActive) {
            interval = setInterval(() => {
                setSessionSeconds(s => s + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [focusActive]);

    const formatTime = (totalSec) => {
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // -- Mock Data --------------------------------------------------------
    const productivityScore = 78;
    const activeGoal = 'Complete Physics Ch.4';
    const scoreStatus = productivityScore >= 75 ? 'green' : productivityScore >= 50 ? 'yellow' : 'red';

    const statusColors = {
        green: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', label: 'On Track' },
        yellow: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', label: 'Needs Focus' },
        red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', label: 'Behind' },
    };

    const status = statusColors[scoreStatus];

    return (
        <aside className='w-80 bg-surface h-full flex flex-col gap-8 p-6 z-40 border-l border-border overflow-y-auto custom-scrollbar'>
            
            {/* -- 1. User Profile & Settings Header -- */}
            <div className='flex justify-between items-start'>
                <div 
                    className='flex items-center gap-4 cursor-pointer group'
                    onMouseEnter={() => setProfileHover(true)}
                    onMouseLeave={() => setProfileHover(false)}
                >
                    <div className='relative w-12 h-12'>
                        <div className='w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-soft group-hover:scale-105 transition-transform duration-300'>
                             {user?.username ? user.username[0].toUpperCase() : 'A'}
                        </div>
                        <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-surface'></div>
                    </div>
                    <div>
                         <h3 className='font-bold text-sm text-text-main leading-tight group-hover:text-primary transition-colors'>
                            {user?.username || 'Arin Gupta'}
                         </h3>
                         <p className='text-xs text-text-secondary font-medium'>Pro Member</p>
                    </div>
                </div>

                <div className='relative'>
                    <button 
                        onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                        className={`p-2 rounded-lg transition-all duration-200 ${showSettingsMenu ? 'bg-primary text-slate-900 shadow-glow' : 'text-text-muted hover:bg-surface-hover hover:text-text-main'}`}
                    >
                        <Settings size={20} className={showSettingsMenu ? 'animate-spin-slow' : ''} />
                    </button>
                    
                    {/* Settings Dropdown */}
                    <AnimatePresence>
                        {showSettingsMenu && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className='absolute right-0 top-10 w-48 bg-surface rounded-xl shadow-lg border border-border p-1.5 z-50 origin-top-right text-text-muted divide-y divide-border/50'
                            >
                                <div className='space-y-0.5 p-1'>
                                    <button className='w-full flex items-center gap-3 px-3 py-2 text-xs font-medium hover:bg-surface-hover hover:text-text-main rounded-lg transition-colors group'>
                                        <User size={14} className="group-hover:text-primary transition-colors" /> Profile
                                    </button>
                                    <button className='w-full flex items-center gap-3 px-3 py-2 text-xs font-medium hover:bg-surface-hover hover:text-text-main rounded-lg transition-colors group'>
                                        <Edit3 size={14} className="group-hover:text-primary transition-colors" /> Edit
                                    </button>
                                </div>
                                <div className='p-1'>
                                    <button onClick={handleLogout} className='w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors'>
                                        <LogOut size={14} /> Logout
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* -- 2. Focus Timer Card -- */}
            <div className='bg-surface rounded-2xl p-6 text-text-main shadow-card border border-border relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none'></div>
                
                <div className='flex justify-between items-center mb-6 relative z-10'>
                    <div className='flex items-center gap-2'>
                        <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${focusActive ? 'bg-primary text-primary animate-pulse' : 'bg-red-500 text-red-500'}`}></div>
                        <span className='text-[10px] font-bold tracking-widest uppercase text-text-muted'>Focus Session</span>
                    </div>
                </div>
                
                <div className='text-center mb-8 relative z-10'>
                    <div className='text-5xl font-mono font-bold tracking-widest tabular-nums mb-1 text-text-main drop-shadow-lg'>
                        {formatTime(sessionSeconds)}
                    </div>
                </div>

                <div className='flex justify-center gap-3 relative z-10'>
                    <button 
                        onClick={() => setFocusActive(!focusActive)}
                        className='w-full bg-primary text-slate-900 py-3 rounded-xl text-sm font-bold hover:bg-[#FFDE33] hover:shadow-[0_0_20px_rgba(255,214,10,0.3)] transition-all active:scale-[0.98]'
                    >
                        {focusActive ? 'Pause Session' : 'Start Focus'}
                    </button>
                </div>
            </div>
            
             {/* -- 3. Goal Progress -- */}
             <div className='bg-surface rounded-2xl p-5 border border-border shadow-card hover:border-primary/20 transition-all duration-300 group'>
                <div className='flex justify-between items-center mb-4'>
                    <h4 className='font-bold text-sm text-text-muted uppercase tracking-wider'>Daily Goal</h4>
                    <span className={`px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold border ${status.bg} ${status.text} ${status.border} shadow-sm`}>
                        {status.label}
                    </span>
                </div>
                
                <div className='flex items-center justify-between gap-4'>
                    <div className='relative'>
                        <ProgressRing progress={productivityScore} size={52} strokeWidth={4} color='#FFD60A' />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <Target size={16} className='text-primary' />
                        </div>
                    </div>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-semibold text-text-main mb-0.5 truncate' title={activeGoal}>
                            {activeGoal}
                        </p>
                        <p className='text-xs text-text-secondary'>Physics � Chapter 4</p>
                    </div>
                </div>
             </div>

             {/* -- 4. Notifications / Tools -- */}
             <div className='space-y-3'>
                 <h4 className='text-[10px] font-bold text-text-muted uppercase tracking-wider ml-1'>Quick Actions</h4>
                 <div className='grid grid-cols-2 gap-3'>
                     <button className='flex flex-col items-center gap-3 p-4 bg-surface rounded-2xl hover:bg-surface-hover transition-all duration-200 border border-transparent hover:border-border/50 group'>
                         <div className='w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:scale-110 transition-all duration-300'>
                             <Moon size={18} className="text-slate-800" />
                         </div>
                         <span className='text-xs font-medium text-text-secondary group-hover:text-white'>Dark Mode</span>
                     </button>
                     <button className='flex flex-col items-center gap-3 p-4 bg-surface rounded-2xl hover:bg-surface-hover transition-all duration-200 border border-transparent hover:border-border/50 group'>
                         <div className='w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:scale-110 transition-all duration-300'>
                             <Bell size={18} className="text-slate-800" />
                         </div>
                         <span className='text-xs font-medium text-text-secondary group-hover:text-white'>Alerts</span>
                     </button>
                 </div>
             </div>
             
             {/* -- 5. AI Insight -- */}
             <div className='bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-4 border border-primary/10 relative overflow-hidden'>
                 <div className='flex gap-2.5 mb-2'>
                     <div className='p-1 bg-white rounded-lg shadow-sm text-primary'>
                         <Sparkles size={14} />
                     </div>
                     <h4 className='text-xs font-bold text-text-main pt-0.5'>AI Insight</h4>
                 </div>
                 <p className='text-xs text-text-secondary leading-relaxed mb-3'>
                     Peak productivity: <span className='font-semibold text-text-main'>10-12 PM</span>.
                 </p>
                 <button className='w-full py-2 bg-white rounded-xl text-[10px] font-bold text-slate-900 shadow-sm hover:shadow-md transition-shadow uppercase tracking-wide'>
                     APPLY SCHEDULE
                 </button>
             </div>

        </aside>
    );
};

export default RightPanel;
