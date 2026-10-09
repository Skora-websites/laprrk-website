import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/styles/global.css";
import { MotionProvider } from "../lib/motion";
import { HomePage } from "./HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionProvider>
      <HomePage />
    </MotionProvider>
  </StrictMode>,
);
