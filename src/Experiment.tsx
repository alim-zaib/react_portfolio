import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ColourPalette from "./components/ColourPalette";

const Experiment: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#0a0a0a");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trim();
    const validHex = /^[0-9A-Fa-f]{6}$/.test(input); // validate hex code
    if (validHex) {
      setBackgroundColor(`#${input}`);
    }
  };

  return (
    <div className="relative">
      {/* sets the title of tab*/}
      <Helmet>
        <title>experimenting 🚧</title>
      </Helmet>

      <div
        className="absolute top-0 left-0 w-screen h-screen"
        style={{
          backgroundColor, // dynamically apply the background colour
        }}
      ></div>

      <div className="relative z-10 pt-10 text-center">
        <h1 className="font-bold text-white">experimenting with typescript</h1>
        <p className="text-white">🚧 work in progress 🚧</p>

        <div className="mt-10">
          <ColourPalette backgroundColor={backgroundColor} />
        </div>
      </div>

      <div className="fixed bottom-5 right-5">
        <label htmlFor="hexInput" className="block text-white mb-2">
          enter a hex code:
        </label>
        <div className="flex items-center">
          <span className="bg-white text-black px-3 py-2 font-bold rounded-l-md">
            #
          </span>
          <input
            id="hexInput"
            type="text"
            maxLength={6}
            placeholder="ffffff"
            onChange={handleInputChange}
            className="border border-gray-300 px-3 py-2 rounded-r-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiment;
