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
    </div>
  )
}
