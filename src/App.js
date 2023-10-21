import React, { useState } from 'react'; // Tambahkan import useState
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Sidebar from "./pages/sidebar/Sidebar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about", // Tambahkan '/' di sini
      element: <Navbar />,
    },
    {
      path: "/sidebar", // Tambahkan '/' di sini
      element: <Sidebar />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
