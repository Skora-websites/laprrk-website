import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../styles/global.css";
import { MotionProvider } from "../../lib/motion";
import { Page } from "../Page";
import { PAGES } from "../data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionProvider>
      <Page data={PAGES["emerging-tech-iot"]} />
    </MotionProvider>
  </StrictMode>,
);
