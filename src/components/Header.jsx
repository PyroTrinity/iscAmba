import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full top-0 z-50">
      <nav className={`backdrop-blur-md bg-black/90 dark:bg-gray-900/90 w-full border-b border-gray-200/20 dark:border-gray-600/20 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-cyan-500/10' : ''
      }`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo dengan animasi */}
          <div className="group cursor-pointer">
            <div className="relative flex flex-col items-center text-center">
              <span className="block self-center text-2xl font-extrabold whitespace-nowrap text-[#569EBD] dark:text-[#569EBD] transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-400">
                <span className="relative inline-block">
                  AMBA
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#569EBD] to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                </span>
              </span>
              <p
                className="text-xs text-gray-300 dark:text-gray-400 font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-all duration-300
                  bg-gradient-to-r from-[#569EBD] via-cyan-400 to-[#569EBD]
                  bg-[length:200%_auto] bg-clip-text text-transparent
                  animate-gradient-x
                  group-hover:animate-gradient-x-fast
                  group-hover:scale-105
                  group-hover:translate-y-1
                  mt-1
                "
              >
                NONTONMAX
              </p>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-[#569EBD] to-cyan-400 blur-xl"></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/">
              <button 
                type="button" 
                className="relative overflow-hidden group text-white bg-gradient-to-r from-[#569EBD] to-cyan-600 hover:from-cyan-600 hover:to-[#0e7490] focus:ring-4 focus:outline-none focus:ring-cyan-300/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 dark:focus:ring-cyan-800/50"
              >
                <span className="relative z-10">Keluar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </a>
            
            {/* Mobile menu button dengan animasi */}
            <button 
              onClick={toggleMenu}
              type="button" 
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-gray-200/20 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:focus:ring-gray-600/50 transition-all duration-300 transform hover:scale-110 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
              aria-controls="navbar-sticky" 
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 17 14"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M1 1l15 12M1 13L16 1" : "M1 1h15M1 7h15M1 13h15"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100/20 rounded-lg bg-gray-50/10 backdrop-blur-sm md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800/10 md:dark:bg-transparent dark:border-gray-700/20">
              {/* Menu items bisa ditambahkan di sini */}
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/10 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-cyan-400 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/10 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-cyan-400 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300"
                >
                  Film
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100/10 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-cyan-400 dark:hover:bg-gray-700/50 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300"
                >
                  Series
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Spacer untuk fixed header */}
      <div className="h-16"></div>
    </div>
  );
}

export default Header;

<style jsx>{`
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  .animate-gradient-x {
    animation: gradient-x 3s ease-in-out infinite alternate;
  }
  .group-hover\\:animate-gradient-x-fast:hover {
    animation-duration: 1s !important;
  }
`}</style>