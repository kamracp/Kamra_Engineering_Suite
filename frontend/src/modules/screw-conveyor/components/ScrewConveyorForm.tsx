import React from "react";
import type { ScrewConveyorInput } from "../types/ScrewConveyorTypes";

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
    <div className="bg-white text-black rounded-lg shadow-md p-4">

      <h2 className="text-xl font-bold text-black mb-4">
        Screw Conveyor Inputs
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-black">
            Material
          </label>

          <select
            className="w-full border rounded p-2 bg-white text-black"
            value={input.material}
            onChange={(e) =>
              setInput({
                ...input,
                material: e.target.value,
              })
            }
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
          <label className="block text-sm font-medium text-black">
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
          <label className="block text-sm font-medium text-black">
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
          <label className="block text-sm font-medium text-black">
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

        <div>
          <label className="block text-sm font-medium text-black">
            Fill Factor
          </label>

          <input
            type="number"
            step="0.01"
            className="w-full border rounded p-2 bg-white text-black"
            value={input.fillFactor}
            onChange={(e) =>
              setInput({
                ...input,
                fillFactor: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
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

      </div>
    </div>
  );
};

export default ScrewConveyorForm;