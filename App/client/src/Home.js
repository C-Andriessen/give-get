import Header from "./layout/Header";
import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgHands from "./img/Hands.png";
import Pricing from "./components/Pricing";
import HomeHero from "./components/HomeHero";
import { ReactComponent as YourSvg } from "./img/svg/LogoN.svg";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      {/* Welcome section */}
      <section className="grid grid-flow-row auto-rows-max text-center">
        <div className="flex items-center justify-center place-content-center">
          <h1 className="font-futura text-white font-extrabold text-4xl uppercase flex items-center flex-col md:flex-row sm:text-6xl">
            WELKOM BIJ{" "}
            <span className="flex items-center italic">
              {" "}
              <span className="mx-2">give</span> <YourSvg />
              get
            </span>
          </h1>
        </div>
        <div>
          <p className="font-roboto text-s sm:text-lg lg:text-xl">
            De plek voor studenten, door studenten.
          </p>
        </div>
      </section>

      {/* Trending section */}
      <section className="grid auto-rows-max text-center place-items-center mt-40">
        <h2 className="font-futura font-bold text-xl mb-[30px] text-center md:text-3xl xl:mt-0 2xl:mt-10">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>

      {/* Hero Section */}
      <section className="my-[50px]">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto">
            <div className="relative sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover mix-blend-soft-light"
                  src={imgHands}
                  alt="Reaching Hands"
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center tracking-tight">
                  <span className="block text-white text-3xl sm:text-5xl lg:text-[70px] font-futura font-bold">
                    "THE MORE WE SHARE THE MORE WE HAVE"
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />

      {/* Footer */}
      <footer className="h-[150px] bg-black mt-10"></footer>
    </>
  );
}
