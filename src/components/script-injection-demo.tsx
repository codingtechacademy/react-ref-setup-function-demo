"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    updateText?: () => void;
  }
}

const SCRIPT_ID = "demo-script";

const ScriptInjectionDemo = () => {
  const setupRef = useCallback((element: HTMLDivElement) => {
    if (!window.updateText && element) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "/demo-script.js";
      element.appendChild(script);
    }

    setTimeout(() => window.updateText?.(), 100);
  }, []);

  return (
    <div
      id="script-injection-demo"
      ref={setupRef}
      className="p-5 border border-black"
    />
  );
};

export default ScriptInjectionDemo;
