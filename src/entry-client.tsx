import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { CustomCursor } from "./components/CustomCursor";

const router = getRouter();

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}
