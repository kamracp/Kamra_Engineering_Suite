import React from "react";
import type { ScrewConveyorResult } from "../types/ScrewConveyorTypes";

interface Props {
  result: ScrewConveyorResult | null;
}

const ScrewConveyorPDFButton: React.FC<Props> = ({ result }) => {
  const generatePDF = () => {
    if (!result) return;

    window.print();
  };

  return (
    <button
      onClick={generatePDF}
      disabled={!result}
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        px-6
        py-3
        rounded-lg
        font-semibold
        shadow
        disabled:bg-gray-400
      "
    >
      Export PDF Report
    </button>
  );
};

export default ScrewConveyorPDFButton;