

import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgPuzzle from "./img/svg/Puzzle.svg";

export default function Home() {
  return (
    <>
      <header className="h-[55px] flex items-center justify-between mx-5">
        <img src={imgLogoFull} alt="Logo" className="h-[40px]" />
        <MobileMenu />
      </header>

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
        <h2 className="font-futura font-bold text-xl mt-[80px] mb-[30px] text-center">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>
    </>
  );
}
