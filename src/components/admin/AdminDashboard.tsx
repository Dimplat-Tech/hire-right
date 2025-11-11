"use client";
import { useState } from 'react';
import JobManagement from '@/components/admin/sections/JobManagement';
import TalentManagement from '@/components/admin/sections/TalentManagement';
import UserManagement from '@/components/admin/sections/UserManagement';
import Analytics from '@/components/admin/sections/Analytics';
import Settings from '@/components/admin/sections/Settings';

const navItems = [
  { id: 'jobs', label: 'Job Management', icon: '📋' },
  { id: 'talents', label: 'Talent Management', icon: '👥' },
  { id: 'users', label: 'User Management', icon: '🔑' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('jobs');

  const renderSection = () => {
    switch (activeSection) {
      case 'jobs':
        return <JobManagement />;
      case 'talents':
        return <TalentManagement />;
      case 'users':
        return <UserManagement />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <JobManagement />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Fixed Sidebar Navigation - Left Side */}
      <div className="w-64 bg-white shadow-lg overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
          <h1 className="text-xl font-bold text-indigo-600">Admin</h1>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area - Full Height, Scrollable */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar with Logout */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {navItems.find((item) => item.id === activeSection)?.label || 'Dashboard'}
          </h2>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            Logout
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-7xl mx-auto w-full">
            <div className="bg-white rounded-lg shadow">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}