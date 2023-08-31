import  { useState } from "react";
import data from "../data.json";
import Techmobile from '/images/technology/background-technology-mobile.jpg'
import Techtablet from '/images/technology/background-technology-tablet.jpg'
import Techdesktop from '/images/technology/background-technology-desktop.jpg'

function Technology() {
  const [activeLink, setActiveLink] = useState(1);
  let [item, setItem] = useState(data.technology[0]);
  function filterItems(member) {
    setActiveLink(member);
    setItem(data.technology[member - 1]);
  }
  return (
    <main className=" bg-black text-white ">
        <title>Technology</title>
      <div className="absolute min-h-screen h-full inset-0">
        <img
          className="object-cover h-full w-full md:hidden"
          src={Techmobile}
        />
        <img
          className="hidden md:block md:object-cover md:h-full md:w-full xl:hidden"
          src={Techtablet}
        />
        <img
          className="hidden xl:block xl:object-cover xl:h-full xl:w-full"
          src={Techdesktop}
        />
      </div>
      <div className="relative xl:mt-10 xl:max-w-6xl xl:mx-auto xl:pt-1.5 overflow-hidden">
        <h1 className="xl:mb-20 mb-10 ml-6 md:ml-0 text-white uppercase tracking-md leading-xs text-left md:pl-6 md:text-xl md:tracking-widest md:leading-6 xl:text-[28px] xl:tracking-xl xl:leading-md ">
          <strong className="opacity-25 pr-3 ">03 </strong>SPACE LAUNCH
        </h1>
        <div className=" text-white bg-cover bg-center">
          <div className="flex flex-col-reverse xl:flex-row justify-center max-w-6xl relative xl:py-5 xl:gap-32">
            <div className="left flex flex-col xl:flex-row m-auto w-3/4 xl:w-3/2 text-white text-center xl:text-left xl:gap-x-14">
              <nav className="py-0.5 mb-6 md:pt-0 md:mb-11 xl:py-0 xl:mb-0 xl:pr-1">
                <ul className="flex justify-center gap-4 xl:flex-col xl:gap-8">
                  {[1, 2, 3].map((item) => {
                    return (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => filterItems(item)}
                          className={`block rounded-full w-10 h-10 border border-white/25 text-${
                            activeLink === item ? "black" : "white"
                          } font-bold font-heading md:text-2xl md:w-16 md:h-16 xl:w-20 xl:h-20 xl:text-32 hover:border-white/100 ease-in-out duration-300 bg-${
                            activeLink === item ? "white" : "transparent"
                          } text-dark`}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="text">
                <h3 className="uppercase text-[12px] xl:text-[16px] text-[#FFFFFF]/50">
                  THE TERMINOLOGY…
                </h3>
                <h1 className="font-normal text-[25px] xl:text-6xl  uppercase xl:my-6 whitespace-nowrap">
                  {item?.name}
                </h1>
                <p className=" text-[15px] lg:text-xl -text--clr-pale-blue leading-loose">
                  {item?.description}
                </p>
              </div>
            </div>
            <div className="left w-full xl:w-1/2 text-white  text-center xl:text-left md:mb-0 mb-3">
              <img
                src={item?.images.portrait}
                alt={item?.name}
                className="w-full h-[300px] mx-auto md:w-80 md:h-80 md:p-2.5 xl:w-[445px] xl:h-[445px] xl:p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;