import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

function PdfConverter() {
  const convertPDFHandler = () => {
    const document = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    const addPageNumber = () => {
      for (let i = 1; i <= document.internal.getNumberOfPages(); i++) {
        document.setPage(i);
        document.text(`Page ${i}`, 14, document.internal.pageSize.height - 10);
      }
    };

    autoTable(document, {
      head: [['ID', 'P.Name', 'Quantity', 'P.Price']],
      body: [
        [1, 'MUNCHYS LEXUS', 1, 490],
        [2, 'DAN CAKE', 1, 120],
        [6, 'Pran Potata Spicy Biscuit', 1, 15],
        [
          {
            content: 'Total',
            styles: {
              fontStyle: 'bold',
              halign: 'center',
            },
            colSpan: 3,
          },
          15,
        ], // যে field কে empty রাখতে চাই, সেই field এ empty string pass করতে হবে.
      ],

      theme: 'plain', //default value was striped
      styles: {
        lineColor: 'DCE0E4',
        lineWidth: 0.2,
      },
    });

    addPageNumber();

    document.save('name.pdf'); // name of pdf
  };

  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="bg-[#f2f3f8] p-8 rounded-md flex flex-col justify-center items-center">
        <button
          type="button"
          className="px-[37px] py-[12px] bg-gradient-to-b from-[#D13F96] to-[#833586] text-white rounded-[5px] text-lg font-bold leading-[21.48px]"
          onClick={convertPDFHandler}
        >
          Convert PDF
        </button>
      </div>
    </div>
  );
}

export default PdfConverter;
