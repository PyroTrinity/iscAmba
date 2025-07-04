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
    <div className="py-40 px-32">
      <div className="px-16 py-10 bg-white-100 rounded-2xl flex items-center">
        <div className="description">
          <div class="w-12 h-12 bg-utama dark:bg-utama py-2">
            <p class="bg-red-600 text-xs tracking-widest font-semibold text-putih text-center items-center">
              F O
            </p>
            <p class="bg-red-600 text-xs tracking-widest font-semibold text-putih text-center items-center">
              D O
            </p>
          </div>  
          <h2 className="text-black-600 font-bold text-xl">NoMax</h2>
          <p className="py-4 text-black text-poppins">
            Our job is to filling your tummy with <br /> delicious food and{" "}
            with fast and <br /> free delivery.
          </p>
          <div className="icon py-10">
            <img src="images/instagram.png" alt="" />
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-6 border-t border-gray-700/50 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400 text-sm">
            © 2025 NOMAX - NONTONMAX. All rights reserved. Made By Akhtar & Syauqi
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