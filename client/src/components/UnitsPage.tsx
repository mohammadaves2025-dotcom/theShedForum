import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ApiService } from '../services/api';

export const UnitsPage: React.FC = () => {
  const [units, setUnits] = useState<any[]>([]);

  useEffect(() => {
    ApiService.getUnits().then(setUnits);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0052B4] to-[#009A44] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-700">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-300 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
            University Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Our 7 University Campus Units
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            ShED Forum has built active student units across India's premier universities to ensure every admitted student receives peer mentorship, hostel support, and career guidance.
          </p>
        </div>
      </div>

      {/* Grid of All Units */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {units.map((unit, idx) => {
          const badgeColors = [
            "bg-[#0052B4] text-white",
            "bg-[#009A44] text-white",
            "bg-[#D91B24] text-white",
            "bg-[#00A3E0] text-white",
            "bg-amber-600 text-white",
            "bg-purple-600 text-white",
            "bg-indigo-600 text-white"
          ];
          return (
            <div 
              key={unit.id} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={unit.image} 
                    alt={unit.name} 
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-300/30">
                    Est. {unit.established}
                  </div>
                  <div className={`absolute bottom-3 left-3 ${badgeColors[idx % badgeColors.length]} text-xs font-black px-3 py-1 rounded-lg shadow-md`}>
                    {unit.code}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#0052B4]" />
                    <span>{unit.location}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0052B4] transition-colors">
                    {unit.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-medium">
                    {unit.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-800 block mb-1">Key Highlights:</span>
                    <ul className="space-y-1 text-xs text-slate-600 font-medium">
                      {unit.highlights?.slice(0, 2).map((h: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#009A44] shrink-0 mt-0.5" />
                          <span className="truncate">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center">
                <span className="text-xs font-black text-[#0052B4] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                  {unit.studentsCount}+ Active Students
                </span>
                <Link
                  to={`/${unit.id}`}
                  className="text-xs font-black text-slate-800 hover:text-[#0052B4] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Full Unit Page</span>
                  <ChevronRight className="w-4 h-4 text-[#0052B4]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
