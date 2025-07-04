import React from "react";

export default function Footer() {
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
            Our job is to filling your tummy with <br /> delicious food manuk{" "}
            with fast and <br /> free delivery.
          </p>
          <div className="icon py-10">
            <img src="images/instagram.png" alt="" />
          </div>
        </div>
        <div className="gambar">
          
        </div>
      </div>
    </div>
  );
}