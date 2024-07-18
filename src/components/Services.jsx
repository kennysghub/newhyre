import systemIntegrationImg from "../assets/system-integration.png";
import emissionsReductionImg from "../assets/emissions-reductions.jpg";
import stockImg from "../assets/stock-image.jpeg";
import { Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "Integration Support and Project Management",
    href: "/services",
    description:
      "Hydrogen projects involve new and constantly emerging technologies that require a fundamental knowledge to safely operate and maintain...",
    imageUrl: systemIntegrationImg,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Integration", href: "/services" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: systemIntegrationImg,
    },
  },
  {
    id: 2,
    title: "Emissions Reduction Planning",
    href: "/services",
    description:
      "We understand that hydrogen can be used in many unique applications, and we want to help unlock the true potential of hydrogen...",
    imageUrl: emissionsReductionImg,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Emissions Reduction Planning", href: "/services" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "/services",
      imageUrl: emissionsReductionImg,
    },
  },
  {
    id: 3,
    title: "Technology Consulting: Customized Solutions and Advisory Services",
    href: "/services",
    description:
      "The commercialized market of hydrogen technologies is always evolving...",
    imageUrl: stockImg,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Consulting", href: "/services" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: stockImg,
    },
  },
  // More posts...
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We pride ourselves on offering 3 exclusive services that we view as
            necessary for the adoption of hydrogen energy systems.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    {/* <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time> */}
                    <Link
                      to={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </Link>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  {/* <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
