import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TrendChartsProps {
  motorPower: number;
  speed: number;
}

const TrendCharts = ({
  motorPower,
  speed,
}: TrendChartsProps) => {

  /*
    SAMPLE LIVE DATA
  */

  const data = [
    {
      time: "10:00",
      power: motorPower * 0.85,
      speed: speed * 0.9,
    },

    {
      time: "10:05",
      power: motorPower * 0.92,
      speed: speed * 0.95,
    },

    {
      time: "10:10",
      power: motorPower * 1.05,
      speed: speed * 1.02,
    },

    {
      time: "10:15",
      power: motorPower * 0.98,
      speed: speed * 1.01,
    },

    {
      time: "10:20",
      power: motorPower,
      speed: speed,
    },
  ];

  return (

    <div className="bg-gray-950 p-6 rounded-3xl">

      <h2 className="text-2xl font-bold mb-6">
        Live Engineering Trends
      </h2>

      {/* POWER CHART */}

      <div className="mb-10">

        <h3 className="text-lg mb-4">
          Motor Power Trend
        </h3>

        <div className="h-[300px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="power"
                stroke="#3b82f6"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* SPEED CHART */}

      <div>

        <h3 className="text-lg mb-4">
          Belt Speed Trend
        </h3>

        <div className="h-[300px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="speed"
                stroke="#22c55e"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );
};

export default TrendCharts;