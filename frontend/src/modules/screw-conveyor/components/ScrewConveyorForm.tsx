
import React from "react";
import type { ScrewConveyorInput } from "../types/ScrewConveyorTypes";
import { materialDatabase } from "../data/materialDatabase";
interface Props {
  input: ScrewConveyorInput;
  setInput: React.Dispatch<
    React.SetStateAction<ScrewConveyorInput>
  >;
}

const ScrewConveyorForm: React.FC<Props> = ({
  input,
  setInput,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-1">
        ⚙ Screw Conveyor Engineering Inputs
      </h2>

      <p className="text-sm text-slate-500 mb-6 border-b pb-3">
        Design Parameters for Conveyor Sizing & Equipment Selection
      </p>

      <div className="space-y-6">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>

  

        {/* MATERIAL PROPERTIES */}

       <div className="bg-slate-50 border rounded-xl p-5 h-full shadow-sm"> 
          <h3 className="text-lg font-bold tracking-wide text-slate-800 mb-4 border-b pb-2">
            📦 MATERIAL PROPERTIES
          </h3>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Material
              </label>

              <select
                className="w-full border border-slate-300 rounded-lg p-3 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={input.material}
                onChange={(e) => {
  const material = e.target.value;
  const data = materialDatabase[material];

  setInput({
    ...input,
    material,
    bulkDensity: data.density,
    fillFactor: data.fillFactor,
  });
}}
              >
                <option value="Coal">Coal</option>
                <option value="Limestone">Limestone</option>
                <option value="Sand">Sand</option>
                <option value="Gravel">Gravel</option>
                <option value="Cement">Cement</option>
                <option value="FlyAsh">Fly Ash</option>
                <option value="Biomass">Biomass</option>
                <option value="Fertilizer">Fertilizer</option>
                <option value="IronOre">Iron Ore</option>
                <option value="GeneralBulkMaterial">
                  General Bulk Material
                </option>
              </select>
            </div>

   <div>
  <label className="block text-sm font-semibold text-slate-700 mb-1">
    Bulk Density (kg/m³)
  </label>

  

  <input
    type="number"
    readOnly
    className="w-full border border-blue-200 rounded-lg p-2 bg-blue-50 text-black font-semibold"
    value={input.bulkDensity}
  />
</div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Fill Factor
              </label>

              <input
                type="number"
                step="0.01"
                className="w-full border border-slate-300 rounded-lg p-2 bg-white text-black"
                value={input.fillFactor}
                onChange={(e) =>
                  setInput({
                    ...input,
                    fillFactor: Number(e.target.value),
                  })
                }
              />
            </div>

          </div>
        </div>

        {/* PROCESS REQUIREMENTS */}

     <div className="bg-slate-50 border rounded-xl p-5 h-full shadow-sm">   
          <h3 className="text-lg font-bold tracking-wide text-slate-800 mb-4 border-b pb-2">
            ⚡ PROCESS REQUIREMENTS
          </h3>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Capacity (TPH)
              </label>

              <input
                type="number"
                className="w-full border rounded p-2 bg-white text-black"
                value={input.capacityTPH}
                onChange={(e) =>
                  setInput({
                    ...input,
                    capacityTPH: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Length (m)
              </label>

              <input
                type="number"
                className="w-full border rounded p-2 bg-white text-black"
                value={input.length}
                onChange={(e) =>
                  setInput({
                    ...input,
                    length: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Inclination (deg)
              </label>

              <input
                type="number"
                className="w-full border rounded p-2 bg-white text-black"
                value={input.inclination}
                onChange={(e) =>
                  setInput({
                    ...input,
                    inclination: Number(e.target.value),
                  })
                }
              />
            </div>

          </div>
        </div>

        {/* MECHANICAL PARAMETERS */}

        <div className="bg-slate-50 border rounded-xl p-5">
          <h3 className="text-lg font-bold tracking-wide text-slate-800 mb-4 border-b pb-2">
            ⚙ MECHANICAL PARAMETERS
          </h3>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Pitch (mm)
            </label>

            <input
              type="number"
              className="w-full border rounded p-2 bg-white text-black"
              value={input.pitch}
              onChange={(e) =>
                setInput({
                  ...input,
                  pitch: Number(e.target.value),
                })
              }
            />
          </div>

          <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 p-3">
            <p className="text-sm text-blue-700">
              Screw Diameter is automatically selected based on Capacity.
            </p>

            <p className="text-sm text-blue-700 mt-2">
              RPM is automatically selected based on Screw Diameter.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrewConveyorForm;
