import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export default function Services() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-emerald-600">HyRe Energy</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Offered Services
        </h1>
        <p className="mt-6 text-xl leading-8">
          We pride ourselves on offering 3 exclusive services that we view as necessary for the
          adoption of hydrogen energy systems.
        </p>
        <div className="mt-10 max-w-2xl">
          {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Integration Support and Project Management
          </h2>
          <div>
            <p className="mt-6">
              <CheckCircleIcon className="mt-1 h-5 w-5  text-emerald-600" aria-hidden="true" />
              Hydrogen projects involve new and constantly emerging technologies that require a
              fundamental knowledge to safely operate and maintain. The integration of these
              emerging technologies with established technologies, such as balance of plant
              equipment, is not often available through the technology manufacturers. There is no
              one-stop, turn-key solution because of site specific requirements and countless
              combinations of technologies to achieve a certain end goal. Hydrogen projects would
              normally require multiple expensive engineering companies, but we can streamline the
              process of outsourcing specific jobs. We can integrate and manage all the technologies
              unique to a hydrogen project including but not limited to PEM fuel cells and
              elctrolyzers, alkaline electrolyzers, solid-oxide fuel cells and electrolyzers,
              air-cooled chillers, cooling towers, hydrogen compressors, gaseous hydrogen storage.
            </p>
          </div> */}
          {/* <figure className="mt-10 border-l border-emerald-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh
                ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet
                eget cras. Sem volutpat enim tristique.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing
                Manager
              </div>
            </figcaption>
          </figure> */}
          {/* <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
            semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
            viverra tellus varius sit neque erat velit.
          </p> */}
          {/* Integration Support and Project Management */}
          <div className="flex items-center gap-2 mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Integration Support and Project Management
            </h2>
          </div>
          <p className="mt-6">
            Hydrogen projects involve new and constantly emerging technologies that require a
            fundamental knowledge to safely operate and maintain. The integration of these emerging
            technologies with established technologies, such as balance of plant equipment, is not
            often available through the technology manufacturers. There is no one-stop, turn-key
            solution because of site specific requirements and countless combinations of
            technologies to achieve a certain end goal. Hydrogen projects would normally require
            multiple expensive engineering companies, but we can streamline the process of
            outsourcing specific jobs. We can integrate and manage all the technologies unique to a
            hydrogen project including but not limited to PEM fuel cells and elctrolyzers, alkaline
            electrolyzers, solid-oxide fuel cells and electrolyzers, air-cooled chillers, cooling
            towers, hydrogen compressors, gaseous hydrogen storage.
          </p>

          <div className="flex items-center gap-2 mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Emissions Reduction Planning
            </h2>
          </div>
          <p className="mt-6">
            We understand that hydrogen can be used in many unique applications, and we want to help
            unlock the true potential of hydrogen. The potential is massive because it can be used
            in numerous sectors including the industrial, transportation, and power sectors. There
            is a need for an emissions free feedstock gas to be used in industrial processes such as
            cement, steel, and ammonia production. There is a need for an emissions free fuel for
            light-duty and heavy-duty vehicles. There is a need for emissions free electricity
            generation. Every application can benefit from the use of hydrogen, and we can
            contribute to a growing hydrogen market. If you are affiliated with any of the
            previously mentioned sectors, we can help develop your hydrogen project to reduce
            emissions.
          </p>

          <div className="flex items-center gap-2 mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Technology Consulting: Customized Solutions and Advisory Services
            </h2>
          </div>
          <p className="mt-6">
            The commercialized market of hydrogen technologies is always evolving. We can provide
            scientific advice on new hydrogen technology to de-risk an investment . Additionally, no
            one hydrogen project will be the same because different sites have different
            requirements and end goals. We can advise on hydrogen project proposals and offer
            step-by-step guidance to achieve your overall business goals.
          </p>
        </div>
      </div>
    </div>
  );
}
