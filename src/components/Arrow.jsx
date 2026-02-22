import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  const [show, setShow] = useState(false);

  // نراقب الاسكرول
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لما نضغط يرجع لفوق
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            bg-blue-600 hover:bg-blue-700 
            text-white 
            p-3 rounded-full 
            shadow-lg 
            transition-all duration-300
            z-50
          "
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default Arrow;
