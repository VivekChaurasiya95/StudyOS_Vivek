import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Character from "../components/Character";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaReddit,
  FaDiscord,
  FaQuora,
} from "react-icons/fa";
import { Link } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    linkedin: "",
    github: "",
    reddit: "",
    discord: "",
    quora: "",
  });
  const [error, setError] = useState("");
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.username, formData.email, formData.password, {
          linkedin: formData.linkedin,
          github: formData.github,
          reddit: formData.reddit,
          discord: formData.discord,
          quora: formData.quora,
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Auth failed", error);
      const errorMessage =
        error.response?.data?.message ||
        "Authentication failed. Please check your credentials.";
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text-main relative overflow-hidden p-4 sm:p-6">
      {/* Minimal Background Decor */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface p-5 sm:p-8 rounded-3xl shadow-float w-full max-w-5xl z-10 flex flex-col md:flex-row gap-6 sm:gap-12 max-h-[95vh] overflow-y-auto"
      >
        {/* Left Side: Character & Welcome */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center bg-background shadow-inner rounded-2xl p-4 sm:p-8">
          <Character
            state={formData.email || formData.password ? "typing" : "idle"}
          />
          <h3 className="mt-6 text-2xl font-bold text-text-main text-center">
            {isLogin ? "Welcome Back!" : "Join Mantessa"}
          </h3>
          <p className="mt-2 text-text-secondary text-center text-sm leading-relaxed">
            {isLogin
              ? "Your personalized study workspace is ready. Let's get productive."
              : "Create your account to unlock a new way of learning."}
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 flex flex-col justify-center py-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-main mb-2">
              {isLogin ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-text-secondary">
              {isLogin
                ? "Please enter your details."
                : "Start your journey with us."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background shadow-inner rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-text-muted text-text-main"
                  placeholder="e.g., Alex Carter"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background shadow-inner rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-text-muted text-text-main"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background shadow-inner rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-text-muted text-text-main"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm shadow-inner">
                {error}
              </div>
            )}

            {!isLogin && (
              <div className="pt-3 border-t border-border/30">
                <p className="text-xs font-medium text-text-secondary mb-3 flex items-center gap-1.5">
                  <Link size={12} /> Profile Links
                  <span className="text-text-muted font-normal">(Optional)</span>
                </p>
                <div className="space-y-2.5">
                  {[
                    { key: "linkedin", icon: <FaLinkedin size={14} />, color: "#0077B5", placeholder: "LinkedIn URL" },
                    { key: "github", icon: <FaGithub size={14} />, color: "#6e5494", placeholder: "GitHub URL" },
                    { key: "reddit", icon: <FaReddit size={14} />, color: "#FF4500", placeholder: "Reddit URL" },
                    { key: "discord", icon: <FaDiscord size={14} />, color: "#5865F2", placeholder: "Discord username" },
                    { key: "quora", icon: <FaQuora size={14} />, color: "#B92B27", placeholder: "Quora URL" },
                  ].map(({ key, icon, color, placeholder }) => (
                    <div key={key} className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: color + "18", color }}
                      >
                        {icon}
                      </div>
                      <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="flex-1 px-3 py-2 bg-background shadow-inner rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder-text-muted text-text-main"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" className="w-full btn-primary mt-2">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-text-secondary">
            {isLogin ? "New to Mantessa? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
