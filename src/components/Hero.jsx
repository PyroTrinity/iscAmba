import React, { useState, useEffect } from 'react';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <section className="relative bg-gray-800 h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#569EBD] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      <div className={`relative z-10 transition-all duration-800 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        <div className="kotak items-center bg-black bg-opacity-70 py-10 px-10 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300">
          <div className="mx-auto items-center">
            <h1 className={`text-center text-2xl font-extralight whitespace-nowrap text-white mb-2 transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}>
              Selamat Datang Di 
              <span className="text-[#569EBD] font-normal hover:text-cyan-400 transition-colors duration-300"> Nomax!</span>
            </h1>
            <p className={`text-center text-xl text-white font-semibold transition-all duration-1000 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}>
              Nonton Film Sepuasnya!
            </p>
          </div>
          
          <div className={`border border-[#22d3ee] mx-auto text-center mt-4 rounded transition-all duration-1000 delay-600 hover:border-[#569EBD] hover:shadow-lg hover:shadow-cyan-500/20 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}>
            <a href="/Login">
              <button className="bg-[#569EBD] hover:bg-[#0e7490] items-center justify-center px-20 py-3 mx-auto text-base font-normal text-center text-white transition-all duration-300 transform hover:scale-105 w-full group">
                <span className="mr-2">Daftar Sekarang</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">{'>'}</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;