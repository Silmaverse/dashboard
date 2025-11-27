"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const data = [
  { name: "A", red: 40, pink: 65, blue: 30, purple: 50 },
  { name: "B", red: 20, pink: 50, blue: 80, purple: 60 },
  { name: "C", red: 60, pink: 90, blue: 40, purple: 70 },
  { name: "D", red: 30, pink: 70, blue: 55, purple: 85 },
  { name: "E", red: 50, pink: 40, blue: 70, purple: 65 },
];

export default function CustomAreaChart() {
  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* ==== GRADIENTS ==== */}
          <defs>
            <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0.2} />
            </linearGradient>

            <linearGradient id="pink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f2a7ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f2a7ff" stopOpacity={0.2} />
            </linearGradient>

            <linearGradient id="blue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#67a8ff" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#67a8ff" stopOpacity={0.3} />
            </linearGradient>

            <linearGradient id="purple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b095ff" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#b095ff" stopOpacity={0.3} />
            </linearGradient>
          </defs>

          {/* Hide tooltip box (optional) */}
          <Tooltip cursor={false} />

          {/* ==== LAYERS (stacked visually) ==== */}
          <Area
            type="monotone"
            dataKey="red"
            stroke="none"
            fill="url(#red)"
          />

          <Area
            type="monotone"
            dataKey="pink"
            stroke="none"
            fill="url(#pink)"
          />

          <Area
            type="monotone"
            dataKey="blue"
            stroke="none"
            fill="url(#blue)"
          />

          <Area
            type="monotone"
            dataKey="purple"
            stroke="none"
            fill="url(#purple)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
