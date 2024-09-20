import React, { useState, useEffect } from "react";
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

const EnergyCurtailmentChart = ({ data }) => {
  const [selectedYears, setSelectedYears] = useState([
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ]);
  const [selectedResource, setSelectedResource] = useState("Total");
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

    const newChartData = months.map((month, index) => {
      const monthData = { month };
      selectedYears.forEach((year) => {
        const resourceData = data.find(
          (item) => item.Source === `${selectedResource}${year}`
        );
        monthData[`${selectedResource}${year}`] = resourceData
          ? resourceData[month]
          : 0;
      });
      return monthData;
    });

    setChartData(newChartData);
  }, [data, selectedYears, selectedResource]);

  const years = ["2019", "2020", "2021", "2022", "2023"];
  const resources = ["Solar", "Wind", "Total"];
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"];

  return (
    <div>
      <div>
        <label>Resource: </label>
        <select
          value={selectedResource}
          onChange={(e) => setSelectedResource(e.target.value)}
        >
          {resources.map((resource) => (
            <option key={resource} value={resource}>
              {resource}
            </option>
          ))}
        </select>
        {years.map((year) => (
          <label key={year}>
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
            />
            {year}
          </label>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            label={{
              value: "Curtailment [MWh]",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {selectedYears.map((year, index) => (
            <Bar
              key={year}
              dataKey={`${selectedResource}${year}`}
              name={`${selectedResource} ${year}`}
              fill={colors[index]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyCurtailmentChart;
