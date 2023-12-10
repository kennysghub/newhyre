import FeatureList from "../components/FeatureList";
import Pricing from "../components/Pricing";

const perks = [
  {
    name: "Free delivery",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
    description:
      "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg",
    description:
      "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
  },
  {
    name: "Exchanges",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.",
  },
  {
    name: "For the planet",
    imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a lot more money if we
                kinda stopped caring about that. Our new strategy is to write a bunch of things that
                look really good in the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <h2 className="sr-only">Our perks</h2>
        <div className="mx-auto max-w-7xl py-1 sm:px-2 sm:py-1 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pricing />
      <FeatureList />
    </div>
  );
}
