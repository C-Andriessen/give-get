import Header from "./layout/Header";
import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgHands from "./img/Hands.png";
import Pricing from "./components/Pricing";
import HomeHero from "./components/HomeHero";
import { ReactComponent as YourSvg } from "./img/svg/LogoN.svg";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      {/* Welcome section */}
      <section className="grid grid-flow-row text-center auto-rows-max">
        <div className="flex items-center justify-center place-content-center">
          <h1 className="flex flex-col items-center text-4xl font-extrabold text-white uppercase font-futura md:flex-row sm:text-6xl">
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
      <section className="grid mt-40 text-center auto-rows-max place-items-center">
        <h2 className="font-futura font-bold text-xl mb-[30px] text-center md:text-3xl xl:mt-0 2xl:mt-10">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>

      {/* Hero Section */}
      <section className="my-[50px]">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
          <div className="mx-auto">
            <div className="relative sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full mix-blend-soft-light"
                  src={imgHands}
                  alt="Reaching Hands"
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="tracking-tight text-center">
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
      <Footer />
    </>
  );
}
