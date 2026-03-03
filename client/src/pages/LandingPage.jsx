import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Calculator,
  CheckSquare,
  ChevronRight,
  Clock,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Pencil,
  StickyNote,
  Target,
  TrendingUp,
  Zap,
  Award,
  ArrowRight,
  Star,
  Play,
  Sparkles,
  Brain,
  Shield,
  Users,
  Flame,
  Github,
  ExternalLink,
} from "lucide-react";

// ─── Animation Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Reusable InView Wrapper ────────────────────────────────────────────────
function AnimateWhenVisible({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Label ──────────────────────────────────────────────────────────
function SectionLabel({ children, color = "bg-yellow-100 text-yellow-700" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 ${color}`}
    >
      {children}
    </span>
  );
}

// ─── Dashboard Mockup (Clean Flat Style) ───────────────────────────────────
function DashboardMockup() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((p) => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const minutes = String(Math.floor((1500 - tick) / 60) % 60).padStart(2, "0");
  const seconds = String((1500 - tick) % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full max-w-4xl mx-auto z-10"
    >
      {/* Abstract decorative shapes behind mockup */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-yellow-200 rounded-full blur-none opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-200 rounded-full blur-none opacity-50" />
      
      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-xl border-4 border-gray-900 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500" />
          </div>
          <div className="flex-1 max-w-sm mx-auto bg-white border border-gray-200 rounded-md h-8 flex items-center px-3 text-xs text-gray-400 font-mono">
           studyos.app
          </div>
        </div>

        {/* Browser Body */}
        <div className="p-1 flex h-[350px] bg-slate-50">
           {/* Sidebar */}
           <div className="w-16 bg-white m-2 mr-1 rounded-2xl border border-gray-100 flex flex-col items-center py-6 gap-6 shadow-sm">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <LayoutDashboard size={20} />
              </div>
              <div className="w-10 h-10 text-gray-400 hover:bg-gray-50 rounded-xl flex items-center justify-center transition-colors">
                <CheckSquare size={20} />
              </div>
              <div className="w-10 h-10 text-gray-400 hover:bg-gray-50 rounded-xl flex items-center justify-center transition-colors">
                 <Calendar size={20} />
              </div>
              <div className="w-10 h-10 text-gray-400 hover:bg-gray-50 rounded-xl flex items-center justify-center transition-colors">
                 <Brain size={20} />
              </div>
           </div>

           {/* Content */}
           <div className="flex-1 m-2 ml-1 grid grid-cols-12 grid-rows-6 gap-3">
              {/* Header Area */}
              <div className="col-span-12 row-span-1 flex items-center justify-between px-2">
                 <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900">Good Morning, Alex!</h3>
                    <p className="text-xs text-gray-500">Ready to conquer your goals?</p>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-white shadow-sm flex items-center justify-center font-bold text-xs">AK</div>
              </div>

              {/* Timer Card - Big & Bold */}
              <div className="col-span-4 row-span-3 bg-white rounded-2xl border-2 border-gray-100 p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                 <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                 <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Focus Session</span>
                 <div className="text-5xl font-black text-gray-900 tracking-tighter mb-1 font-mono">
                    {minutes}:{seconds}
                 </div>
                 <span className="text-xs font-semibold px-2 py-1 bg-red-100 text-red-600 rounded-md">Deep Work</span>
              </div>

              {/* Stats Card */}
              <div className="col-span-4 row-span-3 bg-indigo-600 rounded-2xl p-4 text-white shadow-lg shadow-indigo-200 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <p className="text-indigo-200 text-xs font-medium uppercase">Total Study</p>
                    <TrendingUp size={16} className="text-indigo-200" />
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold mb-1">4.5<span className="text-lg opacity-60">h</span></h4>
                    <p className="text-xs opacity-70">Top 5% of students today</p>
                 </div>
                 <div className="w-full bg-indigo-500/50 h-1.5 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-white w-[85%] rounded-full"></div>
                 </div>
              </div>

              {/* Tasks List */}
              <div className="col-span-4 row-span-5 bg-white rounded-2xl border-2 border-gray-100 p-4 shadow-sm flex flex-col">
                 <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-gray-900">Next Up</span>
                    <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-bold">3 Left</span>
                 </div>
                 <div className="space-y-3 flex-1">
                    {[
                       { t: "Physics Lab Report", tag: "High", c: "bg-red-100 text-red-700" },
                       { t: "Read Chapter 4", tag: "Med", c: "bg-yellow-100 text-yellow-700" },
                       { t: "Calculus Quiz", tag: "High", c: "bg-red-100 text-red-700" },
                    ].map((item, i) => (
                       <div key={i} className="p-3 bg-gray-50 rounded-xl border border-gray-100/50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
                          <p className="text-xs font-bold text-gray-800 mb-2">{item.t}</p>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.c}`}>{item.tag}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Bottom Quick Actions / Graph */}
              <div className="col-span-8 row-span-2 bg-white rounded-2xl border-2 border-gray-100 p-4 flex items-center justify-between shadow-sm">
                  <div className="flex gap-4">
                     <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-bold uppercase">Streak</span>
                        <div className="flex items-center gap-1">
                           <Flame size={18} className="text-orange-500 fill-orange-500" />
                           <span className="text-xl font-black text-gray-900">12 Days</span>
                        </div>
                     </div>
                     <div className="w-px h-10 bg-gray-100"></div>
                     <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-bold uppercase">Focus Score</span>
                        <div className="flex items-center gap-1">
                           <Target size={18} className="text-emerald-500" />
                           <span className="text-xl font-black text-gray-900">94/100</span>
                        </div>
                     </div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors">
                     View Report
                  </button>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Features Config ────────────────────────────────────────────────────────
const features = [
  {
    icon: LayoutDashboard,
    title: "All-in-One Dashboard",
    desc: "Your entire academic life in one view. Track tasks, schedules, and goals without the clutter.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Focus Timer",
    desc: "A built-in Pomodoro timer that tracks your deep work sessions and blocks distractions automatically.",
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    icon: CheckSquare,
    title: "Smart Tasks",
    desc: "More than just a todo list. Organizes assignments by priority, subject, and looming deadlines.",
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    icon: Calendar,
    title: "Student Calendar",
    desc: "Synced with your tasks. Visualize exam dates and study blocks with a drag-and-drop interface.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    icon: StickyNote,
    title: "Quick Notes",
    desc: "Capture ideas instantly. Sticky notes live on your dashboard for those 'aha!' moments.",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    icon: Calculator,
    title: "Study Tools",
    desc: "Integrated scientific calculator and formula sheets so you never have to switch apps.",
    bg: "bg-pink-100",
    color: "text-pink-600",
  },
  {
    icon: Pencil,
    title: "Infinite Canvas",
    desc: "A whiteboard for your thoughts. Sketch diagrams, mind maps, and solve problems visually.",
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    icon: Users,
    title: "Study Groups",
    desc: "Share notebooks and collaborate on study guides with classmates in real-time.",
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
];

const stack = [
  { name: "React 19", icon: "⚛️", bg: "bg-blue-50 border-blue-100" },
  { name: "Node.js", icon: "🟢", bg: "bg-green-50 border-green-100" },
  { name: "MongoDB", icon: "🍃", bg: "bg-emerald-50 border-emerald-100" },
  { name: "Tailwind", icon: "🌊", bg: "bg-cyan-50 border-cyan-100" },
  { name: "Motion", icon: "✨", bg: "bg-purple-50 border-purple-100" },
];

export default function LandingPage() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -100]); // Parallax header if needed, or simple stick
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.9)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"]
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-yellow-200">
      
      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <motion.nav
        style={{ backgroundColor: navBg, borderBottom: `1px solid`, borderColor: navBorder }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-all"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white">
              <Brain size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">StudyOS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Methodology", "Testimonials"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      <main className="pt-32 pb-20 overflow-hidden">
        
        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative px-6 mb-32">
          {/* Background decor */}
          <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/3 -translate-y-1/4">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="300" fill="#E0E7FF"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 -z-10 opacity-20 transform -translate-x-1/3 translate-y-1/3">
             <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="500" height="500" rx="40" fill="#FEF3C7"/>
             </svg>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
               initial="hidden"
               animate="visible"
               variants={stagger}
               className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-100 rounded-full">
                  v1.0 is now live
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Master your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  academic life.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                StudyOS unifies task management, scheduling, and creative tools into one powerful platform designed for high-performance students.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/login"
                  className="px-8 py-4 rounded-xl bg-gray-900 text-white font-bold text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-gray-200 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Start for free <ArrowRight size={18} />
                </Link>
                <div className="flex items-center gap-4 text-sm font-semibold text-gray-500 px-4">
                  <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
                     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                  </div>
                  <span>Trusted by 2,000+ students</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visualization */}
            <DashboardMockup />
          </div>
        </section>

        {/* ── Logos / Trust ────────────────────────────────────────────── */}
        <section className="py-10 border-y border-gray-100 bg-white/50 mb-32">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Powering students from</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for university logos - using text for now */}
                 <span className="text-xl font-bold font-serif">Harvard</span>
                 <span className="text-xl font-black italic">MIT</span>
                 <span className="text-xl font-bold">Stanford</span>
                 <span className="text-xl font-semibold font-mono">Berkeley</span>
                 <span className="text-xl font-serif font-black">Oxford</span>
              </div>
           </div>
        </section>

        {/* ── Features Grid ────────────────────────────────────────────── */}
        <section id="features" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center mb-20">
            <SectionLabel color="bg-blue-100 text-blue-700">Everything Included</SectionLabel>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              More than just a todo list
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We've packed every tool you need to succeed into one cohesive operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={26} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Big Feature Highlight 1 ──────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
           <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-6 border border-white/20">
                       <Zap size={14} className="fill-yellow-400 text-yellow-400" />
                       <span className="uppercase tracking-wide">Focus Mode</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                       Deep work made <br/>
                       <span className="text-yellow-400">effortless.</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
                       Our scientifically-tuned Pomodoro timer helps you maintain flow state. Block distractions, track your streaks, and visualize your productivity patterns over time.
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                       Try Focus Mode
                    </button>
                 </div>

                 <div className="relative">
                    {/* Abstract shapes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/30 rounded-full blur-3xl"></div>
                    
                    {/* Simple UI Card Representation */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-sm mx-auto shadow-2xl">
                       <div className="flex justify-between items-center mb-8">
                          <span className="text-sm font-bold opacity-60">TIMER</span>
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                       </div>
                       <div className="text-center mb-8">
                          <div className="text-7xl font-mono font-bold tracking-tighter mb-2">25:00</div>
                          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Work Session</span>
                       </div>
                       <div className="flex gap-4">
                          <button className="flex-1 bg-white text-gray-900 py-3 rounded-lg font-bold hover:scale-105 transition-transform">Pause</button>
                          <button className="flex-1 bg-white/10 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">Stop</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ── Methodology / Steps ─────────────────────────────────────── */}
        <section id="methodology" className="max-w-7xl mx-auto px-6 mb-32">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <SectionLabel color="bg-purple-100 text-purple-700">The Workflow</SectionLabel>
                 <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Designed for flow, not friction.</h2>
                 <p className="text-lg text-gray-500 mb-10">StudyOS gets out of your way so the only thing you have to focus on is your work.</p>
                 
                 <div className="space-y-8">
                    {[
                       { title: "Plan", desc: "Dump all your assignments and exams into the calendar.", color: "bg-blue-500" },
                       { title: "Focus", desc: "Pick one task, start the timer, and execute.", color: "bg-purple-500" },
                       { title: "Review", desc: "Check your analytics and optimize your routine.", color: "bg-pink-500" }
                    ].map((step, i) => (
                       <div key={i} className="flex gap-5">
                          <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-${step.color}/20`}>
                             {i+1}
                          </div>
                          <div>
                             <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                             <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="bg-gray-100 rounded-[2rem] h-[500px] relative overflow-hidden">
                 {/* Decorative Illustration Area */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                       <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"
                       />
                       <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-4 border-2 border-dashed border-purple-300 rounded-full"
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Brain size={64} className="text-gray-400" />
                       </div>
                       {/* Orbiting elements */}
                       <div className="absolute -top-6 left-1/2 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <CheckSquare size={20} className="text-green-500" />
                       </div>
                       <div className="absolute bottom-10 -right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <Clock size={20} className="text-red-500" />
                       </div>
                       <div className="absolute bottom-10 -left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <Award size={20} className="text-yellow-500" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ── Testimonials ────────────────────────────────────────────── */}
        <section id="testimonials" className="bg-gray-50 py-24 mb-24">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-gray-900">What students are saying</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                    { text: "It's clean, it's fast, and it doesn't try to do too much. Exactly what I needed.", author: "Sarah J.", role: "Med Student", color: "bg-yellow-200" },
                    { text: "The visualization of my study hours actually motivated me to work harder.", author: "Mike T.", role: "Engineering", color: "bg-blue-200" },
                    { text: "Finally a productivity app that doesn't feel like a spreadsheet.", author: "Jessica L.", role: "Design", color: "bg-purple-200" },
                 ].map((t, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:-translate-y-1 transition-transform duration-300">
                       <div className="flex gap-1 mb-6">
                          {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">"{t.text}"</p>
                       <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-gray-800`}>
                             {t.author[0]}
                          </div>
                          <div>
                             <div className="font-bold text-gray-900 text-sm">{t.author}</div>
                             <div className="text-gray-400 text-xs">{t.role}</div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ── Tech Stack ──────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
           <p className="font-bold text-gray-400 text-sm tracking-widest uppercase mb-8">Built with modern tech</p>
           <div className="flex flex-wrap justify-center gap-4">
              {stack.map((tech) => (
                 <div key={tech.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tech.bg} text-sm font-semibold text-gray-700 shadow-sm`}>
                    <span>{tech.icon}</span>
                    {tech.name}
                 </div>
              ))}
           </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 text-center pb-20">
           <div className="bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl shadow-purple-200 relative overflow-hidden">
               {/* Decorative circles */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

               <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to upgrade your workflow?</h2>
                  <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">Join the new wave of productive students. No credit card required, free forever for individuals.</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link to="/login" className="px-8 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                        Get Started Now <Sparkles size={18} />
                     </Link>
                     <a href="https://github.com/studyos" className="px-8 py-4 bg-purple-700/50 backdrop-blur-sm border border-purple-400/30 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                        View Source <Github size={18} />
                     </a>
                  </div>
               </div>
           </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                 <Brain size={16} />
              </div>
              <span className="font-bold text-gray-900 text-lg">StudyOS</span>
           </div>
           
           <div className="flex gap-8 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">GitHub</a>
           </div>

           <p className="text-sm text-gray-400">© 2026 StudyOS Inc.</p>