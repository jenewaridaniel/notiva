import uploadIcon from "../../assets/upload.png";

const Upload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          PDF Summarizer
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Upload your PDF to get a quick and easy summary
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Upload Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="p-8">
            <div className="border-4 border-dashed border-blue-200 rounded-2xl p-8 text-center bg-white hover:bg-blue-50 transition-colors duration-300">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <img
                    src={uploadIcon}
                    className="w-28 h-28 opacity-90 transition-transform hover:scale-105"
                    alt="Upload PDF"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
                    +
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-gray-800">
                    Drag & drop your PDF
                  </p>
                  <p className="text-gray-500">or click to browse files</p>
                </div>

                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-md">
                  Select PDF
                </button>
              </div>
            </div>

            {/* Processing State (Visual Only) */}
            {/* <div className="mt-8 text-center space-y-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-3/4 animate-pulse"></div>
              </div>
              <p className="text-gray-600">Processing document...</p>
            </div> */}
          </div>
        </div>

        {/* Results Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-lg">
                📄
              </span>
              Summary Results
            </h2>

            {/* File Preview Placeholder */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              {/* <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div> */}
              {/* <div>
                <p className="font-medium text-gray-800">document.pdf</p>
                <p className="text-sm text-gray-500">1.2 MB</p>
              </div> */}
            </div>

            {/* Summary Output */}
            <div className="flex-1 mb-6 p-6 bg-gray-50 border border-gray-200 rounded-xl overflow-y-auto">
              <div className="prose prose-blue max-w-none">
                <h3 className="text-blue-700">Summary</h3>
                <p className="text-gray-700">
                  This is where the summary will appear. It will be neatly
                  formatted with clear paragraphs and important points.
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>Key insight from the document</li>
                  <li>Notable data or topic covered</li>
                  <li>Summary of conclusions</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-600 transition-all shadow-md flex-1 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Summary
              </button>
              <button className="px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors flex-1 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                </svg>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

        </div>
  );
};

export default Upload;
