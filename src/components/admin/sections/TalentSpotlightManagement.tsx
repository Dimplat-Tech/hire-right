"use client";
import { useState } from 'react';
import Button from '@/components/common/Button';

interface Spotlight {
  id: string;
  name: string;
  gender?: string;
  location?: string;
  jobMode?: string;
  summary?: string;
  image?: string;
  showOnLanding?: boolean;
}

export default function TalentSpotlightManagement() {
  const [spotlights, setSpotlights] = useState<Spotlight[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editing, setEditing] = useState<Spotlight | null>(null);

  const handleSave = (spot: Spotlight) => {
    if (editing) {
      setSpotlights(spotlights.map(s => (s.id === spot.id ? spot : s)));
      setEditing(null);
    } else {
      setSpotlights([...spotlights, spot]);
    }
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setSpotlights(spotlights.filter(s => s.id !== id));
  };

  const toggleLanding = (id: string) => {
    setSpotlights(
      spotlights.map(s => (s.id === id ? { ...s, showOnLanding: !s.showOnLanding } : s))
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Talent Spotlight</h2>
        <Button variant="primary" onClick={() => setIsAdding(true)} className="px-4 py-2">Add Spotlight</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spotlights.map(s => (
          <div key={s.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.jobMode || s.location}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setEditing(s)} className="px-3 py-1">Edit</Button>
                <Button variant="secondary" onClick={() => handleDelete(s.id)} className="px-3 py-1 text-red-600 hover:bg-red-50">Delete</Button>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {s.summary && <p className="mb-2">{s.summary}</p>}
              <p><span className="font-medium">Gender:</span> {s.gender}</p>
              <p><span className="font-medium">Location:</span> {s.location}</p>
              <p><span className="font-medium">Job mode:</span> {s.jobMode}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">Show on landing: <strong>{s.showOnLanding ? 'Yes' : 'No'}</strong></div>
              <Button variant="outline" onClick={() => toggleLanding(s.id)} className="px-3 py-1">Toggle</Button>
            </div>
          </div>
        ))}
      </div>

      {(isAdding || editing) && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-xl font-bold mb-4">{editing ? 'Edit Spotlight' : 'Add Spotlight'}</h3>
            <SpotlightForm
              initial={editing || undefined}
              onCancel={() => { setIsAdding(false); setEditing(null); }}
              onSubmit={(data) => handleSave(data)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface FormProps {
  initial?: Spotlight;
  onSubmit: (s: Spotlight) => void;
  onCancel: () => void;
}

function SpotlightForm({ initial, onSubmit, onCancel }: FormProps) {
  const [form, setForm] = useState<Spotlight>(
    initial || {
      id: Date.now().toString(),
      name: '',
      gender: '',
      location: '',
      jobMode: '',
      summary: '',
      image: '',
      showOnLanding: false,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <input type="text" value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Job mode</label>
        <input type="text" value={form.jobMode} onChange={(e) => setForm({ ...form, jobMode: e.target.value })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows={4} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input type="text" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={!!form.showOnLanding} onChange={(e) => setForm({ ...form, showOnLanding: e.target.checked })} />
          Show on landing
        </label>
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel} className="px-4 py-2">Cancel</Button>
        <Button type="submit" variant="primary" className="px-4 py-2">{initial ? 'Save' : 'Add Spotlight'}</Button>
      </div>
    </form>
  );
}
