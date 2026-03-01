import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dictionary } from "./pages/Dictionary";
import { AIPlantIdentification } from "./pages/AIPlantIdentification";
import { AyurChatbot } from "./pages/AyurChatbot";
import { PlantDetail } from "./pages/PlantDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dictionary },
      { path: "plant/:plantId", Component: PlantDetail },
      { path: "ai-identification", Component: AIPlantIdentification },
      { path: "chatbot", Component: AyurChatbot },
    ],
  },
]);