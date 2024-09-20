import React from "react";
import DataProcessor from "./DataProcessor";
import EnergyCurtailmentChart from "./EnergyCurtailmentChart";
import HydrogenProductionChart from "./HydrogenProductionChart";

const MainChart = () => {
  return (
    <DataProcessor>
      {({ curtailmentData, productionData }) => (
        <>
          <h2>Renewable Energy Curtailment</h2>
          {curtailmentData && curtailmentData.length > 0 ? (
            <EnergyCurtailmentChart data={curtailmentData} />
          ) : (
            <p>No data available for Energy Curtailment Chart</p>
          )}

          <h2>Theoretical Renewable Hydrogen Production</h2>
          {productionData && productionData.length > 0 ? (
            <HydrogenProductionChart data={productionData} />
          ) : (
            <p>No data available for Hydrogen Production Chart</p>
          )}
        </>
      )}
    </DataProcessor>
  );
};

export default MainChart;
