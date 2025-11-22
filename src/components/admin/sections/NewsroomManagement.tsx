"use client";
import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';

type News = {
  id: string;
  title: string;
  summary?: string;
  link?: string;
  image?: string;
  createdAt?: string;
};

export default function NewsroomManagement() {
  const [items, setItems] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<News | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/newsroom');
      const data = await res.json();
      setItems(data || []);
    } finally { setLoading(false); }
  }

  async function handleSave(payload: Partial<News>) {
    if (payload.id) {
      await fetch('/api/admin/newsroom', { method: 'PUT', body: JSON.stringify(payload) });
    } else {
      await fetch('/api/admin/newsroom', { method: 'POST', body: JSON.stringify(payload) });
    }
    setShowForm(false); setEditing(null); await load();
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this newsroom item?')) return;
    await fetch(`/api/admin/newsroom?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    await load();
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Newsroom</h3>
        <Button variant="primary" onClick={() => { setEditing(null); setShowForm(true); }}>New Item</Button>
      </div>

      {loading ? <div>Loading...</div> : (
        <div className="space-y-3">
          {items.length === 0 ? <div className="text-gray-500">No newsroom items yet.</div> : (
            items.map((n) => (
              <div key={n.id} className="p-4 bg-gray-50 rounded-md flex items-start justify-between">
                <div>
                  <div className="font-medium text-gray-900">{n.title}</div>
                  <div className="text-sm text-gray-600">{n.summary}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => { setEditing(n); setShowForm(true); }}>Edit</Button>
                  <Button variant="secondary" onClick={() => handleDelete(n.id)} className="text-red-600">Delete</Button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <NewsForm initialData={editing || undefined} onCancel={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
}

function NewsForm({ initialData, onCancel, onSave }: { initialData?: News; onCancel: () => void; onSave: (p: Partial<News>) => void; }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [summary, setSummary] = useState(initialData?.summary || '');
  const [link, setLink] = useState(initialData?.link || '');
  const [image, setImage] = useState(initialData?.image || '');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ id: initialData?.id, title, summary, link, image }); }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Summary</label>
        <input value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">External Link</label>
        <input value={link} onChange={(e) => setLink(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </form>
  );
}
