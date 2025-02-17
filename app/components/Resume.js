export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <h1 className="text-6xl font-bold mb-6 text-[#c8cefa]">My Resume</h1>

      {/* PDF Viewer Fullscreen */}
      <div className="w-full max-w-5xl h-[85vh] border border-[#c8cefa] rounded-lg overflow-hidden">
        <iframe
          src="/Resume_SRK.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href="/Resume_SRK.pdf"
        download="ShreyasRK_Resume.pdf"
        className="mt-6 px-6 py-3 border border-[#c8cefa] text-[#c8cefa] rounded-md hover:bg-[#c8cefa] hover:text-black transition duration-200"
      >
        Download Resume
      </a>
    </div>
  );
}
