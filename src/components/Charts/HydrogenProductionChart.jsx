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

const HydrogenProductionChart = ({ data }) => {
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const yearOptions = years.map((year) => ({ value: year, label: year }));
  const technologies = ["AEC", "PEMEC", "SOEC"];

  const [selectedYears, setSelectedYears] = useState(yearOptions);
  const [selectedTech, setSelectedTech] = useState(["AEC", "PEMEC", "SOEC"]);
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
    2019: ["#3498db", "#2980b9", "#1abc9c"],
    2020: ["#e74c3c", "#c0392b", "#d35400"],
    2021: ["#f1c40f", "#f39c12", "#e67e22"],
    2022: ["#9b59b6", "#8e44ad", "#2c3e50"],
    2023: ["#1abc9c", "#16a085", "#27ae60"],
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded shadow-lg border border-gray-200">
          <p className="font-bold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.fill }}>
              {`${entry.name}: ${entry.value.toFixed(2)} tons`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-md"
    >
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
                  className="mr-1 text-custom-blue"
                />
                <span>{tech}</span>
              </label>
            ))}
          </div>
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
              value: "H2 [tons]",
              angle: -90,
              position: "insideLeft",
              offset: -50,
              fill: "#666",
            }}
            tick={{ fill: "#666" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {selectedYears.flatMap((yearOption) =>
            selectedTech.map((tech) => (
              <Bar
                key={`${yearOption.value}${tech}`}
                dataKey={`Total${yearOption.value}${tech}`}
                name={`${yearOption.value} ${tech}`}
                stackId={yearOption.value}
                onMouseEnter={() => setHoveredBar(`${yearOption.value}${tech}`)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[yearOption.value][technologies.indexOf(tech)]}
                    opacity={
                      hoveredBar === `${yearOption.value}${tech}` ? 1 : 0.7
                    }
                  />
                ))}
              </Bar>
            ))
          )}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default HydrogenProductionChart;
