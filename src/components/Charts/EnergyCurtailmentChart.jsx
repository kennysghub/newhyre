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
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const EnergyCurtailmentChart = ({ data }) => {
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const yearOptions = years.map((year) => ({ value: year, label: year }));
  const resources = ["Solar", "Wind", "Total"];

  const [selectedYears, setSelectedYears] = useState(yearOptions);
  const [selectedResource, setSelectedResource] = useState("Total");
  const [chartData, setChartData] = useState([]);
  const [hoveredBar, setHoveredBar] = useState(null);

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

    const newChartData = months.map((month) => {
      const monthData = { month };
      selectedYears.forEach((yearOption) => {
        const year = yearOption.value;
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

  const colors = {
    2019: "#005f99", // Muted blue
    2020: "#cc4c39", // Muted red
    2021: "#278033", // Muted green
    2022: "#7b3e87", // Muted purple
    2023: "#333333", // Muted gray
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded shadow-lg border border-gray-200">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.fill }}>
              {`${entry.name}: ${entry.value.toFixed(2)} MWh`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const getLegendPayload = () => {
    return selectedYears.map((yearOption) => ({
      value: `${selectedResource} ${yearOption.value}`,
      color: colors[yearOption.value],
      type: "square",
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-md"
    >
      <div className="flex flex-wrap items-center gap-4">
        <div className="w-64">
          <label className="block font-medium mb-2">Years:</label>
          <Select
            isMulti
            options={yearOptions}
            value={selectedYears}
            onChange={setSelectedYears}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Resource:</label>
          <select
            value={selectedResource}
            onChange={(e) => setSelectedResource(e.target.value)}
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-custom-blue"
          >
            {resources.map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" tick={{ fill: "#666" }} />
          <YAxis
            label={{
              value: "Curtailment [MWh]",
              angle: -90,
              position: "insideLeft",
              offset: -50,
              fill: "#666",
              fontSize: 20,
            }}
            tick={{ fill: "#666" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend payload={getLegendPayload()} />
          {selectedYears.map((yearOption) => (
            <Bar
              key={yearOption.value}
              dataKey={`${selectedResource}${yearOption.value}`}
              name={`${selectedResource} ${yearOption.value}`}
              onMouseEnter={() => setHoveredBar(yearOption.value)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              {chartData.map((entry, entryIndex) => (
                <Cell
                  key={`cell-${entryIndex}`}
                  fill={colors[yearOption.value]}
                  opacity={hoveredBar === yearOption.value ? 1 : 0.7}
                />
              ))}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default EnergyCurtailmentChart;
