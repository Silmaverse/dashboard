'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "1", direct: 40, social: 60 },
  { name: "2", direct: 55, social: 35 },
  { name: "3", direct: 30, social: 75 },
  { name: "4", direct: 80, social: 40 },
  { name: "5", direct: 50, social: 90 },
  { name: "6", direct: 70, social: 45 },
  { name: "7", direct: 45, social: 60 }
];

export default function Revenuebars() {
  return (
    <div
      style={{
        width: "100%",
        height: 340,          // slightly taller to include text
        padding: 16,
        borderRadius: 16,
        background: "white"
      }}
    >
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="directGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6736ff" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#6736ff" stopOpacity={0.25} />
              </linearGradient>

              <linearGradient id="socialGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb3e6" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#ffb3e6" stopOpacity={0.25} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip cursor={false} />

            <Area
              type="monotone"
              dataKey="direct"
              stroke="#6736ff"
              fill="url(#directGrad)"
            />
            <Area
              type="monotone"
              dataKey="social"
              stroke="#ff8adf"
              fill="url(#socialGrad)"
            />

            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              wrapperStyle={{ paddingTop: 10 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* TEXT BELOW THE CHART */}
      <p style={{ color: "#838a9d", fontSize: 14, marginTop: 12 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>
  );
}
