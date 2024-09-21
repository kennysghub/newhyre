import React, { useState, useEffect } from "react";
import Select from "react-select";
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
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const yearOptions = years.map((year) => ({ value: year, label: year }));
  const technologies = ["AEC", "PEMEC", "SOEC"];

  const [selectedYears, setSelectedYears] = useState(yearOptions);
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

    const newChartData = months.map((month) => {
      const monthData = { month };
      selectedYears.forEach((yearOption) => {
        const year = yearOption.value;
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
        <div className="w-64">
          <h3 className="font-medium mb-2">Years:</h3>
          <Select
            isMulti
            options={yearOptions}
            value={selectedYears}
            onChange={setSelectedYears}
            className="basic-multi-select"
            classNamePrefix="select"
          />
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
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            label={{
              value: "H2 [tons]",
              angle: -90,
              position: "insideLeft",
              offset: -50,
            }}
          />
          <Tooltip />
          <Legend />
          {selectedYears.flatMap((yearOption) =>
            selectedTech.map((tech) => (
              <Bar
                key={`${yearOption.value}${tech}`}
                dataKey={`Total${yearOption.value}${tech}`}
                name={`${yearOption.value} ${tech}`}
                fill={colors[yearOption.value][technologies.indexOf(tech)]}
                stackId={yearOption.value}
              />
            ))
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HydrogenProductionChart;
