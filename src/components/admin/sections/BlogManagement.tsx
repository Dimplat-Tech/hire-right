"use client";
import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';

type Blog = {
  id: string;
  title: string;
  slug?: string;
  summary?: string;
  content?: string;
  image?: string;
  createdAt?: string;
};

export default function BlogManagement() {
  const [items, setItems] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [editing, setEditing] = useState<Blog | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/blogs');
      const data = await res.json();
      setItems(data || []);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(payload: Partial<Blog>) {
    setActionLoading(payload.id || 'new');
    try {
      if (payload.id) {
        await fetch('/api/admin/blogs', { method: 'PUT', body: JSON.stringify(payload) });
      } else {
        await fetch('/api/admin/blogs', { method: 'POST', body: JSON.stringify(payload) });
      }
      setShowForm(false);
      setEditing(null);
      await load();
    } catch (err) {
      console.error('Save blog error', err);
      alert('Failed to save blog. Check console for details.');
    } finally {
      setActionLoading(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this blog item?')) return;
    setActionLoading(id);
    try {
      await fetch(`/api/admin/blogs?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      await load();
    } catch (err) {
      console.error('Delete blog error', err);
      alert('Failed to delete blog. Check console for details.');
    } finally {
      setActionLoading(null);
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Blog Management</h3>
        <Button variant="primary" onClick={() => { setEditing(null); setShowForm(true); }}>New Post</Button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-3">
          {items.length === 0 ? (
            <div className="text-gray-500">No blog posts yet.</div>
          ) : (
            items.map((b) => (
              <div key={b.id} className="p-4 bg-gray-50 rounded-md flex items-start justify-between">
                <div>
                  <div className="font-medium text-gray-900">{b.title}</div>
                  <div className="text-sm text-gray-600">{b.summary}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => { setEditing(b); setShowForm(true); }} disabled={!!actionLoading}>Edit</Button>
                  <Button variant="secondary" onClick={() => handleDelete(b.id)} className="text-red-600" disabled={actionLoading === b.id}>Delete</Button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <BlogForm initialData={editing || undefined} onCancel={() => { setShowForm(false); setEditing(null); }} onSave={handleSave} />
          </div>
        </div>
      )}
    </div>
  );
}

function BlogForm({ initialData, onCancel, onSave }: { initialData?: Blog; onCancel: () => void; onSave: (p: Partial<Blog>) => void; }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [summary, setSummary] = useState(initialData?.summary || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [image, setImage] = useState(initialData?.image || '');

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ id: initialData?.id, title, summary, content, image }); }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Summary</label>
        <input value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </form>
  );
}
