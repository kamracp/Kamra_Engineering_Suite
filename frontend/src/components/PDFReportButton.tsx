import jsPDF from "jspdf";

import html2canvas from "html2canvas";

interface PDFReportButtonProps {
  reportId: string;
}

const PDFReportButton = ({
  reportId,
}: PDFReportButtonProps) => {

  const generatePDF =
    async () => {

      const input =
        document.getElementById(
          reportId
        );

      if (!input) return;

      const canvas =
        await html2canvas(input);

      const imgData =
        canvas.toDataURL(
          "image/png"
        );

      const pdf =
        new jsPDF(
          "p",
          "mm",
          "a4"
        );

      const pdfWidth =
        pdf.internal.pageSize.getWidth();

      const pdfHeight =
        (
          canvas.height *
          pdfWidth
        ) /
        canvas.width;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save(
        "Belt_Conveyor_Report.pdf"
      );

    };

  return (

    <button
      onClick={generatePDF}
      className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold transition"
    >

      Export PDF Report

    </button>

  );
};

export default PDFReportButton;