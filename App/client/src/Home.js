import { CheckIcon as CheckIconSolid } from "@heroicons/react/solid";

import Header from "./layout/Header";
import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgPuzzle from "./img/svg/Puzzle.svg";
import imgHands from "./img/Hands.png";
import Pricing from "./components/Pricing";

export default function Home() {
  const tiers = [
    {
      name: "BASIC",
      href: "#",
      color: "bg-baby-barf-red",
      priceMonthly: "GRATIS",
      description: "Basis plan met gelimiteerde functionaliteiten.",
      features: ["1 Muur", "Maximaal 16 oproepen"],
    },
    {
      name: "LITE",
      href: "#",
      color: "bg-baby-barf-orange",
      priceMonthly: 4.99,
      description: "Geef je bedrijf een betere ervaring met ons Lite plan.",
      features: ["1 Muur", "Onbeperkt oproepen", "Toevoegen van een foto"],
    },
    {
      name: "PREMIUM",
      href: "#",
      color: "bg-baby-barf-yellow",
      priceMonthly: 8.99,
      description: "Geef je bedrijf de ultime ervaring mer ons PREMIUM plan.",
      features: [
        "Alles van LITE tier",
        "+ 2 extra muren (3 in totaal)",
        "Customizable muren/homepagina",
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* Welcome section */}
      <section className="grid grid-flow-row auto-rows-max text-center">
        <div className="mb-1">
          <img
            src={imgPuzzle}
            className="w-3/4 sm:w-4/5 mx-auto"
            alt="Building a puzzle together"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-futura text-white font-bold text-[26.5px] sm:text-[30px] lg:text-5xl">
            WELKOM BIJ
          </h1>
          <img
            src={imgLogoFull}
            className="ml-5 h-[55px] lg:h-[90px]"
            alt="Logo"
          />
        </div>
        <div>
          <p className="font-roboto text-s sm:text-lg lg:text-xl">
            De plek voor studenten, door studenten.
          </p>
        </div>
      </section>

      {/* Trending section */}
      <section className="grid auto-rows-max text-center place-items-center">
        <h2 className="font-futura font-bold text-xl mt-[65px] mb-[30px] text-center md:text-3xl">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>

      {/* Hero Section */}
      <section className="my-[50px]">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto">
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
