"use client";
import { useState } from 'react';
import { Job } from '@/data/jobs';
import Button from '@/components/common/Button';

export default function JobManagement() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const handleAddJob = (newJob: Job) => {
    setJobs([...jobs, newJob]);
    setIsAddingJob(false);
  };

  const handleEditJob = (job: Job) => {
    setJobs(jobs.map(j => j.id === job.id ? job : j));
    setEditingJob(null);
  };

  const handleDeleteJob = (jobId: string) => {
    setJobs(jobs.filter(j => j.id !== jobId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Job Management</h2>
        <Button
          variant="primary"
          onClick={() => setIsAddingJob(true)}
          className="px-4 py-2"
        >
          Add New Job
        </Button>
      </div>

      {/* Job List */}
      <div className="bg-gray-50 shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {jobs.length === 0 ? (
            <li className="px-6 py-8 text-center text-gray-500">
              No jobs added yet. Click &quot;Add New Job&quot; to get started.
            </li>
          ) : (
            jobs.map((job) => (
              <li key={job.id} className="px-6 py-4 hover:bg-white transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{job.role}</h3>
                    <p className="text-sm text-gray-500">{job.company || 'Top Employer'}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {job.mode}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => setEditingJob(job)}
                      className="px-3 py-1"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleDeleteJob(job.id)}
                      className="px-3 py-1 text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Add/Edit Job Modal - Better Visibility */}
      {(isAddingJob || editingJob) && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {isAddingJob ? 'Add New Job' : 'Edit Job'}
              </h3>
              <button
                onClick={() => {
                  setIsAddingJob(false);
                  setEditingJob(null);
                }}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>
            <JobForm
              initialData={editingJob}
              onSubmit={isAddingJob ? handleAddJob : handleEditJob}
              onCancel={() => {
                setIsAddingJob(false);
                setEditingJob(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface JobFormProps {
  initialData?: Job | null;
  onSubmit: (job: Job) => void;
  onCancel: () => void;
}

function JobForm({ initialData, onSubmit, onCancel }: JobFormProps) {
  const [formData, setFormData] = useState<Partial<Job>>(
    initialData || {
      id: Date.now().toString(),
      role: '',
      company: '',
      location: '',
      mode: 'On-site',
      type: 'Full time',
      salary: '',
      about: '',
      duties: [],
      requirements: [],
      posted: new Date().toLocaleDateString('en-GB'),
      logo: '/img/landing/Logo.svg',
      locate: '/jobopening/locate.png',
      calendar: '/jobopening/calendar.png',
      locatebar: '/jobopening/locationr.png',
      link: 'https://bit.ly/hirerightrecruitment',
      image: '/img/jobs/default.jpeg'
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Job);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Role *</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            placeholder="e.g., Software Engineer"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            placeholder="e.g., Hire Right"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            placeholder="e.g., Lagos, Nigeria"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Salary *</label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            placeholder="e.g., #500,000 - #700,000"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mode *</label>
          <select
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value as Job['mode'] })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
          >
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Type *</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Job['type'] })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
          >
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Link</label>
          <input
            type="url"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
            placeholder="https://bit.ly/hirerightrecruitment"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">About *</label>
        <textarea
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
          placeholder="Brief description of the role..."
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Duties (one per line) *</label>
        <textarea
          value={formData.duties?.join('\n')}
          onChange={(e) => setFormData({ ...formData, duties: e.target.value.split('\n').filter(d => d.trim()) })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
          placeholder="e.g., Develop features&#10;Fix bugs&#10;Code review"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Requirements (one per line) *</label>
        <textarea
          value={formData.requirements?.join('\n')}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value.split('\n').filter(r => r.trim()) })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
          placeholder="e.g., 3+ years experience&#10;Strong problem solving&#10;Team player"
          rows={4}
          required
        />
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
        <Button variant="secondary" onClick={onCancel} className="px-6 py-2">
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="px-6 py-2">
          {initialData ? 'Save Changes' : 'Add Job'}
        </Button>
      </div>
    </form>
  );
}