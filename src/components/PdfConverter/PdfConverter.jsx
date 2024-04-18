import { jsPDF } from 'jspdf';
function PdfConverter() {
  const convertPDFHandler = () => {
    // Default export is a4 paper, portrait, using millimeters for units
    const document = new jsPDF(); // variable এর নাম যে document ই দিতে হবে এর কোনো বাধ্যবাধকতা নাই. তোমার ইচ্ছামত নাম দিতে পারো
    console.log('document = ', document);

    document.text('Hello world!', 10, 10);
    // "Hello world!" হচ্ছে পিডিএফ এর জন্য একটি value, 10 দ্বারা বোঝানো হচ্ছে "Hello world!" text এর অবস্থান হবে  x -axis (x-coordinate) থেকে 10 millimeters দূরে,
    // পরের 10 দ্বারা বোঝানো হচ্ছে y-axis (y-coordinate) থেকে 10 millimeters দূরে "Hello world!" text এর অবস্থান হবে

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
