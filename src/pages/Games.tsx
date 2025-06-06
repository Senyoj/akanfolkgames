
const GamesLandingPage = () => {
  const handleCardClick = (gameType) => {
    const path =
      gameType === "Indigenous" ? "/games/indigenous" : "/games/contemporary";
    window.location.href = path;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/Ofu5GQIC0pA?autoplay=1&mute=1&loop=1&playlist=Ofu5GQIC0pA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&end=0"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Indigenous Games Card */}
          <div
            onClick={() => handleCardClick("Indigenous")}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Card Background Image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 h-80 flex flex-col justify-center items-center text-center">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h2 className="text-4xl font-bold text-white mb-4 font-serif">
                  Indigenous Games
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Description will go here
                </p>
                <div className="flex items-center justify-center text-amber-300 font-semibold">
                  <span>Explore Heritage</span>
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-all duration-300"></div>
          </div>

          {/* Contemporary Games Card */}
          <div
            onClick={() => handleCardClick("Contemporary")}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Card Background Image */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 h-80 flex flex-col justify-center items-center text-center">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h2 className="text-4xl font-bold text-white mb-4 font-sans">
                  Contemporary Games
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Description will go here
                </p>
                <div className="flex items-center justify-center text-cyan-300 font-semibold">
                  <span>Enter the Future</span>
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-2xl transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-purple-500 bg-opacity-20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-400 bg-opacity-15 rounded-full blur-lg animate-pulse delay-500"></div>
    </div>
  );
};

export default GamesLandingPage;
