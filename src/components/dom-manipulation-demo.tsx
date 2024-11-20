"use client";

import { useEffect, useRef } from "react";

const DomManipulationDemo = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = divRef.current;

    if (element) {
      element.classList.add("bg-blue-100");
      element.textContent = "Text updated with useEffect()";
    }
  }, []);

  return (
    <div ref={divRef} className="p-5 border border-black">
      Initial Content
    </div>
  );
};

export default DomManipulationDemo;
