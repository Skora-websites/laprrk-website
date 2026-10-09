import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer, SiteFooter, WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { Hero } from "./Hero";
import {
  Services, Tech, Synergy, Roles, Why, Steps, Cases,
  Industries, Posts, Faqs, CtaBand,
} from "./sections";

export function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main">
        <Hero />
        <Services />
        <Tech />
        <Synergy />
        <Roles />
        <Why />
        <Steps />
        <Cases />
        <Industries />
        <Posts />
        <Faqs />
        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <DevAnnotation />
    </>
  );
}
