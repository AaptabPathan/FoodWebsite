import React from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./components/screen/Home";
import Login from "./components/screen/Login";
import Signup from "./components/screen/Signup";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./components/screen/MyOrder";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/createuser",
      element: <Signup />,
    },
    {
      path: "/myOrder",
      element: <MyOrder />,
    },
  
  
  ]);

  return (
    <CartProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;
