import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the root element

if (!rootElement) throw new Error("Failed to find the root h1"); // Error handling if root element is not found

const root = createRoot(rootElement); // Creating a root for rendering

root.render(<MainContent />); // Rendering the MainContent component in the root
