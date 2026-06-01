import React from "react";

interface Props {
  diameter: number;
  pitch: number;
  length: number;
  rpm: number;
}

const ScrewConveyorDrawing: React.FC<Props> = ({
  diameter,
  pitch,
  length,
  rpm,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-6">

      <h2 className="text-xl font-bold mb-4 text-black">
        Screw Conveyor Drawing
      </h2>

      <svg
        width="100%"
        height="220"
        viewBox="0 0 900 220"
      >
        {/* Trough */}

        <rect
          x="50"
          y="80"
          width="700"
          height="60"
          fill="#e5e7eb"
          stroke="#374151"
          strokeWidth="2"
        />

        {/* Screw Flights */}

        {Array.from({ length: 20 }).map((_, i) => (
          <ellipse
            key={i}
            cx={80 + i * 32}
            cy={110}
            rx="18"
            ry="28"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
          />
        ))}

        {/* Drive End */}

        <rect
          x="760"
          y="70"
          width="70"
          height="80"
          fill="#9ca3af"
          stroke="#374151"
        />

        <text
          x="765"
          y="165"
          fontSize="12"
        >
          Gearbox
        </text>

        {/* Labels */}

        <text
          x="50"
          y="30"
          fontSize="16"
          fontWeight="bold"
          fill="black"
>
          Screw Conveyor Layout
        </text>

        <text x="50" y="200" fontSize="14">
          Diameter : {diameter} mm
        </text>

        <text x="250" y="200" fontSize="14">
          Pitch : {pitch} mm
        </text>

        <text x="420" y="200" fontSize="14">
          Length : {length} m
        </text>

        <text x="620" y="200" fontSize="14">
          RPM : {rpm}
        </text>
      </svg>

    </div>
  );
};

export default ScrewConveyorDrawing;