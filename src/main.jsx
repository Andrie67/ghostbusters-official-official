import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Guest from "./pages/guest/guest.jsx";
import Editor from "./pages/editor/editor.jsx";
import About from "./pages/about/about.jsx";
import FlaggedProjects from "./pages/flagged-projects/flagged-projects.jsx";
import Report from "./pages/report/report.jsx";
import UploadProjectProposal from "./pages/upload-project-proposal/upload-project-proposal.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import ReportThankYou from "./pages/report-thank-you/report-thank-you.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/guest", element: <Guest /> },
  { path: "/editor", element: <Editor /> },
  { path: "/about", element: <About /> },
  { path: "/about", element: <About /> },
  { path: "/flagged-projects", element: <FlaggedProjects /> },
  { path: "/submit-a-report", element: <Report /> },
  { path: "/upload-project-proposal", element: <UploadProjectProposal /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/report-thank-you", element: <ReportThankYou /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
