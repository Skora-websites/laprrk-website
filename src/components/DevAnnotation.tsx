import { Suspense, lazy } from "react";

/* Dev-only visual feedback toolbar (https://agentation.dev/install).
   Lazy-imported so it code-splits out of the production bundle,
   and rendered only when Vite runs in dev mode. */
const AgentationToolbar = lazy(() =>
  import("agentation").then((m) => ({ default: m.Agentation })),
);

export function DevAnnotation() {
  if (!import.meta.env.DEV) return null;
  return (
    <Suspense fallback={null}>
      <AgentationToolbar className="agentation-dock" />
    </Suspense>
  );
}
