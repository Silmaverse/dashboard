"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 50 },
  { day: "Thu", value: 15 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 70 },
  { day: "Sun", value: 30 },
];

export default function CustomBarChart() {
  const fullBarColor = "#E6E9EE"; // light gray background
  const fillColor = "#6C5DD3"; // purple fill

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            tick={{ fill: "#000", fontSize: 14 }}
            tickFormatter={(day) =>
              day === "Sat" ? <span style={{ color: "red" }}>{day}</span> : day
            }
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={index} fill={fillColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
