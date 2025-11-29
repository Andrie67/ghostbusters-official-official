import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Projects from "./components/projects.jsx";
import Guest from "./pages/guest/guest.jsx";
import Editor from "./pages/editor.jsx";
import About from "./pages/about/about.jsx";
import FlaggedProjects from "./pages/flagged-projects/flagged-projects.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/guest", element: <Guest /> },
  { path: "/editor", element: <Editor /> },
  { path: "/about", element: <About /> },
  { path: "/about", element: <About /> },
  { path: "/flagged-projects", element: <FlaggedProjects /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
