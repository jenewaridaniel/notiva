import { useState, useRef } from "react";
import uploadIcon from "../../assets/upload.png";

const Upload = () => {
  const [summaryLevel, setSummaryLevel] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      handleFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(2) + " MB");

    // Simulate processing
    setIsProcessing(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setIsProcessing(false), 500);
      } else {
        setProgress(progress);
      }
    }, 300);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          PDF Summarizer
        </h1>
        <p className="text-base md:text-lg text-blue-700 max-w-2xl mx-auto">
          Upload your PDF to get a concise, AI-generated summary
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Upload Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
          <div className="p-6 md:p-8">
            <div
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 ${
                isDragging
                  ? "border-blue-500 bg-blue-50"
                  : "border-blue-200 bg-white hover:bg-blue-50"
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="application/pdf"
                className="hidden"
              />
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <img
                    src={uploadIcon}
                    className="w-20 h-20 md:w-24 md:h-24 opacity-90 transition-transform hover:scale-105"
                    alt="Upload PDF"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-lg md:text-xl">
                    +
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xl md:text-2xl font-semibold text-gray-800">
                    {fileName ? fileName : "Drag & drop your PDF"}
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    {fileSize || "or click to browse files"}
                  </p>
                </div>

                {/* Summary Level Selector */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {[30, 50, 70].map((level) => (
                    <button
                      key={level}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSummaryLevel(level);
                      }}
                      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border font-medium transition-all text-sm md:text-base ${
                        summaryLevel === level
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-blue-600 border-blue-300 hover:bg-blue-100"
                      }`}
                    >
                      {level}% Summary
                    </button>
                  ))}
                </div>

                <button
                  className="px-6 py-2.5 md:px-8 md:py-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg md:rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all shadow-md text-sm md:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerFileInput();
                  }}
                >
                  {fileName ? "Change PDF" : "Select PDF"}
                </button>
              </div>
            </div>

            {/* Processing State */}
            {isProcessing && (
              <div className="mt-6 text-center space-y-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 animate-pulse">
                  Analyzing document... {Math.min(100, Math.round(progress))}%
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 h-full flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-lg">
                📄
              </span>
              Summary Results
            </h2>

            {/* File Preview */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-200 min-h-[200px]">
              {fileName ? (
                <>
                  <div className="text-center">
                    <p className="font-medium text-gray-800 truncate max-w-full">
                      {fileName}
                    </p>
                    <p className="text-sm text-gray-500">{fileSize}</p>
                  </div>
                  {!isProcessing && progress === 100 && (
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Ready for {summaryLevel}% summary
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500 text-center">
                  Upload a PDF to generate summary
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                disabled={progress < 100}
                className={`px-4 py-2.5 md:px-6 md:py-3 font-medium rounded-lg md:rounded-xl transition-all shadow-md flex-1 flex items-center justify-center gap-2 text-sm md:text-base ${
                  progress < 100
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
                }`}
              >
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
              <button
                disabled={progress < 100}
                className={`px-4 py-2.5 md:px-6 md:py-3 font-medium rounded-lg md:rounded-xl transition-all shadow-md flex-1 flex items-center justify-center gap-2 text-sm md:text-base ${
                  progress < 100
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-blue-600 border border-blue-300 hover:bg-blue-50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-3xl mx-auto mt-10 md:mt-16 bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          How it works
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">1.</span>
            <span>Upload your PDF document (max 20MB)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">2.</span>
            <span>Select your desired summary length (30%, 50%, or 70%)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">3.</span>
            <span>
              Our AI will analyze the content and generate a concise summary
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">4.</span>
            <span>Download or preview your summary</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Upload;
