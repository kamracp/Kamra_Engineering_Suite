import { useState } from "react";

import ConveyorDrawing from "../components/ConveyorDrawing";
import ResultCard from "../components/ResultCard";
import WarningPanel from "../components/WarningPanel";
import EngineeringDashboard from "../components/EngineeringDashboard";
import AIRecommendationPanel from "../components/AIRecommendationPanel";
import LiveDataPanel from "../components/LiveDataPanel";
import TrendCharts from "../components/TrendCharts";
import PDFReportButton from "../components/PDFReportButton";

import {
  calculateConveyor,
} from "../calculations/ConveyorCalculationEngine";

import {
  materialDatabase,
} from "../data/materialDatabase";

const BeltConveyor = () => {

  /*
    STATES
  */

  const [material, setMaterial] =
    useState("Coal");

  const [capacity, setCapacity] =
    useState(100);

  const [length, setLength] =
    useState(50);

  const [height, setHeight] =
    useState(10);

  const [inclineAngle, setInclineAngle] =
    useState(15);

  const [speed, setSpeed] =
    useState(2.5);

  const [shaftMaterial, setShaftMaterial] =
    useState("EN8");

  const [activeTab, setActiveTab] =
    useState("General");

  /*
    MATERIAL
  */

  const selectedMaterial =
    materialDatabase[
      material as keyof typeof materialDatabase
    ];

  /*
    CALCULATIONS
  */

  const results =
    calculateConveyor({
      material,
      density:
        selectedMaterial.density,
      capacity,
      length,
      height,
      speed,
      shaftMaterial,
      inclineAngle,
    });

  /*
    TABS
  */

  const tabs = [
    "General",
    "Drive",
    "Pulley",
    "Shaft",
    "Bearing",
    "Belt",
    "Warnings",
  ];

  return (

    <div id="conveyor-report" className="space-y-8">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Belt Conveyor Engineering
          </h1>

          <p className="text-gray-400 mt-2">
            Industrial Conveyor Design Suite
          </p>

        </div>

        <PDFReportButton
          reportId="conveyor-report"
        />

      </div>

      {/* TABS */}

      <div className="flex flex-wrap gap-3">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab)
            }
            className={`px-5 py-3 rounded-2xl font-semibold transition

            ${
              activeTab === tab
                ? "bg-blue-500 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }
            `}
          >

            {tab}

          </button>

        ))}

      </div>

      {/* ENGINEERING DASHBOARD */}

      <EngineeringDashboard
        motorPower={
          results.motorPower
        }
        beltWidth={
          results.beltWidth
        }
        beltType={
          results.belt.beltType
        }
        warningCount={
          results.warnings.length
        }
      />

      {/* LIVE DATA */}

      <LiveDataPanel
        speed={speed}
        motorPower={
          results.motorPower
        }
        beltWidth={
          results.beltWidth
        }
        warningCount={
          results.warnings.length
        }
      />

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* INPUT PANEL */}

        <div className="bg-gray-900 p-6 rounded-3xl space-y-5">

          <h2 className="text-2xl font-bold">
            Engineering Inputs
          </h2>

          {/* MATERIAL */}

          <div>

            <label className="block mb-2">
              Material
            </label>

            <select
              value={material}
              onChange={(e) =>
                setMaterial(
                  e.target.value
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            >

              {Object.keys(
                materialDatabase
              ).map((mat) => (

                <option key={mat}>
                  {mat}
                </option>

              ))}

            </select>

          </div>

          {/* CAPACITY */}

          <div>

            <label className="block mb-2">
              Capacity (TPH)
            </label>

            <input
              type="number"
              value={capacity}
              onChange={(e) =>
                setCapacity(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            />

          </div>

          {/* LENGTH */}

          <div>

            <label className="block mb-2">
              Conveyor Length (m)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            />

          </div>

          {/* HEIGHT */}

          <div>

            <label className="block mb-2">
              Lift Height (m)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            />

          </div>

          {/* SPEED */}

          <div>

            <label className="block mb-2">
              Belt Speed (m/s)
            </label>

            <input
              type="number"
              step="0.1"
              value={speed}
              onChange={(e) =>
                setSpeed(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            />

          </div>

          {/* INCLINE */}

          <div>

            <label className="block mb-2">
              Incline Angle (°)
            </label>

            <input
              type="number"
              value={inclineAngle}
              onChange={(e) =>
                setInclineAngle(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            />

          </div>

          {/* SHAFT */}

          <div>

            <label className="block mb-2">
              Shaft Material
            </label>

            <select
              value={shaftMaterial}
              onChange={(e) =>
                setShaftMaterial(
                  e.target.value
                )
              }
              className="w-full p-3 rounded-xl bg-gray-800"
            >

              <option>EN8</option>
              <option>EN19</option>
              <option>EN24</option>

            </select>

          </div>

        </div>

        {/* RESULTS */}

        <div className="xl:col-span-2 bg-gray-900 p-6 rounded-3xl space-y-6">

          <h2 className="text-2xl font-bold">
            Engineering Results
          </h2>

          {/* GENERAL */}

          {activeTab === "General" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Density"
                value={selectedMaterial.density}
                unit="t/m³"
              />

              <ResultCard
                title="Belt Width"
                value={results.beltWidth}
                unit="mm"
              />

              <ResultCard
                title="Area"
                value={results.area.toFixed(4)}
                unit="m²"
              />

              <ResultCard
                title="Flowability"
                value={
                  selectedMaterial.flowability
                }
              />

            </div>

          )}

          {/* DRIVE */}

          {activeTab === "Drive" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Motor Power"
                value={results.motorPower.toFixed(2)}
                unit="kW"
              />

              <ResultCard
                title="Pulley RPM"
                value={results.pulley.pulleyRPM}
              />

              <ResultCard
                title="Gearbox Ratio"
                value={results.pulley.gearboxRatio}
              />

              <ResultCard
                title="Drive Type"
                value={results.pulley.driveType}
              />

            </div>

          )}

          {/* PULLEY */}

          {activeTab === "Pulley" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Pulley Diameter"
                value={results.pulley.pulleyDiameter}
                unit="mm"
              />

              <ResultCard
                title="Lagging Type"
                value={results.pulley.laggingType}
              />

              <ResultCard
                title="Face Width"
                value={results.pulley.pulleyFaceWidth}
                unit="mm"
              />

              <ResultCard
                title="Center Height"
                value={results.pulley.shaftCenterHeight}
                unit="mm"
              />

            </div>

          )}

          {/* SHAFT */}

          {activeTab === "Shaft" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Shaft Diameter"
                value={results.shaft.selectedShaft}
                unit="mm"
              />

              <ResultCard
                title="Safety Factor"
                value={results.shaft.safetyFactor}
              />

              <ResultCard
                title="Key Size"
                value={results.shaft.keySize}
              />

              <ResultCard
                title="Coupling"
                value={results.shaft.couplingType}
              />

            </div>

          )}

          {/* BEARING */}

          {activeTab === "Bearing" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Bearing Series"
                value={results.bearing.bearingSeries}
              />

              <ResultCard
                title="Bearing Life"
                value={results.bearing.bearingLifeHours}
                unit="Hours"
              />

              <ResultCard
                title="Lubrication"
                value={results.bearing.lubricationType}
              />

              <ResultCard
                title="Housing"
                value={results.bearing.housingType}
              />

            </div>

          )}

          {/* BELT */}

          {activeTab === "Belt" && (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ResultCard
                title="Belt Type"
                value={results.belt.beltType}
              />

              <ResultCard
                title="Belt Rating"
                value={results.belt.beltRating}
              />

              <ResultCard
                title="Cover Grade"
                value={results.belt.coverGrade}
              />

              <ResultCard
                title="Splice Type"
                value={results.belt.spliceType}
              />

            </div>

          )}

          {/* WARNINGS */}

          {activeTab === "Warnings" && (

            <WarningPanel
              warnings={
                results.warnings
              }
            />

          )}

        </div>

      </div>

      {/* AI PANEL */}

      <AIRecommendationPanel
        motorPower={
          results.motorPower
        }
        beltWidth={
          results.beltWidth
        }
        inclineAngle={
          inclineAngle
        }
        warningCount={
          results.warnings.length
        }
      />

      {/* TREND CHARTS */}

      <TrendCharts
        motorPower={
          results.motorPower
        }
        speed={speed}
      />

      {/* DRAWING */}

      <div className="bg-gray-900 p-6 rounded-3xl">

        <h2 className="text-2xl font-bold mb-6">
          Conveyor Layout
        </h2>

        <ConveyorDrawing
          beltWidth={
            results.beltWidth
          }
          drumDiameter={
            results.pulley.pulleyDiameter
          }
          inclineAngle={
            inclineAngle
          }
        />

      </div>

    </div>

  );
};

export default BeltConveyor;