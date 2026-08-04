"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TrendingUp } from "lucide-react";

const chartData = [
  { date: "May 1", visitors: 4000 },
  { date: "May 8", visitors: 11000 },
  { date: "May 15", visitors: 15000 },
  { date: "May 22", visitors: 9752 },
  { date: "May 29", visitors: 18500 },
];

// 🔹 1. Custom Component للنقطة المضيئة (الافتراضية)
const CustomGlowDot = (props) => {
  const { cx, cy, stroke, payload } = props;

  // بنعرض النقطة فقط عند تواريخ معينة (إختياري، لإزالة الزحمة)
  // أو ممكن تعرضها لكل النقاط بإزالة هذا الشرط
  if (
    payload.date !== "May 1" &&
    payload.date !== "May 8" &&
    payload.date !== "May 15"
  ) {
    return null;
  }

  return (
    <g>
      {/* 🔹 تأثير التوهج الخلفي (الدائرة الخارجية الشفافة) */}
      <circle
        cx={cx}
        cy={cy}
        r={7} // حجم التوهج
        fill="#6366f1" // لون التوهج
        fillOpacity={0.2} // شفافية التوهج
        filter="url(#glowFilter)" // تطبيق فلتر التوهج
      />
      {/* 🔹 النقطة الرئيسية الصلبة (البيضاء) */}
      <circle
        cx={cx}
        cy={cy}
        r={3} // حجم النقطة
        fill="#ffffff"
        stroke="#818cf8" // لون الإطار
        strokeWidth={1}
      />
    </g>
  );
};

// 🔹 2. Custom Component للنقطة النشطة (عند الـ Hover)
const CustomActiveDot = (props) => {
  const { cx, cy } = props;
  return (
    <g>
      {/* 🔹 توهج خلفي أكبر وأقوى */}
      <circle
        cx={cx}
        cy={cy}
        r={10}
        fill="#6366f1"
        fillOpacity={0.4}
        filter="url(#glowFilter)"
        className="animate-pulse" // تأثير نبض إختياري
      />
      {/* 🔹 النقطة الرئيسية النشطة */}
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="#818cf8"
        stroke="#ffffff"
        strokeWidth={2}
      />
    </g>
  );
};

export default function VisitorsOverview() {
  return (
    <div className="w-full bg-[#0d1322] text-white p-6 h-full rounded-2xl border border-slate-800/80 shadow-xl">
      {/* 🔹 Header (نفس الكود السابق) */}
      <div className="flex justify-between items-start mb-30 xl:mb-6 h-4">
        <div>
          <span className="text-sm font-medium text-slate-400">
            Visitors Overview
          </span>
          <div className="flex items-center gap-3 mt-1 py-5">
            <h2 className="text-3xl font-bold tracking-tight">12,847</h2>
            <span className="flex items-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3 me-1" />
              18.6%
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">vs last month</p>
        </div>
      </div>

      {/* 🔹 Chart Area */}
      <div className="w-full xl:h-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              {/* 🔹 3. تعريف فلتر الـ Glow (التوهج) */}
              <filter
                id="glowFilter"
                x="-50%"
                y="-50%"
                width="200%"
                height="150%"
              >
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* 🔹 تدرج اللون المضيء تحت الخط (نفس السابق) */}
              <linearGradient id="colorGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* شبكة خلفية (نفس السابق) */}
            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            {/* المحاور (نفس السابق) */}
            <XAxis
              dataKey="date"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}K`}
            />

            {/* Tooltip (نفس السابق) */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#090d16",
                borderColor: "#1e293b",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{ color: "#94a3b8", fontSize: "12px" }}
              itemStyle={{ color: "#818cf8", fontWeight: "bold" }}
            />

            {/* المنحنى الرئيسي المضيء */}
            <Area
              type="natural"
              dataKey="visitors"
              stroke="#818cf8"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorGlow)"
              // 🔹 4. تفعيل النقاط وتخصيصها
              dot={<CustomGlowDot />} // النقاط الافتراضية المضيئة
              activeDot={<CustomActiveDot />} // النقطة النشطة عند الـ Hover
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
