import { Link } from "react-router-dom";
import { ClipboardList, LineChart, Lightbulb, ArrowRight } from "lucide-react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div className={`p-4 border-t ${className}`} {...props}>
    {children}
  </div>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              Our Services
            </h1>
            <p className="max-w-[700px] text-gray-700 md:text-xl lg:text-base xl:text-xl mb-12">
              At Hyre Energy LLC we pride ourselves on offering three exclusive
              services that we view as necessary for the adoption of hydrogen
              energy systems. Explore our services below to see how we can help
              your business reduce emissions and join the clean energy
              revolution.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <ClipboardList className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold">
                      Integration Support and Project Management
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Comprehensive project oversight and implementation
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/integration%20support%20and%20project%20management.jpg-8xjG6Nupe1dPFiV736arcjBQ1Rc07D.jpeg"
                      alt="Team collaborating on project management"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    <li>End-to-end project coordination</li>
                    <li>System integration expertise</li>
                    <li>Timeline and resource management</li>
                    <li>Stakeholder communication</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/services/integration-support" className="w-full">
                    <Button className="w-full bg-black text-white hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <LineChart className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold">
                      Emissions Reduction Planning
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Strategic pathways to lower emissions
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emissions%20reductions.jpg-EwN7gOWxh0dD6uiXrnK2FcvBsPg6Fs.jpeg"
                      alt="Industrial emissions and clean energy symbolism"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    <li>Comprehensive emissions assessment</li>
                    <li>Reduction strategy development</li>
                    <li>Implementation roadmap creation</li>
                    <li>Progress monitoring and reporting</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/services/emissions-reduction" className="w-full">
                    <Button className="w-full bg-black text-white hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Lightbulb className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-xl font-bold">Technology Consulting</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Expert guidance on hydrogen solutions
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tech%20consulting.jpg-DlaZEjMyMAfv0lv9KlCaFTwPqUlekh.jpeg"
                      alt="Technical consulting and blueprint review"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                    <li>Technical feasibility studies</li>
                    <li>System design optimization</li>
                    <li>Technology selection support</li>
                    <li>Performance analysis</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/services/technology-consulting" className="w-full">
                    <Button className="w-full bg-black text-white hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              Why Choose Hyre Energy?
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Expertise</h3>
                <p className="text-gray-600">
                  Our team of experts brings years of experience in hydrogen
                  technology, renewable energy, and industrial processes. We
                  stay at the forefront of innovation to deliver cutting-edge
                  solutions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Customized Solutions</h3>
                <p className="text-gray-600">
                  We understand that every business is unique. That's why we
                  work closely with you to develop tailored hydrogen solutions
                  that meet your specific needs and goals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Sustainability Focus</h3>
                <p className="text-gray-600">
                  Our commitment to sustainability drives everything we do. By
                  choosing Hyre Energy, you're partnering with a company
                  dedicated to reducing emissions and creating a cleaner future.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">End-to-End Support</h3>
                <p className="text-gray-600">
                  From initial consultation to implementation and ongoing
                  support, we're with you every step of the way. Our
                  comprehensive approach ensures the success of your hydrogen
                  initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              Ready to Transform Your Energy Future?
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl lg:text-base xl:text-xl mb-12">
              Take the first step towards a sustainable, hydrogen-powered future
              for your business. Contact us today to discuss how Hyre Energy can
              help you achieve your energy goals.
            </p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
