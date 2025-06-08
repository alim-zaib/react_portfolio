import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="back to top"
      className="
        fixed bottom-4 right-4 
        bg-cyan-500 hover:bg-cyan-600 
        text-white p-3 rounded-full 
        shadow-lg transition-opacity
      "
    >
      ↑
    </button>
  );
};

export default BackToTop;
