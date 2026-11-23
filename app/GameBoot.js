"use client";

import { useEffect } from "react";

const GAME_SCRIPT = "/assets/main-DvvN4JUD.js";

// The game ships as a prebuilt ES module bundle that queries the page markup on
// load, so it is injected only once after hydration instead of being bundled.
export default function GameBoot() {
  useEffect(() => {
    if (window.__hollowbornBooted) return;
    window.__hollowbornBooted = true;

    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src = GAME_SCRIPT;
    document.body.appendChild(script);
  }, []);

  return null;
}
