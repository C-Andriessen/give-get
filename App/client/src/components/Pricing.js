/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";
const tiers = [
  {
    name: "BASIC",
    href: "#",
    color: "bg-baby-barf-red",
    priceMonthly: "GRATIS",
    description: "Kijk wat wij u kunnen bieden met het BASIS plan.",
    features: ["1 Muur", "Maximaal 16 oproepen"],
  },
  {
    name: "LITE",
    href: "#",
    color: "bg-baby-barf-orange",
    priceMonthly: 4.99,
    description: "Geef je bedrijf een betere ervaring met ons LITE plan.",
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

export default function Pricing() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center uppercase">
            OOK EEN MUUR VOOR UW BEDRIJF?
          </h1>
          <h2 className="mt-5 text-3xl font-bold sm:text-center text-baby-barf-red uppercase">
            KIES EEN PLAN DAT ER BIJ PAST
          </h2>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="shadow-sm divide-y divide-gray-200 text-center bg-white text-white"
            >
              <div className={"p-6 " + tier.color}>
                <h2 className="text-lg leading-6 font-bold font-roboto md:text-xl lg:text-2xl uppercase">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg">
                  {tier.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    &#8364; {tier.priceMonthly}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  {tier.name} Kopen
                </a>
              </div>
              <div className="pt-6 pb-8 px-6 bg-white text-black">
                <h3 className="text-md font-medium text-gray-900 tracking-wide uppercase">
                  Wat kun je verwachten
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="text-md">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
