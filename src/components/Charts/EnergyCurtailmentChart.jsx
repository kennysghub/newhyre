import { useState, useEffect } from "react";
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

const EnergyCurtailmentChart = ({ data }) => {
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const yearOptions = years.map((year) => ({ value: year, label: year }));
  const resources = ["Solar", "Wind", "Total"];

  const [selectedYears, setSelectedYears] = useState(yearOptions);
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

  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"];

  return (
    <div className="space-y-4">
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
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {resources.map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
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
              value: "Curtailment [MWh]",
              angle: -90,
              position: "insideLeft",
              offset: -50,
            }}
          />
          <Tooltip />
          <Legend />
          {selectedYears.map((yearOption, index) => (
            <Bar
              key={yearOption.value}
              dataKey={`${selectedResource}${yearOption.value}`}
              name={`${selectedResource} ${yearOption.value}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyCurtailmentChart;
