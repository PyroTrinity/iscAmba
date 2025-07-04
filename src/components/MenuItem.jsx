
export default function MenuItem() {
    const menuItems = [
        {
          id: 1,
          name: "California Pizza",
          price: 7.5,
          image: "/images/pizza-1.png",
        },
        {
          id: 2,
          name: "Margherita Pizza",
          price: 6.5,
          image: "/images/pizza-2.png",
        },
        {
          id: 3,
          name: "Pepperoni Pizza",
          price: 8.0,
          image: "/images/pizza-3.png",
        },
        {
          id: 4,
          name: "California Pizza",
          price: 7.5,
          image: "/images/pizza-1.png",
        },
        {
          id: 5,
          name: "Margherita Pizza",
          price: 6.5,
          image: "/images/pizza-2.png",
        },
        {
          id: 6,
          name: "Pepperoni Pizza",
          price: 8.0,
          image: "/images/pizza-3.png",
        },
        // Tambahkan menu lainnya sesuai kebutuhan
      ];

  return (
    <div className="flex justify-center">
        <div className="flex gap-10 flex-wrap">
            {menuItems.map((item) => (
                <div key={item.id} className="menu-card border border-grey-400 rounded-2xl px-6 py-6 text-center">
                <img className="w-50" src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p>${item.price}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
