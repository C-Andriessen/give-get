import { CheckIcon as CheckIconSolid } from "@heroicons/react/solid";

import Header from "./layout/Header";
import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgPuzzle from "./img/svg/Puzzle.svg";
import imgHands from "./img/Hands.png";

export default function Home() {
  const tiers = [
    {
      name: "BASIC",
      href: "#",
      color: "bg-baby-barf-red",
      priceMonthly: "GRATIS",
      description: "Basis plan met gelimiteerde functionaliteiten.",
      features: [
        "1 Muur",
        "Maximaal 16 oproepen",
      ],
    },
    {
      name: "LITE",
      href: "#",
      color: "bg-baby-barf-orange",
      priceMonthly: 4.99,
      description: "Geef je bedrijf een betere ervaring met ons Lite plan.",
      features: [
        "1 Muur",
        "Onbeperkt oproepen",
        "Toevoegen van een foto",
      ],
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
          <img src={imgLogoFull} className="ml-5 h-[55px] lg:h-[90px]" alt="Logo" />
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

      {/* Pricing Section */}
      <section className="grid grid-flow-row auto-rows-max text-center place-items-center">
        <h2 className="font-roboto font-bold text-[20px] md:text-2xl lg:text-3xl">
          OOK EEN MUUR VOOR UW BEDRIJF?
        </h2>
        <h3 className="font-roboto font-bold text-baby-barf-pink text-lg md:text-xl lg:text-2xl">
          KIES EEN PLAN DAT ER BIJ PAST
        </h3>

        <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="shadow-sm divide-y divide-gray-200"
              >
                <div className={"p-6 text-white rounded-t-xl " + tier.color}>
                  <h2 className="text-lg leading-6 font-bold font-roboto md:text-xl lg:text-2xl">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500 md:text-base lg:text-lg">
                    {tier.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">
                      &euro;{tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center lg:text-base"
                  >
                    {tier.name} Kopen
                  </a>
                </div>
                <div className="pt-6 pb-8 px-6 bg-white">
                  <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase md:text-sm">
                    Wat je kunt verwachten
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconSolid
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[150px] bg-black mt-10">

      </footer>
    </>
  );
}
