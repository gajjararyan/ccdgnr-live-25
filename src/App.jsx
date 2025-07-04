import "./App.css";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    let elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }

    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }

    setIsFullscreen(false);
  };

  return (
    <>
      <main className="h-screen w-full bg-white overflow-hidden text-center">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-1/2 p-1 rounded-2xl overflow-hidden bg-transparent relative flex flex-col items-center">
            <div className="relative z-10 bg-white/90 rounded-xl flex flex-col items-center w-full h-full py-6 ml-4">
              <div className="w-[500px] h-[900px] flex items-center justify-center relative">
                {/* Border image as background */}
                <img
                  src="/border-design.svg"
                  alt="Border"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
                {/* Content inside border */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4">
                  <img
                    src="/1ccd.svg"
                    alt="1cdd"
                    className="w-2/3 h-auto object-contain"
                  />
                  <img
                    src="/2ccdnew.svg"
                    alt="2ccd"
                    className="w-4/5 mt-20 h-auto"
                  />
                </div>
              </div>
              {/* <div className="hidden md:block absolute bottom-0 left-0 flex flex-col gap-2 p-4">
                {isFullscreen ? (
                  <button onClick={closeFullscreen}>
                    <AiOutlineFullscreenExit className="h-8 w-8 text-ccdgred" />
                  </button>
                ) : (
                  <button onClick={openFullscreen}>
                    <AiOutlineFullscreen className="h-8 w-8 text-ccdgblue" />
                  </button>
                )}
              </div> */}
            </div>
          </div>
          <div className="w-full h-full">
            <iframe
              allowFullScreen
              id="wallsio-iframe"
              src="https://my.walls.io/ccdgnr2025?nobackground=1&show_header=0&show_post_info=1&accessibility=0"
              style={{ border: "0", height: "100%", width: "100%", overflow: "hidden" }}
              loading="lazy"
              title="CCDGN 2025 Social Wall"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
