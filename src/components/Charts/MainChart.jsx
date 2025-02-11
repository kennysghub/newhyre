import DataProcessor from "./DataProcessor";
import EnergyCurtailmentChart from "./EnergyCurtailmentChart";
import HydrogenProductionChart from "./HydrogenProductionChart";

const MainChart = () => {
  return (
    <DataProcessor>
      {({ curtailmentData, productionData }) => (
        <div className="space-y-6 my-10">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              Renewable Energy Curtailment
            </h2>
            {curtailmentData && curtailmentData.length > 0 ? (
              <EnergyCurtailmentChart data={curtailmentData} />
            ) : (
              <p className="text-gray-500 italic">
                No data available for Energy Curtailment Chart
              </p>
            )}
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              Theoretical Renewable Hydrogen Production
            </h2>
            {productionData && productionData.length > 0 ? (
              <HydrogenProductionChart data={productionData} />
            ) : (
              <p className="text-gray-500 italic">
                No data available for Hydrogen Production Chart
              </p>
            )}
          </section>
        </div>
      )}
    </DataProcessor>
  );
};

export default MainChart;
