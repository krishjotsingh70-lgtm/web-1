'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Image,
  FileText,
  Users,
  Settings,
  LogOut,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  BarChart3,
  Mail,
  Shield,
} from 'lucide-react';

const ADMIN_PASSWORD = '1234';

interface NavLink {
  label: string;
  icon: React.ReactNode;
  section: string;
}

const navLinks: NavLink[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, section: 'dashboard' },
  { label: 'Portfolio', icon: <Image size={18} />, section: 'portfolio' },
  { label: 'Messages', icon: <Mail size={18} />, section: 'messages' },
  { label: 'Testimonials', icon: <Users size={18} />, section: 'testimonials' },
  { label: 'Settings', icon: <Settings size={18} />, section: 'settings' },
];

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('admin_auth='));
    if (authCookie?.split('=')[1] === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      document.cookie = 'admin_auth=true; path=/admin; max-age=86400; SameSite=Lax';
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    document.cookie = 'admin_auth=; path=/admin; max-age=0';
    setIsAuthenticated(false);
    setPassword('');
    setActiveSection('dashboard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  // ─── Login Screen ───────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
        <div className="w-full max-w-md">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
            {/* Logo / Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 border border-purple-500/30 mb-4">
                <Shield size={28} className="text-purple-400" />
              </div>
              <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
              <p className="text-gray-400 mt-1 text-sm">Palki Printing Press</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Sign In
                <ChevronRight size={16} />
              </button>
            </form>

            <p className="text-center text-gray-600 text-xs mt-6">
              Authorized personnel only
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── Admin Dashboard ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-600 flex items-center justify-center">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Admin Panel</h2>
              <p className="text-xs text-gray-500">Palki Printing</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => setActiveSection(link.section)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.section
                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent'
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white capitalize">{activeSection}</h1>
            <p className="text-gray-500 text-sm mt-1">
              {activeSection === 'dashboard' && 'Overview of your website'}
              {activeSection === 'portfolio' && 'Manage your portfolio items'}
              {activeSection === 'messages' && 'View contact form submissions'}
              {activeSection === 'testimonials' && 'Manage client testimonials'}
              {activeSection === 'settings' && 'Website configuration'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-600/30 flex items-center justify-center text-purple-400 text-sm font-bold">
              A
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Portfolio Items', value: '12', icon: <Image size={20} />, color: 'purple' },
                { label: 'Messages', value: '5', icon: <Mail size={20} />, color: 'blue' },
                { label: 'Testimonials', value: '8', icon: <Users size={20} />, color: 'green' },
                { label: 'Page Views', value: '1.2k', icon: <BarChart3 size={20} />, color: 'orange' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-${stat.color}-400`}>{stat.icon}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Website</span>
                  <span className="text-white text-sm font-medium">Palki Printing Press</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Framework</span>
                  <span className="text-white text-sm font-medium">Next.js 14</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Last Updated</span>
                  <span className="text-white text-sm font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 text-sm">Status</span>
                  <span className="text-green-400 text-sm font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Portfolio Items</h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                + Add New
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Portfolio management will be connected to your data source. Currently showing placeholder content.
            </p>
          </div>
        )}

        {/* Messages Section */}
        {activeSection === 'messages' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Contact Messages</h3>
            <p className="text-gray-500 text-sm">
              Messages from the contact form will appear here. Connect a backend to enable message storage.
            </p>
          </div>
        )}

        {/* Testimonials Section */}
        {activeSection === 'testimonials' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Testimonials</h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                + Add New
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Testimonial management will be connected to your data source.
            </p>
          </div>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white text-sm font-medium">Admin Password</p>
                  <p className="text-gray-500 text-xs mt-0.5">Change your admin panel password</p>
                </div>
                <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white text-sm font-medium">Session Timeout</p>
                  <p className="text-gray-500 text-xs mt-0.5">Currently set to 24 hours</p>
                </div>
                <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-white text-sm font-medium">Clear All Data</p>
                  <p className="text-gray-500 text-xs mt-0.5">Reset admin panel to defaults</p>
                </div>
                <button className="text-red-400 text-sm hover:text-red-300 transition-colors">
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
