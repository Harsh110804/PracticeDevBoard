"use client";
import { PieChart } from "@mui/x-charts/PieChart";

type PieChartItem = {
    id:number,
    label : string,
    value : number,
    color? : string
}

type PieChartProps = {
    title : string,
    data : PieChartItem[],
    height? : number,
    donut? : boolean,
    showLegend? : boolean,
    className?:string
}

const chartColors = [
  "#7C22FA",
  "#16A34A",
  "#F59E0B",
  "#EF4444",
  "#3B82F6",
];

export default function AppPieChart({
    title,
    data,
    height = 200,
    donut = false,
    showLegend = true,
    className = " "
} : PieChartProps) {
    const hasData = data.some((item) => item.value > 0);

  return (
    <section className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}>
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      {hasData ? (
        <PieChart
          height={height}
          colors={chartColors}
          hideLegend={!showLegend}
          series={[
            {
              data: data.map((item) => ({
                ...item,
                color: item.color,
              })),
              innerRadius: donut ? 55 : 0,
              outerRadius: 90,
              paddingAngle: 1,
              cornerRadius: 2,
            },
          ]}
        />
      ) : (
        <div className="flex items-center justify-center text-sm text-gray-500" style={{ height }}>
          No chart data available
        </div>
      )}
    </section>
  );
}