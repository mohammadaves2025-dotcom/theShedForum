import React from 'react';

interface ReachMetric {
  labelTop: string;
  number: string;
  labelBottom: string;
  colorClass?: string;
}

export const ReachImpactSection: React.FC<{ title?: string; subtitle?: string }> = ({
  title = "Reach 2025-26",
  subtitle = "Empowering rural Shershahbadi youth across Seemanchal and premier national central universities."
}) => {
  const metrics: ReachMetric[] = [
    {
      labelTop: "Grassroots Presence in",
      number: "12+",
      labelBottom: "districts across Bihar, West Bengal & Jharkhand",
      colorClass: "text-[#D91B24]" // Brand Red accent
    },
    {
      labelTop: "Students Empowered",
      number: "1,000+",
      labelBottom: "through free CUET coaching & central university admission guidance",
      colorClass: "text-[#0052B4]" // Brand Blue accent
    },
    {
      labelTop: "Girls & Women Enrolled",
      number: "38%",
      labelBottom: "through International Women's Day drives & mentorship circles",
      colorClass: "text-[#009A44]" // Brand Green accent
    },
    {
      labelTop: "University Campus Units",
      number: "7",
      labelBottom: "active hubs at MANUU, JMI, AMU, JNU, DU, HCU & Patna Univ",
      colorClass: "text-[#00A3E0]" // Brand Cyan accent
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F0F7FF] via-[#F8FAFC] to-white border-y border-blue-100/80 overflow-hidden">
      
      {/* Background Soft Watercolor / Cloud Glow Effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 right-10 w-[400px] h-[250px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-serif-heading font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4-Column Reach Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-between text-center space-y-3 group px-4 py-2"
            >
              {/* Top Label */}
              <div className="text-xs sm:text-sm font-medium text-slate-600 min-h-[24px] flex items-end">
                {metric.labelTop}
              </div>

              {/* Huge Highlight Number */}
              <div className={`text-5xl sm:text-6xl lg:text-7xl font-serif-heading font-bold tracking-tight leading-none ${metric.colorClass || 'text-slate-900'} group-hover:scale-105 transition-transform duration-300`}>
                {metric.number}
              </div>

              {/* Bottom Subtitle */}
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-[220px] mx-auto min-h-[44px]">
                {metric.labelBottom}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
