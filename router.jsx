import { createBrowserRouter } from "react-router";
import App from "./src/App";
import RootLayout from "./src/Layout/RootLayout";
import Intro from "./src/Contents/Intro";
import About from "./src/Contents/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
  //   children:[{
  //     path:'/Intro',
  //     Component:Intro
  //   },
  //   {
  //     path:'/About',
  //     Component:About
  //   }
  // ]
  },
]); 

export default router