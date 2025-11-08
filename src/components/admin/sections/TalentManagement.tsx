"use client";
import { useState } from 'react';
import Button from '@/components/common/Button';

interface Talent {
  id: string;
  name: string;
  title: string;
  skills: string[];
  experience: string;
  availability: string;
  location: string;
  image?: string;
}

export default function TalentManagement() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [isAddingTalent, setIsAddingTalent] = useState(false);
  const [editingTalent, setEditingTalent] = useState<Talent | null>(null);

  const handleAddTalent = (newTalent: Talent) => {
    setTalents([...talents, newTalent]);
    setIsAddingTalent(false);
  };

  const handleEditTalent = (talent: Talent) => {
    setTalents(talents.map(t => t.id === talent.id ? talent : t));
    setEditingTalent(null);
  };

  const handleDeleteTalent = (talentId: string) => {
    setTalents(talents.filter(t => t.id !== talentId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Talent Management</h2>
        <Button
          variant="primary"
          onClick={() => setIsAddingTalent(true)}
          className="px-4 py-2"
        >
          Add New Talent
        </Button>
      </div>

      {/* Talent List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talents.map((talent) => (
          <div key={talent.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{talent.name}</h3>
                <p className="text-sm text-gray-500">{talent.title}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setEditingTalent(talent)}
                  className="px-3 py-1"
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleDeleteTalent(talent.id)}
                  className="px-3 py-1 text-red-600 hover:bg-red-50"
                >
                  Delete
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p><span className="font-medium">Experience:</span> {talent.experience}</p>
                <p><span className="font-medium">Location:</span> {talent.location}</p>
                <p><span className="font-medium">Availability:</span> {talent.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Talent Modal */}
      {(isAddingTalent || editingTalent) && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold mb-4">
              {isAddingTalent ? 'Add New Talent' : 'Edit Talent'}
            </h3>
            <TalentForm
              initialData={editingTalent}
              onSubmit={isAddingTalent ? handleAddTalent : handleEditTalent}
              onCancel={() => {
                setIsAddingTalent(false);
                setEditingTalent(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface TalentFormProps {
  initialData?: Talent | null;
  onSubmit: (talent: Talent) => void;
  onCancel: () => void;
}

function TalentForm({ initialData, onSubmit, onCancel }: TalentFormProps) {
  const [formData, setFormData] = useState<Talent>(
    initialData || {
      id: Date.now().toString(),
      name: '',
      title: '',
      skills: [],
      experience: '',
      availability: '',
      location: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
        <input
          type="text"
          value={formData.skills.join(', ')}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(s => s.trim()) })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <input
          type="text"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>

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
        <label className="block text-sm font-medium text-gray-700">Availability</label>
        <select
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        >
          <option value="">Select availability</option>
          <option value="Immediate">Immediate</option>
          <option value="2 weeks">2 weeks notice</option>
          <option value="1 month">1 month notice</option>
          <option value="Negotiable">Negotiable</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel} className="px-4 py-2">
          Cancel
        </Button>
        <Button type="submit" variant="primary" className="px-4 py-2">
          {initialData ? 'Save Changes' : 'Add Talent'}
        </Button>
      </div>
    </form>
  );
}