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
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {jobs.map((job) => (
            <li key={job.id} className="px-6 py-4 hover:bg-gray-50">
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
          ))}
        </ul>
      </div>

      {/* Add/Edit Job Modal */}
      {(isAddingJob || editingJob) && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold mb-4">
              {isAddingJob ? 'Add New Job' : 'Edit Job'}
            </h3>
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
      logo: '/jobopening/default.png',
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Mode</label>
          <select
            value={formData.mode}
            onChange={(e) => setFormData({ ...formData, mode: e.target.value as Job['mode'] })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="On-site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Job['type'] })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">About</label>
        <textarea
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Duties (one per line)
        </label>
        <textarea
          value={formData.duties?.join('\n')}
          onChange={(e) => setFormData({ ...formData, duties: e.target.value.split('\n') })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Requirements (one per line)
        </label>
        <textarea
          value={formData.requirements?.join('\n')}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value.split('\n') })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          rows={4}
          required
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel} className="px-4 py-2">
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="px-4 py-2">
          {initialData ? 'Save Changes' : 'Add Job'}
        </Button>
      </div>
    </form>
  );
}