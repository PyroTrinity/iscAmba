function Hero() {
  return (
    <hero>
      <div className="bg-bg h-screen w-full bg-cover bg-center flex items-center justify-center">
        <section>
          <div className="kotak items-center bg-black bg-opacity-70 py-10 px-10">
            <div className="mx-auto items-center">
              <h1 className="text-center text-2xl font-extralight whitespace-nowrap text-white dark:text">
                Selamat Datang Di Nomax!<br />
                <span className="text-xl text-poppins font-semibold">Nonton Film Sepuasnya!</span>
              </h1>
            </div>
            <div className="border border-[#22d3ee] mx-auto text-center mt-4">
              <a href="/Login"><button className="bg-[#569EBD] hover:bg-[#0e7490] items-center justify-center px-20 py-3 mx-auto text-base font-normal text-center text-white bg-utama hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Daftar Sekarang {'>'}
              </button></a>
            </div>
          </div>
        </section>
      </div>
    </hero>
  );
}

export default Hero;
