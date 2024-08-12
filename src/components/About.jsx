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
            <strong>Nationality:</strong> British
          </p>
        </div>
      </div>

      <h3 className="text-center text-2xl mt-12 mb-8">
        Some of my hobbies include:
      </h3>
      <div className="flex flex-col items-center">
        {HOBBIES.map((hobby, index) => (
          <div
            key={index}
            className="mb-6 w-full max-w-4xl flex flex-wrap bg-neutral-900 rounded-lg p-4"
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full sm:w-1/2 rounded-lg object-cover"
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
            <div className="w-full sm:w-1/2 flex flex-col justify-center pl-4">
              <h4 className="text-cyan-400 text-xl mb-2">{hobby.title}</h4>
              <p className="text-neutral-300">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
