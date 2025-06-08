import { ABOUT_TEXT, HOBBIES } from "../constants";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-12 border-b border-neutral-900 pb-12">
      <div className="pb-4">
        <h1 className="text-center text-4xl mb-4">about me</h1>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-center">
          <p className="text-center lowercase">{ABOUT_TEXT}</p>
        </div>
      </div>

      <h3 className="text-center text-2xl mt-8 mb-8">hobbies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {HOBBIES.map((hobby, index) => (
          <div
            key={index}
            className="w-full max-w-lg mx-auto flex flex-col sm:flex-row bg-neutral-900 rounded-lg overflow-hidden"
            style={{ height: "auto" }}
          >
            <div className="w-full sm:w-1/3 h-48 sm:h-auto">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 flex flex-col justify-center p-4">
              <h4 className="text-cyan-400 text-xl mb-2 lowercase">
                {hobby.title}
              </h4>
              <p className="text-neutral-300 text-base leading-snug lowercase">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
