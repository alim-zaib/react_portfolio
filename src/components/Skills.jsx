import tableau from "../assets/icons/tableau-software.svg";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 flex justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="my-20 text-center text-4xl">Skills</h2>

        <h3 className="mb-8 text-center text-2xl">
          Technologies I'm Most Familiar With
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mb-16">
          {/* Top 10 Skills */}
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg"
                alt="Anaconda"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Anaconda</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                alt="NumPy"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">NumPy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                alt="Pandas"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Pandas</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                alt="PyTorch"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">PyTorch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                alt="OpenCV"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">OpenCV</p>
          </div>
        </div>

        {/* Section for Other Skills */}
        <h3 className="mb-8 text-center text-2xl">
          Additional Technologies I'm Experienced With
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                alt="C"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">C</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                alt="HTML5"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                alt="CSS3"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">React</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
                alt="Matplotlib"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Matplotlib</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img src={tableau} alt="Tableau" className="w-16 h-16" />
            </div>
            <p className="mt-2 text-sm ">Tableau</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                alt="Linux"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm ">Linux</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-neutral-700 p-4 bg-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"
                alt="LaTeX"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-2 text-sm">LaTeX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
