import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <Image
        src="/search.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <h2 className="font-extrabold text-2xl leading-7">METAVERSUS</h2>
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  );
};

export default Navbar;
