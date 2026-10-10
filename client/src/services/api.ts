import { initialData } from '../data/initialData';

const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api');

async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data || fallbackData;
  } catch (err) {
    return fallbackData;
  }
}

export const ApiService = {
  async getStats() {
    return fetchWithFallback('/stats', initialData.stats);
  },

  async updateStats(newStats: typeof initialData.stats) {
    try {
      const res = await fetch(`${API_BASE}/stats`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStats)
      });
      return await res.json();
    } catch (e) {
      initialData.stats = { ...initialData.stats, ...newStats };
      return { success: true, data: initialData.stats };
    }
  },

  async getUnits() {
    return fetchWithFallback('/units', initialData.universityUnits);
  },

  async getUnitById(id: string) {
    const units = await this.getUnits();
    return units.find((u: any) => u.id === id || u.code.toLowerCase() === id.toLowerCase()) || null;
  },

  async getInitiatives() {
    return fetchWithFallback('/initiatives', initialData.initiatives);
  },

  async getPatrons() {
    return fetchWithFallback('/patrons', initialData.patrons);
  },

  async getEvents() {
    return fetchWithFallback('/events', initialData.events);
  },

  async addEvent(eventData: any) {
    try {
      const res = await fetch(`${API_BASE}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      });
      return await res.json();
    } catch (e) {
      const newEvent = { id: Date.now().toString(), ...eventData };
      initialData.events.unshift(newEvent);
      return { success: true, data: newEvent };
    }
  },

  async deleteEvent(id: string) {
    try {
      await fetch(`${API_BASE}/events/${id}`, { method: 'DELETE' });
    } catch (e) {
      initialData.events = initialData.events.filter((e: any) => e.id !== id);
    }
  },

  async getGallery() {
    return fetchWithFallback('/gallery', initialData.gallery);
  },

  async addGalleryItem(item: any, file?: File | null) {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', item.title || '');
        formData.append('unit', item.unit || 'general');
        formData.append('category', item.category || 'Campus Life');
        formData.append('eventTag', item.eventTag || 'Unit Gathering');
        formData.append('caption', item.caption || '');
        formData.append('isHero', item.isHero ? 'true' : 'false');
        if (item.url) formData.append('url', item.url);

        const res = await fetch(`${API_BASE}/gallery`, {
          method: 'POST',
          body: formData
        });
        return await res.json();
      }

      const res = await fetch(`${API_BASE}/gallery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
      return await res.json();
    } catch (e) {
      const newItem = { id: 'g_' + Date.now().toString(), ...item };
      initialData.gallery.unshift(newItem);
      return { success: true, data: newItem };
    }
  },

  async uploadImage(file: File) {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData
      });
      return await res.json();
    } catch (e) {
      return { success: false, message: 'Upload failed' };
    }
  },

  async deleteGalleryItem(id: string) {
    try {
      await fetch(`${API_BASE}/gallery/${id}`, { method: 'DELETE' });
    } catch (e) {
      initialData.gallery = initialData.gallery.filter((g: any) => g.id !== id);
    }
  },

  async submitContact(data: any) {
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return await res.json();
    } catch (e) {
      const sub = { id: Date.now().toString(), ...data, createdAt: new Date().toISOString() };
      (initialData as any).contactSubmissions.unshift(sub);
      return { success: true, message: 'Submitted successfully', data: sub };
    }
  },

  async getContactSubmissions() {
    return fetchWithFallback('/contact', initialData.contactSubmissions);
  },

  async updateContactStatus(id: string, status: string) {
    try {
      const res = await fetch(`${API_BASE}/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      return await res.json();
    } catch (e) {
      return { success: true };
    }
  },

  async adminLogin(password: string) {
    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      return await res.json();
    } catch (e) {
      if (password === 'admin' || password === 'shed2026') {
        return { success: true, token: 'demo_token_2026', user: { name: 'ShED Admin' } };
      }
      return { success: false, message: 'Invalid credentials' };
    }
  }
};
