import React from 'react'
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {
  createBrowserRouter,
  RouterProvider,
  Route,

} from "react-router-dom";

import Home from './components/screen/Home';
import Login from './components/screen/Login';

function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
