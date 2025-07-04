import React, { useState, useEffect } from 'react';

export default function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  function Klik() {
    // Navigate("/Menu"); - uncomment when using with react-router
    console.log("Navigate to Menu");
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="relative bg-gray-800 h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden">
      
      {/* Background Animation - sama seperti Hero */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#569EBD] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Form Container */}
      <div className={`relative z-10 mt-12 transition-all duration-800 ${
        isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
      }`}>
        <div className="max-w-sm mx-auto">
          <div className="card rounded-lg bg-black bg-opacity-70 backdrop-blur-sm border border-gray-600/30 shadow-2xl hover:bg-opacity-80 transition-all duration-300">
            <div className="mb-5 px-11 py-10">
              
              {/* Title */}
              <h1 className={`text-center text-white text-2xl mb-8 font-semibold transition-all duration-1000 delay-200 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <span className="text-[#569EBD]">Registrasi</span> NOMAX
              </h1>

              {/* Email Field */}
              <div className={`mb-5 transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#569EBD] focus:border-[#569EBD] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#569EBD] dark:focus:border-[#569EBD] transition-all duration-300 hover:border-[#569EBD]/50"
                  placeholder="nama@example.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div className={`mb-5 transition-all duration-1000 delay-400 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#569EBD] focus:border-[#569EBD] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#569EBD] dark:focus:border-[#569EBD] transition-all duration-300 hover:border-[#569EBD]/50"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className={`mb-5 transition-all duration-1000 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#569EBD] focus:border-[#569EBD] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#569EBD] dark:focus:border-[#569EBD] transition-all duration-300 hover:border-[#569EBD]/50"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className={`mb-5 transition-all duration-1000 delay-600 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#569EBD] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#569EBD] dark:ring-offset-gray-800 transition-all duration-300 hover:border-[#569EBD]"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-white"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-[#569EBD] hover:text-cyan-400 hover:underline transition-colors duration-300"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className={`transition-all duration-1000 delay-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <a href="/Menu">
                  <button
                    onClick={Klik}
                    type="submit"
                    className="w-full text-white bg-[#569EBD] hover:bg-[#0e7490] focus:ring-4 focus:outline-none focus:ring-[#569EBD]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#569EBD]/25 group"
                  >
                    <span className="flex items-center justify-center">
                      Register new account
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </a>
              </div>

              {/* Login Link */}
              <div className={`mt-4 text-center transition-all duration-1000 delay-800 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}>
                <p className="text-sm text-gray-400">
                  Sudah punya akun?{" "}
                  <a
                    href="#"
                    className="text-[#569EBD] hover:text-cyan-400 hover:underline transition-colors duration-300"
                  >
                    Login di sini
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}