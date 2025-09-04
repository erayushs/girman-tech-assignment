const Navbar = () => {
  return (
    <div className="shadow-md lg:h-[110px] flex justify-center items-center">
      <div className="h-[60px] max-w-[1000px] w-full  flex justify-between items-center">
        <div>
          <div className="flex">
            <img
              src="/small-girman-logo.svg"
              alt="girman logo"
              className="w-[62.26px] h-[62.26px]"
            />
            <div className="flex flex-col ml-3 justify-center items-center font-heading">
              <h1 className="text-[37.23px] font-bold leading-10">Girman</h1>
              <span className="text-[11.24px] font-semibold leading-6 tracking-[4.6px] ml-1">
                TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>

        <nav className="">
          <ul className="flex space-x-[47px] text-[24px] font-light">
            <li>
              <a
                href="#"
                className="font-bold underline text-[#3063E6] underline-offset-4"
              >
                SEARCH
              </a>
            </li>
            <li>
              <a href="#">WEBSITE</a>
            </li>
            <li>
              <a href="#">LINKEDIN</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
