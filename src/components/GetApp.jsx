import React from "react";

export default function GetApp() {
  return (
    <div className="px-32">
      <div className="flex bg-red-100 w-full p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="description">
          <h5 className="py-4 px-20 text-xl font-bold text-red-500 text-poppins">
            DOWNLOAD APP
          </h5>
          <div className="items-baseline text-gray-900 dark:text-white">
            <h1 className="px-20 text-5xl font-extrabold text-rubik">
              GET STARTED WITH
            </h1>
            <h1 className="px-20 text-5xl font-extrabold tracking-tight">
              FUDO TODAY!
            </h1>
          </div>

          <div className="px-20 py-7 text-xl">
            <p>
              Discover food wherever and whenever and get your food delivered
              quickly.
            </p>
          </div>
          <div className="button px-20">
          <button className="rounded-full bg-red-600 text-white py-3 px-7 ">
            Get The App
          </button>
          </div>
          
          <div className=""></div>
        </div>
        <div className="">
          <img src="images/getapp.png" alt="" />
        </div>
      </div>
    </div>
  );
}
