interface EngineeringDashboardProps {
  motorPower: number;
  beltWidth: number;
  beltType: string;
  warningCount: number;
}

const EngineeringDashboard = ({
  motorPower,
  beltWidth,
  beltType,
  warningCount,
}: EngineeringDashboardProps) => {

  /*
    HEALTH STATUS
  */

  const systemHealth =
    warningCount === 0
      ? "Excellent"
      : warningCount <= 2
      ? "Stable"
      : "Critical";

  /*
    CONVEYOR CLASS
  */

  const conveyorClass =
    beltWidth >= 1400
      ? "Heavy Duty"
      : beltWidth >= 1000
      ? "Medium Duty"
      : "Light Duty";

  /*
    AI STATUS
  */

  const aiStatus =
    motorPower > 100
      ? "Advanced Monitoring Recommended"
      : "System Stable";

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* MOTOR */}

      <div className="bg-blue-600 p-5 rounded-2xl">

        <h3 className="text-sm mb-2">
          Motor Power
        </h3>

        <div className="text-3xl font-bold">
          {motorPower.toFixed(1)}
          <span className="text-sm ml-2">
            kW
          </span>
        </div>

      </div>

      {/* BELT */}

      <div className="bg-green-600 p-5 rounded-2xl">

        <h3 className="text-sm mb-2">
          Belt Type
        </h3>

        <div className="text-xl font-bold">
          {beltType}
        </div>

      </div>

      {/* CLASS */}

      <div className="bg-purple-600 p-5 rounded-2xl">

        <h3 className="text-sm mb-2">
          Conveyor Class
        </h3>

        <div className="text-xl font-bold">
          {conveyorClass}
        </div>

      </div>

      {/* HEALTH */}

      <div
        className={`p-5 rounded-2xl

        ${
          warningCount === 0
            ? "bg-green-700"
            : warningCount <= 2
            ? "bg-yellow-600"
            : "bg-red-700"
        }
        `}
      >

        <h3 className="text-sm mb-2">
          System Health
        </h3>

        <div className="text-xl font-bold">
          {systemHealth}
        </div>

        <div className="text-xs mt-2">
          {aiStatus}
        </div>

      </div>

    </div>

  );
};

export default EngineeringDashboard;