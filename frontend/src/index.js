import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
// import Header from './Header';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from './Header';
import Recipe from './Recipe';
import Soup from './Soup';
import Porrige from './Porrige';
import Swagger from "./Filter/Swagger/Swagger.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/recipe/:Id",
    element: <Recipe />,
  },
  {
    path: "/recipe/soup",
    element: <Soup />,
  },
  {
    path: "/recipe/porridge",
    element: <Porrige />,
  },
  {
    path: "/swagger",
    element: <Swagger />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
    {/* <Outlet /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
