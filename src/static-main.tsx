import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const root = document.getElementById("root")!;
const showError = (error: unknown) => {
  console.error("Kingdom Robux frontend error:", error);
  root.innerHTML = '<main style="padding:32px;background:#101014;color:#fff;min-height:100vh;font-family:sans-serif"><h1>Kingdom Robux</h1><p>Não foi possível carregar a loja. Envie um print desta tela para o suporte.</p><pre style="white-space:pre-wrap;color:#ffca55"></pre></main>';
  root.querySelector("pre")!.textContent = String(error);
};
window.addEventListener("error", (event) => showError(event.error ?? event.message));
window.addEventListener("unhandledrejection", (event) => showError(event.reason));

import("./routes/index")
  .then(({ Index }) => createRoot(root).render(<React.StrictMode><Index /></React.StrictMode>))
  .catch(showError);
