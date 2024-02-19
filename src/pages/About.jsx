import Mission from "../components/Mission";
import Team from "../components/Team";
import Services from "../components/Services";


export default function About() {
  return (
    <div className="bg-custom-bg">
      <div className="bg-custom-bg flex flex-col items-center py-10">
        <div className="bg-custom-bg max-w-5xl w-full px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-header-3 sm:text-5xl text-center">
            Experienced experts in hydrogen produced via renewable electrolysis.
          </h1>
        </div>
      </div>
      <Mission />
      <Team />
      <Services />
    </div>
  );
}
