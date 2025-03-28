import { createRoot } from "react-dom/client";
import HelloWorld from "./helloworld.jsx";
import { StrictMode } from "react";

// Create a root DOM element and render the HelloWorld component into it

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelloWorld />
    </StrictMode>
);
