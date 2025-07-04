function ServiceItem({ imageSrc, title, description }) {
  return (
    <div className="item px-10 w-72">
      <img src={imageSrc} />
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function servis() {
  return (
    <div className="bg-black">

      <div className="justify-between flex px-20 py-10">
      <span className="text-center text-2xl font-extrabold whitespace-nowrap text-[#569EBD] dark:text">NOMAX <br/>
      <p className="text-xs">NONTONMAX</p></span> 
        <div className="flex">
        <h1 className="text-[#9CA3AF] px-4 text-2xl text-poppins font-semibold">
            Tentang <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Tentang Kami</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Berita Terkini</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Menu</span>
            </a>
          </h1>
          <h1 className="text-[#9CA3AF] px-4 text-2xl text-poppins font-semibold">
            Kategori <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Action</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Adventure</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Comedy</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Drama</span>
            </a>
          </h1>
          <h1 className="text-[#9CA3AF] px-4 text-2xl text-poppins font-semibold">
            Sosmed <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Instagram</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Facebook</span>
            </a>
            <br />
            <a href="">
            <span className="text-[#9CA3AF] font-extralight text-poppins text-xs ">Telegram</span>
            </a>
          </h1>
      </div>
      </div>
      </div>
  )
}
