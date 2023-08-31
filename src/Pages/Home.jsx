import { Link } from "react-router-dom";
import Mobilebg from '/images/home/background-home-mobile.jpg'
import Tabletbg from '/images/home/background-home-tablet.jpg'
import Desktopbg from '/images/home/background-home-desktop.jpg'

function Home() {
  return (
    <main className="h-[75vh] bg-black text-white flex justify-center items-center bg-cover bg-center">
        <title>Home</title>
      <div className="absolute min-h-screen h-full inset-0">
        <img
          className="object-cover h-full w-full md:hidden"
          src={Mobilebg}
          alt="earth"
        />
        <img
          className="hidden md:block md:object-cover md:h-full md:w-full lg:hidden"
          src={Tabletbg}
          alt="earth"
        />
        <img
          className="hidden lg:block lg:object-cover lg:h-full lg:w-full"
          src={Desktopbg}
          alt="earth"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end max-w-6xl relative p-6 md:p-10">
        <div className="left w-full md:w-1/2 text-white  text-center lg:text-left mb-20 lg:mb-0">
          <h3 className="font-normal text-xl lg:text-3xl  tracking-widest mt-12 ">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="font-normal text-[120px] md:text-[150px] leading-[170px] md:leading-[200px]">
            SPACE
          </h1>
          <p className="lg:text-lg  -text--clr-pale-blue">
            Let’s face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right lg:w-1/2 flex items-end justify-end">
          <Link
            to="/destination"
            className="text-[32px] right w-52 h-52 md:w-60 lg:w-72 md:h-60 lg:h-72 flex justify-center
         items-center bg-white text-black rounded-full text-center uppercase hover:ring-[5rem] ring-white ring-opacity-10 transition-all"
          >
            Explore
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;