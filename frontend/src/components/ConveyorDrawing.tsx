interface ConveyorDrawingProps {
  beltWidth: number;
  drumDiameter: number;
  inclineAngle: number;
}

const ConveyorDrawing = ({
  beltWidth,
  drumDiameter,
  inclineAngle,
}: ConveyorDrawingProps) => {

  /*
    SCALE FACTORS
  */

  const scaledWidth =
    Math.min(
      beltWidth / 10,
      180
    );

  const scaledDrum =
    Math.min(
      drumDiameter / 5,
      120
    );

  /*
    BELT COLOR
  */

  const beltColor =
    beltWidth >= 1400
      ? "#2563eb"
      : beltWidth >= 1000
      ? "#16a34a"
      : "#f59e0b";

  return (

    <div className="w-full overflow-auto">

      <svg
        width="100%"
        height="450"
        viewBox="0 0 1200 450"
        className="bg-gray-950 rounded-3xl"
      >

        {/* DEFINITIONS */}

        <defs>

          {/* BELT ANIMATION */}

          <linearGradient
            id="beltGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >

            <stop
              offset="0%"
              stopColor="#111827"
            />

            <stop
              offset="50%"
              stopColor={beltColor}
            >

              <animate
                attributeName="offset"
                values="-1;1"
                dur="2s"
                repeatCount="indefinite"
              />

            </stop>

            <stop
              offset="100%"
              stopColor="#111827"
            />

          </linearGradient>

        </defs>

        {/* TITLE */}

        <text
          x="40"
          y="40"
          fill="white"
          fontSize="24"
          fontWeight="bold"
        >

          Conveyor Layout Visualization

        </text>

        {/* STRUCTURE */}

        <line
          x1="120"
          y1="330"
          x2="1020"
          y2="150"
          stroke="#6b7280"
          strokeWidth="10"
        />

        {/* BELT */}

        <line
          x1="120"
          y1="300"
          x2="1020"
          y2="120"
          stroke="url(#beltGradient)"
          strokeWidth={scaledWidth / 4}
          strokeLinecap="round"
        />

        {/* RETURN BELT */}

        <line
          x1="1020"
          y1="160"
          x2="120"
          y2="340"
          stroke="#374151"
          strokeWidth={scaledWidth / 5}
          strokeLinecap="round"
        />

        {/* HEAD PULLEY */}

        <g>

          <circle
            cx="1020"
            cy="140"
            r={scaledDrum / 4}
            fill="#9ca3af"
            stroke="#e5e7eb"
            strokeWidth="5"
          >

            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 1020 140"
              to="360 1020 140"
              dur="2s"
              repeatCount="indefinite"
            />

          </circle>

          <text
            x="970"
            y="80"
            fill="white"
            fontSize="16"
          >

            Drive Pulley

          </text>

        </g>

        {/* TAIL PULLEY */}

        <g>

          <circle
            cx="120"
            cy="320"
            r={scaledDrum / 5}
            fill="#9ca3af"
            stroke="#e5e7eb"
            strokeWidth="5"
          >

            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="360 120 320"
              to="0 120 320"
              dur="2s"
              repeatCount="indefinite"
            />

          </circle>

          <text
            x="70"
            y="390"
            fill="white"
            fontSize="16"
          >

            Tail Pulley

          </text>

        </g>

        {/* MATERIAL FLOW */}

        {[...Array(12)].map(
          (_, index) => (

            <circle
              key={index}
              cx={
                180 + index * 60
              }
              cy={
                285 - index * 12
              }
              r="8"
              fill="#f59e0b"
            >

              <animate
                attributeName="cx"
                values={`
                  ${180 + index * 60};
                  ${240 + index * 60}
                `}
                dur="1s"
                repeatCount="indefinite"
              />

            </circle>

          )
        )}

        {/* SUPPORT LEGS */}

        {[...Array(6)].map(
          (_, index) => {

            const x =
              220 +
              index * 140;

            const y =
              280 -
              index * 28;

            return (

              <g key={index}>

                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2="380"
                  stroke="#6b7280"
                  strokeWidth="6"
                />

                <line
                  x1={x - 30}
                  y1="380"
                  x2={x + 30}
                  y2="380"
                  stroke="#6b7280"
                  strokeWidth="6"
                />

              </g>

            );

          }
        )}

        {/* ENGINEERING INFO */}

        <g>

          <rect
            x="820"
            y="260"
            width="300"
            height="130"
            rx="20"
            fill="#111827"
            stroke="#2563eb"
            strokeWidth="3"
          />

          <text
            x="850"
            y="300"
            fill="white"
            fontSize="18"
            fontWeight="bold"
          >

            Conveyor Data

          </text>

          <text
            x="850"
            y="330"
            fill="#d1d5db"
            fontSize="16"
          >

            Belt Width:
            {" "}
            {beltWidth}
            {" "}mm

          </text>

          <text
            x="850"
            y="355"
            fill="#d1d5db"
            fontSize="16"
          >

            Drum Diameter:
            {" "}
            {drumDiameter}
            {" "}mm

          </text>

          <text
            x="850"
            y="380"
            fill="#d1d5db"
            fontSize="16"
          >

            Incline Angle:
            {" "}
            {inclineAngle}
            {" "}°

          </text>

        </g>

        {/* AI STATUS */}

        <g>

          <rect
            x="40"
            y="80"
            width="220"
            height="90"
            rx="20"
            fill="#052e16"
            stroke="#22c55e"
            strokeWidth="3"
          />

          <text
            x="70"
            y="115"
            fill="#22c55e"
            fontSize="20"
            fontWeight="bold"
          >

            AI Conveyor Status

          </text>

          <text
            x="70"
            y="145"
            fill="white"
            fontSize="16"
          >

            System Running Stable

          </text>

        </g>

      </svg>

    </div>

  );
};

export default ConveyorDrawing;