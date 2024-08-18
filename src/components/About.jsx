import { ABOUT_TEXT, HOBBIES } from "../constants";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-center text-4xl mb-8">About Me</h1>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-center">
          <p className="text-center">{ABOUT_TEXT}</p>
        </div>
        <div className="text-center mt-4">
          <p>
            <strong>Name:</strong> Alim Zaib
            <br />
            <strong>Age:</strong> 21
            <br />
          </p>
        </div>
      </div>

      <h3 className="text-center text-2xl mt-12 mb-8">
        Some of my hobbies include:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {HOBBIES.map((hobby, index) => (
          <div
            key={index}
            className="w-full max-w-lg mx-auto flex flex-col sm:flex-row bg-neutral-900 rounded-lg overflow-hidden"
            style={{ height: "250px" }} // Increase the height of the cards
          >
            <div className="w-full sm:w-1/3">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-2/3 flex flex-col justify-center p-4">
              <h4 className="text-cyan-400 text-xl mb-2">{hobby.title}</h4>
              <p className="text-neutral-300 text-base leading-snug">
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
