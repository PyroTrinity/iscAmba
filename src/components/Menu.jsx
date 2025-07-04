export default function MenuItem() {
    // const menuItems = [
    //     {
    //       id: 1,
    //       name: "DORAEMON THE MOVIE: NOBITA’S SKY UTOPIA",
    //       price: 7.5,
    //       image: "/images/Doraemon.png",
    //     },
    //     {
    //       id: 2,
    //       name: "Margherita Pizza",
    //       price: 6.5,
    //       image: "/images/pizza-2.png",
    //     },
    //     {
    //       id: 3,
    //       name: "Pepperoni Pizza",
    //       price: 8.0,
    //       image: "/images/pizza-3.png",
    //     },
    //     {
    //       id: 4,
    //       name: "California Pizza",
    //       price: 7.5,
    //       image: "/images/pizza-1.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Margherita Pizza",
    //       price: 6.5,
    //       image: "/images/pizza-2.png",
    //     },
    //     {
    //       id: 6,
    //       name: "Pepperoni Pizza",
    //       price: 8.0,
    //       image: "/images/pizza-3.png",
    //     },
    //     // Tambahkan menu lainnya sesuai kebutuhan
    //   ];

  return (
    <div className="bg-black justify-center">
      <div className="bg-bg2 h-screen w-full bg-cover bg-center flex items-center justify-center">
        <div className="bg-gradient-to-r from-black h-screen w-full bg-cover bg-center flex items-center justify-center"></div>
      </div>
      <div className="card items-center bg-[#0D0D0D] mx-10">
        <div>
          <h1 className="py-6 ml-14 mt-7 mb-10 text-[#979797] font-medium text-2xl">Featured</h1>
        </div>
        <div className="justify-center flex gap-10 flex-wrap">
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Doraemon.png" alt="" />
                <h1 className="mt-3" >Doraemon The Movie: <br/> Nobita’s Sky Utopia</h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Avengers.png" alt="" />
                <h1 className="mt-3" >Avengers: Endgame</h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/How_to_Train_Your_Dragon_2.png" alt="" />
                <h1 className="mt-3" >How to Train Your Dragon 2</h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/A_Silent_Voice.png" alt="" />
                <h1 className="mt-3" >A Silent Voice The Movie</h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Breaking_Bad_Season_3.png" alt="" />
                <h1 className="mt-3" >Breaking Bad Season 3</h1>
              </a>
            </div>        
        </div>
        <div>
          <h1 className="py-6 ml-14 mt-7 mb-10 text-[#979797] font-medium text-2xl">Recommended</h1>
        </div>
        <div className="justify-center flex gap-10 flex-wrap">
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Trond.png" alt="" />
                <h1 className="mt-3" >TRON<br/></h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Mazerunner.png" alt="" />
                <h1 className="mt-3" >The Maze Runner (2014) <br/></h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Cars.png" alt="" />
                <h1 className="mt-3" >Cars 2 <br/></h1>
                </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Planes.png" alt="" />
                <h1 className="mt-3" >Planes <br/></h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Wreckit.png" alt="" />
                <h1 className="mt-3" >Wreck It Ralph: <br/> Ralph Breaks The Internet</h1>
              </a>
            </div>        
        </div>
        <div>
          <h1 className="py-6 ml-14 mt-7 mb-10 text-[#979797] font-medium text-2xl">Trending</h1>
        </div>
        <div className="justify-center flex gap-10 flex-wrap">
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Twd.png" alt="" />
                <h1 className="mt-3" >The Walking Dead <br/> </h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Cyberpunk.png" alt="" />
                <h1 className="mt-3" >Cyber Punk 2077: <br/>Edge Runner </h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Sekawan.png" alt="" />
                <h1 className="mt-3" >Sekawan Limo <br/> </h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Garfield.png" alt="" />
                <h1 className="mt-3" >The Garfield Movie <br/></h1>
              </a>
            </div>
            <div className="mb-8 menu-card rounded-2xl px-6 py-6 text-center text-[#979797]">
              <a type="button" href="">
                <img className="justify-items-center mx-auto" src="images/Theboys.png" alt="" />
                <h1 className="mt-3" >The Boys <br/></h1>
              </a>
            </div>        
        </div>
      </div>
    </div>
  )
}
