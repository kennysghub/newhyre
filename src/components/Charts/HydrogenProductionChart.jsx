import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HydrogenProductionChart = ({ data }) => {
  const [selectedYears, setSelectedYears] = useState([
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ]);
  const [selectedTech, setSelectedTech] = useState(["AEC", "PEMEC", "SOEC"]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const conversionFactors = {
      AEC: 0.0175,
      PEMEC: 0.019,
      SOEC: 0.0225,
    };

    const newChartData = months.map((month, index) => {
      const monthData = { month };
      selectedYears.forEach((year) => {
        const totalData = data.find((item) => item.Source === `Total${year}`);
        selectedTech.forEach((tech) => {
          const key = `Total${year}${tech}`;
          monthData[key] = totalData
            ? totalData[month] * conversionFactors[tech]
            : 0;
        });
      });
      return monthData;
    });

    setChartData(newChartData);
  }, [data, selectedYears, selectedTech]);
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const technologies = ["AEC", "PEMEC", "SOEC"];
  const colors = {
    2019: ["#1f77b4", "#aec7e8", "#ff7f0e"],
    2020: ["#ffbb78", "#2ca02c", "#98df8a"],
    2021: ["#d62728", "#ff9896", "#9467bd"],
    2022: ["#c5b0d5", "#8c564b", "#c49c94"],
    2023: ["#e377c2", "#f7b6d2", "#7f7f7f"],
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <h3 className="font-medium">Years:</h3>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <label key={year} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedYears([...selectedYears, year]);
                    } else {
                      setSelectedYears(selectedYears.filter((y) => y !== year));
                    }
                  }}
                  className="mr-1"
                />
                <span>{year}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <label key={tech} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTech.includes(tech)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTech([...selectedTech, tech]);
                    } else {
                      setSelectedTech(selectedTech.filter((t) => t !== tech));
                    }
                  }}
                  className="mr-1"
                />
                <span>{tech}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            label={{ value: "H2 [tons]", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          {selectedYears.flatMap((year, yearIndex) =>
            selectedTech.map((tech, techIndex) => (
              <Bar
                key={`${year}${tech}`}
                dataKey={`Total${year}${tech}`}
                name={`${year} ${tech}`}
                fill={colors[year][technologies.indexOf(tech)]}
                stackId={year}
              />
            ))
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HydrogenProductionChart;
