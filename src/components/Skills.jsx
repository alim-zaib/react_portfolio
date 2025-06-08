import tableau from "../assets/icons/tableau-software.svg";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="my-12 text-center text-4xl lowercase">skills</h2>

        <h3 className="mb-6 text-center text-2xl lowercase">
          technologies i'm most familiar with
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mb-16">
          {/* Top skills */}
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              alt: "python",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              alt: "java",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              alt: "mysql",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "javascript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              alt: "typescript",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              alt: "c++",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
              alt: "anaconda",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              alt: "docker",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
              alt: "kubernetes",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
              alt: "pytorch",
            },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
                <img src={skill.src} alt={skill.alt} className="w-16 h-16" />
              </div>
              <p className="mt-2 text-sm lowercase">{skill.alt}</p>
            </div>
          ))}
        </div>

        {/* Section for other skills */}
        <h3 className="mb-6 text-center text-2xl lowercase">
          additional tech i'm experienced with
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
              alt: "c",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
              alt: "html5",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
              alt: "css3",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              alt: "react",
            },
            { src: tableau, alt: "tableau" },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
              alt: "git",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
              alt: "linux",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
              alt: "numpy",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
              alt: "pandas",
            },

            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
              alt: "opencv",
            },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
                <img src={skill.src} alt={skill.alt} className="w-16 h-16" />
              </div>
              <p className="mt-2 text-sm lowercase">{skill.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
