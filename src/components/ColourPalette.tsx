import React, { useState } from "react";

interface Color {
  id: string;
  hex: string;
}

interface ColorPaletteProps {
  backgroundColor: string;
}

const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const ColourPalette: React.FC<ColorPaletteProps> = ({ backgroundColor }) => {
  const [colors, setColors] = useState<Color[]>([]);
  const [savedColors, setSavedColors] = useState<Color[]>([]);

  const generatePalette = () => {
    const newColors: Color[] = Array.from({ length: 5 }, () => ({
      id: crypto.randomUUID(),
      hex: generateRandomColor(),
    }));
    setColors(newColors);
  };

  const saveColor = (color: Color) => {
    if (!savedColors.some((c) => c.id === color.id)) {
      setSavedColors([...savedColors, color]);
    }
  };

  return (
    <div
      className="text-center p-6 rounded-lg"
      style={{ backgroundColor, color: "#fff" }}
    >
      <h2 className="text-3xl font-bold mb-6">colour palette generator</h2>
      <button
        onClick={generatePalette}
        className="px-6 py-3 text-lg font-semibold text-white bg-cyan-500 rounded-md shadow-md hover:bg-cyan-600 hover:shadow-lg transition-all"
      >
        generate palette
      </button>
      <div className="flex justify-center gap-4 mt-6">
        {colors.map((color) => (
          <div
            key={color.id}
            className="w-24 h-24 rounded-md cursor-pointer"
            style={{ backgroundColor: color.hex }}
            onClick={() => saveColor(color)}
            title={`click to save ${color.hex}`}
          >
            <p className="text-sm mt-9 text-white">{color.hex}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-8 text-lg font-semibold">saved colours</h3>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {savedColors.map((color) => (
          <div
            key={color.id}
            className="w-24 h-24 rounded-md"
            style={{ backgroundColor: color.hex }}
            title={color.hex}
          >
            <p className="text-sm mt-9 text-white">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColourPalette;
