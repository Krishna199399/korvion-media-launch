import { T as jsxRuntimeExports } from "./worker-entry-D9hN3pPO.js";
import { L as Link } from "./router-DUCwFFvs.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background text-foreground p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: error.message }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "mt-4 inline-block text-primary", children: "← Back to services" })
] }) });
export {
  SplitErrorComponent as errorComponent
};
