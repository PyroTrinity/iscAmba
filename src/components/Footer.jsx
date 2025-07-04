import React, { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div id="footer" className="relative py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#569EBD] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 backdrop-blur-sm bg-black/30 rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="flex items-center mb-6">
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#569EBD] to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <div className="text-center">
                    <p className="text-white text-xs font-bold tracking-wider">NO</p>
                    <p className="text-white text-xs font-bold tracking-wider">MAX</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h2 className="text-white font-bold text-3xl ml-4 bg-gradient-to-r from-[#569EBD] to-cyan-400 bg-clip-text text-transparent">
                NOMAX
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Platform streaming terbaik untuk menonton film dan series favorit Anda. 
              <br />
              Nikmati pengalaman menonton yang tak terlupakan dengan kualitas HD.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-500' },
                { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-600' },
                { name: 'Twitter', icon: '🐦', color: 'from-sky-400 to-sky-500' },
                { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' }
              ].map((social, index) => (
                <div
                  key={social.name}
                  className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-lg group`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg group-hover:animate-bounce">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-white font-bold text-xl mb-6 relative">
              Menu Cepat
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#569EBD] to-cyan-400"></div>
            </h3>
            <ul className="space-y-3">
              {['Beranda', 'Film Terbaru', 'Series', 'Genre', 'Favorit', 'Riwayat'].map((item, index) => (
                <li key={item} className="group">
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group-hover:translate-x-2">
                    <span className="w-1 h-1 bg-[#569EBD] rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-white font-bold text-xl mb-6 relative">
              Dukungan
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#569EBD] to-cyan-400"></div>
            </h3>
            <ul className="space-y-3">
              {['Bantuan', 'Kontak', 'FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((item, index) => (
                <li key={item} className="group">
                  <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center group-hover:translate-x-2">
                    <span className="w-1 h-1 bg-[#569EBD] rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mt-12 pt-8 border-t border-gray-700/50 transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-bold text-lg mb-2">Dapatkan Update Terbaru</h4>
              <p className="text-gray-300">Berlangganan newsletter untuk mendapatkan info film dan series terbaru</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#569EBD] focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#569EBD] to-cyan-500 text-white font-medium rounded-r-lg hover:from-cyan-500 hover:to-[#569EBD] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t border-gray-700/50 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400 text-sm">
            © 2025 NOMAX - NONTONMAX. All rights reserved. Made with ❤️ for movie lovers.
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#569EBD] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}