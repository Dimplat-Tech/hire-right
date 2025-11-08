"use client";
import { useState } from 'react';
import Button from '@/components/common/Button';

interface Settings {
  generalSettings: {
    siteName: string;
    siteDescription: string;
    contactEmail: string;
    phoneNumber: string;
  };
  emailSettings: {
    emailProvider: string;
    senderName: string;
    senderEmail: string;
  };
  notificationSettings: {
    newApplications: boolean;
    newTalentSubmissions: boolean;
    newUserRegistrations: boolean;
    systemUpdates: boolean;
  };
  privacySettings: {
    showUserProfiles: boolean;
    allowUserMessages: boolean;
    publicJobListings: boolean;
  };
}

export default function Settings() {
  const [settings, setSettings] = useState<Settings>({
    generalSettings: {
      siteName: 'HireRight',
      siteDescription: 'Premier recruitment platform',
      contactEmail: 'info@hirerightng.com',
      phoneNumber: '',
    },
    emailSettings: {
      emailProvider: 'EmailJS',
      senderName: 'HireRight Team',
      senderEmail: 'info@hirerightng.com',
    },
    notificationSettings: {
      newApplications: true,
      newTalentSubmissions: true,
      newUserRegistrations: false,
      systemUpdates: true,
    },
    privacySettings: {
      showUserProfiles: true,
      allowUserMessages: true,
      publicJobListings: true,
    },
  });

  const handleSettingChange = (
    category: keyof Settings,
    setting: string,
    value: string | boolean
  ) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value,
      },
    });
  };

  const handleSave = () => {
    // TODO: Implement settings save functionality
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <Button variant="primary" onClick={handleSave} className="px-4 py-2">
          Save Changes
        </Button>
      </div>

      {/* General Settings */}
      <section className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Site Name</label>
            <input
              type="text"
              value={settings.generalSettings.siteName}
              onChange={(e) =>
                handleSettingChange('generalSettings', 'siteName', e.target.value)
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Site Description</label>
            <textarea
              value={settings.generalSettings.siteDescription}
              onChange={(e) =>
                handleSettingChange('generalSettings', 'siteDescription', e.target.value)
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Email</label>
              <input
                type="email"
                value={settings.generalSettings.contactEmail}
                onChange={(e) =>
                  handleSettingChange('generalSettings', 'contactEmail', e.target.value)
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={settings.generalSettings.phoneNumber}
                onChange={(e) =>
                  handleSettingChange('generalSettings', 'phoneNumber', e.target.value)
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Email Settings */}
      <section className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Provider</label>
            <select
              value={settings.emailSettings.emailProvider}
              onChange={(e) =>
                handleSettingChange('emailSettings', 'emailProvider', e.target.value)
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option>EmailJS</option>
              <option>SMTP</option>
              <option>SendGrid</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Sender Name</label>
              <input
                type="text"
                value={settings.emailSettings.senderName}
                onChange={(e) =>
                  handleSettingChange('emailSettings', 'senderName', e.target.value)
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sender Email</label>
              <input
                type="email"
                value={settings.emailSettings.senderEmail}
                onChange={(e) =>
                  handleSettingChange('emailSettings', 'senderEmail', e.target.value)
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h3>
        <div className="space-y-4">
          {Object.entries(settings.notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleSettingChange('notificationSettings', key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Settings */}
      <section className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
        <div className="space-y-4">
          {Object.entries(settings.privacySettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) =>
                    handleSettingChange('privacySettings', key, e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}