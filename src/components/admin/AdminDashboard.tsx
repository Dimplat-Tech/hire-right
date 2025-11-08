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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-12 lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-10">
            <div className="bg-white rounded-lg shadow">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}