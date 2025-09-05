import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md lg:h-[110px] flex justify-center items-center px-[40px]">
      <div className="h-[60px] max-w-[1000px] w-full  flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <img
              src="/small-girman-logo.svg"
              alt="girman logo"
              className="lg:w-[62.26px] lg:h-[62.26px] w-[30px] h-[30px]"
            />
            <div className="flex flex-col lg:ml-3 ml-[6px] justify-center items-center font-heading">
              <h3 className="lg:text-[37.23px] text-[17.94px] font-bold lg:leading-10">
                Girman
              </h3>
              <span className="lg:text-[11.24px] text-[5.42px] font-semibold lg:leading-6 lg:tracking-[4.6px] tracking-[2px] ml-1">
                TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>

        <nav className="lg:flex hidden">
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
              <a
                href="https://www.girmantech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WEBSITE
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/girmantech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="mailto:contact@girmantech.com">CONTACT</a>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <nav className="lg:hidden relative">
          <img
            src="/menu.svg"
            alt="menu icon"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 mt-1 w-[90px] h-[166px] bg-white rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-2 text-[12px] z-50">
              <ul className="flex flex-col space-y-[20px] items-center">
                <li className="mt-[8px]">
                  <a
                    href="#"
                    className="font-bold underline text-[#3063E6] underline-offset-4"
                  >
                    SEARCH
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.girmantech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WEBSITE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/girmantech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@girmantech.com">CONTACT</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
