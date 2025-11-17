import navLogo from "../../public/images/milky-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 mt-5 w-full bg-transparent px-7">
      <div className="flex justify-between">
        <a href="#" className="w-32">
          <img src={navLogo} alt="logo" />
        </a>
        <button className="flex-center hover:bg-light-brown 700 cursor-pointer rounded-full bg-white px-8 font-sans text-[20px] font-bold uppercase transition-colors ease-in-out max-sm:px-5">
          Other Products
        </button>
      </div>
    </header>
  );
};
