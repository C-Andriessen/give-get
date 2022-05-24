import Header from "./layout/Header";
import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgPuzzle from "./img/svg/Puzzle.svg";
import imgHands from "./img/Hands.png";

export default function Home() {
  return (
    <>
      <Header />

      {/* Welcome section */}
      <section className="grid grid-flow-row auto-rows-max text-center">
        <div className="mb-1">
          <img
            src={imgPuzzle}
            className="w-3/4 mx-auto"
            alt="Building a puzzle together"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-futura text-white font-bold text-[26.5px]">
            WELKOM BIJ
          </h1>
          <img src={imgLogoFull} className="ml-5 h-[55px]" alt="Logo" />
        </div>
        <div>
          <p className="font-roboto text-s">
            De plek voor studenten, door studenten.
          </p>
        </div>
      </section>

      {/* Trending section */}
      <section className="grid auto-rows-max text-center place-items-center">
        <h2 className="font-futura font-bold text-xl mt-[65px] mb-[30px] text-center">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>

      {/* Hero Section */}
      <section className="mt-[50px]">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
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
                  <span className="block text-white text-3xl font-futura font-bold">"THE MORE WE SHARE THE MORE WE HAVE"</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
