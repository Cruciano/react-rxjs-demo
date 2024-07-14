import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from "./routeTree.gen";
import { registerServicesDependencies } from "./core/DI.ts";
import { registerApiDependencies } from "./api/DI.ts";

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

registerServicesDependencies();
registerApiDependencies();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
