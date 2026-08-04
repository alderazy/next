"use client";
import { Card } from "@/shared/components/ui/card";
import { LayoutDashboard, ArrowUpRight } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];
export const TSP = () => {
  return (
    <div className=" flex flex-col xl:flex-row ">
      <div className="flex-1 flex flex-wrap items-center justify-center px-2">
        <Card className="bg-red-600/30 p-2">
          <LayoutDashboard />
        </Card>
        <div className="pt-2  ps-3">
          <p className="text-h6">213</p>
          <p className="text-(length:--text-fluid-sm)">wedsfdf</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 text-red-400 lg:hidden">
        <p>23</p>
        <ArrowUpRight />
      </div>

      <div className="h-20 xl:flex-1 mt-3 hidden lg:block min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
