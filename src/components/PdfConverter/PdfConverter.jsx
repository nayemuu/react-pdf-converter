import { jsPDF } from 'jspdf';

function PdfConverter() {
  const convertPDFHandler = () => {
    // Default export is a4 paper, portrait, using millimeters for units
    const document = new jsPDF({
      orientation: 'p',
      unit: 'mm',
    });
    // p = portrait
    // mm = millimeters

    // pageWidth এর আমরা দুই ভাবে নিতে পারি
    const pageWidth = document.internal.pageSize.width;
    const pageWidth2 = document.internal.pageSize.getWidth();

    console.log('page width =', pageWidth);
    console.log('page width2 =', pageWidth2);

    const title = 'Hello world!';
    const titleWidth = document.getTextDimensions(title).w;
    console.log('title =', titleWidth);

    const x = (pageWidth - titleWidth) / 2;
    document.text(title, x, 14);

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
