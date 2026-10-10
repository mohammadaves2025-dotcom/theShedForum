import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { ApiService } from '../services/api';

export const NewsEventsPage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    ApiService.getEvents().then(setEvents);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-700">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            Events & Academic Schedule
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-semibold text-white tracking-tight leading-tight">
            News, Events & Workshops
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Stay updated with upcoming entrance drives, helpdesks, orientation ceremonies, and cultural meetups across central universities.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-[#0052B4] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {event.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0052B4]" />
                  {event.date}
                </span>
              </div>
              <h2 className="text-xl font-serif-heading font-semibold text-slate-900">{event.title}</h2>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#009A44]" />
                <span>{event.location}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{event.summary}</p>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic font-serif">
                "{event.details}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
