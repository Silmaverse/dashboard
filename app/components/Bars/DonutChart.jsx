"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Direct", value: 40, color: "#7A5AF8" },
  { name: "Social", value: 20, color: "#FF4E78" },
  { name: "Email", value: 30, color: "#F7E14B" },
  { name: "Other", value: 15, color: "#FF6B6B" },
];

export default function DonutChart() {
  return (
   <>
  
      <div className="w-[260px] h-[280px] relative mx-auto">

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-gray-600">52%</span>
        </div>

        <ResponsiveContainer>
          <PieChart>
            {/* Background ring */}
            <Pie
              data={[{ value: 100 }]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={85}
              stroke="none"
              fill="#E9EDF5"
            />

            {/* Colored arcs */}
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={85}
              stroke="#fff"
              strokeWidth={6}
              paddingAngle={4}
              cornerRadius={25}
            >
              {data.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* TEXT — should be OUTSIDE the chart container */}
      <p className="text-center text-sm text-gray-500 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt.
      </p>

    </>
  );
}
