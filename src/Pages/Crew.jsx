import { useState } from "react";
import data from "../data.json";

function Crew() {
  const [activeLink, setActiveLink] = useState("Douglas Hurley");
  let [item, setItem] = useState(data.crew[0]);
  function filterItems(member) {
    setActiveLink(member);
    let newItem = data.crew.filter((item) => item.name === member);
    setItem(newItem[0]);
  }

  return (
    <main className=" bg-black text-white ">
        <title>Crew</title>
      <div className="absolute min-h-screen h-full inset-0">
        <img
          className="object-cover h-full w-full md:hidden"
          src="./images/crew/background-crew-mobile.jpg"
          alt="earth"
        />
        <img
          className="hidden md:block md:object-cover md:h-full md:w-full lg:hidden"
          src="./images/crew/background-crew-tablet.jpg"
          alt="earth"
        />
        <img
          className="hidden lg:block lg:object-cover lg:h-full lg:w-full"
          src="./images/crew/background-crew-desktop.jpg"
          alt="earth"
        />
      </div>
      <div className="relative lg:mt-10 lg:max-w-6xl lg:mx-auto lg:pt-1.5 overflow-hidden">
        <h1 className="ml-6 md:ml-0 text-white uppercase tracking-md leading-xs text-left md:pl-6 md:text-xl md:tracking-widest md:leading-6 lg:text-[28px] lg:tracking-xl lg:leading-md lg:pl-11 lg:mb-10">
          <strong className="opacity-25 pr-3">02 </strong>Meet your crew
        </h1>
        <div className=" text-white bg-cover bg-center">
          <div className="flex flex-col-reverse lg:flex-row justify-center max-w-6xl relative lg:py-5 lg:p-10 md:gap-32">
            <div className="left m-auto w-3/4 lg:w-3/2 text-white text-center lg:text-left ">
              <h3 className="uppercase text-[20px] lg:text-3xl text-[#FFFFFF]/50">
                {item?.role}
              </h3>
              <h1 className="planetName font-normal text-[35px] lg:text-6xl  uppercase lg:my-6 whitespace-nowrap">
                {item?.name}
              </h1>
              <p className=" text-lg -text--clr-pale-blue ">
                {item?.bio}
              </p>
              <div className="buttons flex justify-center lg:justify-start gap-x-5 mt-10 lg:mt-24">
                {[
                  "Douglas Hurley",
                  "Mark Shuttleworth",
                  "Victor Glover",
                  "Anousheh Ansari",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full cursor-pointer ${
                        activeLink === item
                          ? "inline-block bg-white"
                          : "inline-block bg-gray-600 hover:bg-white/70 transition-all "
                      }`}
                      onClick={() => {
                        filterItems(item);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="right lg:w-1/2 text-white  text-center lg:text-left ">
              <img
                className="h-[450px] mx-auto object-contain object-bottom lg:h-full lg:max-h-[80%] 
                lg:max-w-[500px] fixed bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:right-36"
                src={item?.images.png}
                alt="Douglas Hurley"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Crew;