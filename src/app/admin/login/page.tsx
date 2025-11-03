"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/common/Button';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push('/admin');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 bg-blue-600 text-white rounded flex items-center justify-center font-bold">HR</div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Admin sign in</h1>
            <p className="text-sm text-gray-500">Enter the administrator password to access the job management panel.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
              placeholder="Enter your admin password (set ADMIN_PASSWORD in .env.local)"
              aria-label="Admin password"
            />
          </div>

          {error && <div className="text-red-600 mt-3">{error}</div>}

          <div className="mt-6 flex items-center justify-between">
            <Button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Back to site</Link>
          </div>

          
        </form>
      </div>
    </div>
  );
}
