interface ResultCardProps {
  title: string;
  value: string | number;
  unit?: string;
  color?: string;
}

const ResultCard = ({
  title,
  value,
  unit,
  color = "bg-gray-800",
}: ResultCardProps) => {

  return (

    <div
      className={`${color} p-4 rounded-2xl shadow-lg`}
    >

      <h3 className="text-sm text-gray-400 mb-2">
        {title}
      </h3>

      <div className="text-2xl font-bold">

        {value}

        {unit && (
          <span className="text-sm ml-2 text-gray-300">
            {unit}
          </span>
        )}

      </div>

    </div>

  );
};

export default ResultCard;