"use client";
import React, { useEffect, useState } from 'react';
import Button from '@/components/common/Button';

type Job = {
  id: string;
  company?: string;
  role?: string;
  about?: string;
  location?: string;
  mode?: string;
  type?: string;
  salary?: string;
  link?: string;
  image?: string;
  duties?: string | string[];
  requirements?: string | string[];
};

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, unknown>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [openReqId, setOpenReqId] = useState<string | null>(null);
  async function checkAuth() {
    try {
      const res = await fetch('/api/admin/auth');
      const data = await res.json();
      if (!data?.authenticated) {
        window.location.href = '/admin/login';
        return false;
      }
      return true;
    } catch {
      window.location.href = '/admin/login';
      return false;
    } finally {
    }
  }

  async function fetchJobs() {
    setLoading(true);
    const res = await fetch('/api/admin/jobs');
    const data = await res.json();
    setJobs(data || []);
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const ok = await checkAuth();
      if (ok) await fetchJobs();
    })();
  }, []);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }

  function resetForm() {
    setForm({});
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      company: form.company || '',
      role: form.role || '',
      location: form.location || '',
      about: form.about || '',
      mode: form.mode || '',
      type: form.type || '',
      salary: form.salary || '',
      link: form.link || '',
      image: form.image || '',
      duties: form.duties ? String(form.duties).split(',').map(s=>s.trim()) : [],
      requirements: form.requirements ? String(form.requirements).split(',').map(s=>s.trim()) : [],
    };

    if (editingId) {
      const res = await fetch(`/api/admin/jobs?id=${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        await fetchJobs();
        resetForm();
      }
    } else {
      const res = await fetch('/api/admin/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        await fetchJobs();
        resetForm();
      }
    }
  }

  async function handleEdit(job: Job) {
    setEditingId(job.id);
    setForm({
      company: job.company,
      role: job.role,
      about: job.about,
      location: job.location,
      mode: job.mode,
      type: job.type,
      salary: job.salary,
      link: job.link,
      image: job.image,
      duties: Array.isArray(job.duties) ? job.duties.join(', ') : (job.duties || ''),
      requirements: Array.isArray(job.requirements) ? job.requirements.join(', ') : (job.requirements || ''),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id?: string) {
    if (!id) return;
    if (!confirm('Delete this job?')) return;
    const res = await fetch(`/api/admin/jobs?id=${id}`, { method: 'DELETE' });
    if (res.ok) await fetchJobs();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Admin — Manage Find Jobs</h1>

      <div className="flex items-center justify-end gap-3 mb-6">
        <a href="/api/admin/lets-talk/export">
          <Button variant="outline">Download LetsTalk submissions (CSV)</Button>
        </a>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800">Job details (Find Jobs)</h2>
          <p className="text-sm text-gray-600">Fill the fields below. These labels map to the public Find Jobs listing. Use comma-separated values for Duties and Requirements.</p>
          <div className="mt-3 p-3 bg-white border border-gray-100 rounded">
            <p className="text-sm text-gray-500">Tip: Example placeholders show expected format. Click Create Job to add an entry.</p>
          </div>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Company</span>
          <input aria-label="Company" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., Google, Andela" value={(form.company as string) || ''} onChange={e=>setForm({...form, company: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Required role(s)</span>
          <input aria-label="Role" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., Business Operations Manager" value={(form.role as string) || ''} onChange={e=>setForm({...form, role: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Location</span>
          <input aria-label="Location" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., Lagos, Nigeria" value={(form.location as string) || ''} onChange={e=>setForm({...form, location: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Mode</span>
          <input aria-label="Mode" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="On-site / Remote / Hybrid" value={(form.mode as string) || ''} onChange={e=>setForm({...form, mode: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Type</span>
          <input aria-label="Type" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="Full time / Part time / Contract" value={(form.type as string) || ''} onChange={e=>setForm({...form, type: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Salary</span>
          <input aria-label="Salary" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., ₦400,000 - ₦500,000 or Competitive" value={(form.salary as string) || ''} onChange={e=>setForm({...form, salary: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Application link</span>
          <input aria-label="Application link" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="https://apply.example.com (optional)" value={(form.link as string) || ''} onChange={e=>setForm({...form, link: e.target.value})} />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Image (path)</span>
          <input aria-label="Image path" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., /img/jobs/job1.jpeg (optional)" value={(form.image as string) || ''} onChange={e=>setForm({...form, image: e.target.value})} />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-sm font-medium text-gray-700">About role</span>
          <textarea aria-label="About role" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="Short description (1-2 sentences). e.g., Lead operations and manage a team of 10." value={(form.about as string) || ''} onChange={e=>setForm({...form, about: e.target.value})} />
        </label>

        <label className="md:col-span-2 block">
          <span className="text-sm font-medium text-gray-700">Duties</span>
          <textarea aria-label="Duties" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., Manage recruitment, Conduct interviews, Onboard new hires (comma separated)" value={(form.duties as string) || ''} onChange={e=>setForm({...form, duties: e.target.value})} />
          <p className="mt-1 text-xs text-gray-500">Enter duties as comma-separated items (they will be shown as badges in the listing).</p>
        </label>

        <label className="md:col-span-2 block">
          <span className="text-sm font-medium text-gray-700">Requirements</span>
          <textarea aria-label="Requirements" className="bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded w-full text-sm text-gray-800" placeholder="e.g., 5+ years experience, Bachelor's degree, Strong communication skills (comma separated)" value={(form.requirements as string) || ''} onChange={e=>setForm({...form, requirements: e.target.value})} />
          <p className="mt-1 text-xs text-gray-500">Enter requirements as comma-separated items.</p>
        </label>

        <div className="md:col-span-2 flex gap-3">
          <Button variant="primary" type="submit">{editingId ? 'Update Job' : 'Create Job'}</Button>
          <Button variant="outline" onClick={(e)=>{e.preventDefault(); resetForm();}}>Reset</Button>
        </div>
      </form>

      <div>
        <h2 className="text-xl font-medium mb-4">Existing Jobs {loading ? '(loading...)' : ''}</h2>
        <div className="grid grid-cols-1 gap-4">
          {jobs.length === 0 && <div className="text-gray-600">No jobs yet.</div>}
          {jobs.map(job => {
            const dutiesArr = Array.isArray(job.duties) ? job.duties : String(job.duties || '').split(',').map(s=>s.trim()).filter(Boolean);
            const reqsArr = Array.isArray(job.requirements) ? job.requirements : String(job.requirements || '').split(',').map(s=>s.trim()).filter(Boolean);
            const isOpen = openReqId === job.id;
            return (
            <div key={job.id} className="flex flex-col md:flex-row md:items-start md:justify-between bg-white p-4 rounded shadow">
              <div className="flex-1">
                <div className="text-lg font-semibold">{job.role} <span className="text-sm text-gray-500">@ {job.company}</span></div>
                <div className="text-sm text-gray-600">{job.location} • {job.mode} • {job.type}</div>
                <div className="mt-2 text-sm text-gray-700">{(job.about as string)?.slice?.(0,200) || ''}{(job.about && (job.about as string).length > 200) ? '...' : ''}</div>
                <div className="mt-1 text-sm font-medium text-[#003780]">Salary: {(job.salary as string) || '—'}</div>

                {/* Duties as badges */}
                {dutiesArr.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="font-semibold text-sm text-[#003780] mr-2">Duties:</span>
                    {dutiesArr.map((d,i)=>(
                      <span key={i} className="rounded-md bg-[#F2793380] text-[#003780] px-2 py-1 text-xs">{d}</span>
                    ))}
                  </div>
                )}

                {/* Requirements toggle */}
                <div className="mt-3">
                  <button type="button" className="text-orange-500 underline text-sm" onClick={()=>setOpenReqId(isOpen? null : job.id)}>
                    {isOpen ? 'Hide requirements' : `See requirements (${reqsArr.length})`}
                  </button>
                  {isOpen && (
                    <div className="mt-2 bg-[#003780] rounded-lg p-3 text-white">
                      <ul className="list-disc pl-5 space-y-1">
                        {reqsArr.map((r, idx)=>(<li key={idx}>{r}</li>))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0 flex gap-2 mt-4 md:mt-0 md:ml-4">
                <Button variant="outline" onClick={()=>handleEdit(job)}>Edit</Button>
                <Button variant="secondary" onClick={()=>handleDelete(job.id)}>Delete</Button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
