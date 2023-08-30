import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function Destination() {
  const [activeLink, setActiveLink] = useState("Moon");
  const [item, setItem] = useState(data.destinations[0]);

  function filterItems(planet) {
    setActiveLink(planet);
    const newItems = data.destinations.filter((item) => item.name === planet);
    setItem(newItems[0]);
  }

  return (
    <main className="bg-black text-white">
      <div>
        <title>Destination</title>
      </div>
      <div className="absolute min-h-screen h-full inset-0">
        <img
          className="object-cover h-full w-full md:hidden"
          src="./images/destination/background-destination-mobile.jpg"
          alt="earth"
        />
        <img
          className="hidden md:block md:object-cover md:h-full md:w-full lg:hidden"
          src="./images/destination/background-destination-tablet.jpg"
          alt="earth"
        />
        <img
          className="hidden lg:block lg:object-cover lg:h-full lg:w-full"
          src="./images/destination/background-destination-desktop.jpg"
          alt="earth"
        />
      </div>
      <div className="relative lg:mt-10 lg:max-w-6xl lg:mx-auto lg:pt-1.5">
        <h1 className="ml-6 md:ml-0 text-white uppercase tracking-md leading-xs text-left md:pl-6 md:text-xl md:tracking-widest md:leading-6 lg:text-[28px] lg:tracking-xl lg:leading-md lg:pl-11 lg:mb-10">
          <strong className="opacity-25 pr-3">01 </strong>Pick your destination
        </h1>
        <div className="text-white bg-cover bg-center">
          <div className="flex flex-col lg:flex-row justify-center max-w-6xl relative lg:py-5 lg:p-10 md:gap-32">
            <div className="left w-full lg:w-1/2 text-white text-center lg:text-left md:mb-0 mb-3">
              <img
                src={`./images/destination/image-${item.name.toLowerCase()}.png`}
                className="w-[250px] h-[250px] mx-auto md:w-80 md:h-80 md:p-2.5 lg:w-[445px] lg:h-[445px] lg:p-0"
                alt=""
              />
            </div>
            <div className="right m-auto w-3/4 lg:w-1/2 text-white text-center lg:text-left g:mb-0 md:-mt-28 lg:-mt-10">
              <ul className="links mb-3 lg:mb-0 flex items-center justify-center lg:justify-start gap-x-14 text-white uppercase text-[16px] lg:text-xl">
                {data.destinations.map((planet, index) => {
                  return (
                    <li
                      className="group transition duration-300"
                      key={index}
                      onClick={() => {
                        filterItems(planet.name);
                      }}
                    >
                      <Link
                        to={"#" + planet.name}
                        className={`${
                          activeLink === planet.name
                            ? "inline-block py-2 border-white hover:border-b-[4px] hover:border-opacity-50 border-b-[4px] font-bold"
                            : "inline-block py-2 border-gray-400 hover:border-b-[1px]"
                        }`}
                      >
                        {planet.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <h1 className="planetName font-normal text-[80px] lg:text-[100px] leading-[100px] lg:leading-[200px] uppercase">
                {item?.name}
              </h1>
              <p className="lg:text-lg  -text--clr-pale-blue md:mb-12">
                {item?.description}
              </p>
              <div className="border-t border-gray mt-8 pt-8 flex flex-col gap-8 pb-0.5 md:mt-12 md:pt-7 md:flex-row md:gap-24 md:justify-center lg:justify-start lg:gap-20">
                <div className="grid gap-3">
                  <span className="text-sm -text--clr-pale-blue  uppercase tracking-widest leading-xxs">
                    Avg. distance
                  </span>
                  <span className="text-white uppercase text-[28px] leading-8">
                    {item?.distance}
                  </span>
                </div>
                <div className="grid gap-3 lg:-ml-px">
                  <span className="text-sm -text--clr-pale-blue  uppercase tracking-widest">
                    Est. travel time
                  </span>
                  <span className="text-white uppercase text-[28px] leading-8">
                    {item?.travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;