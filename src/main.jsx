import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Mapa } from './Mapa.jsx';
import { CardRickMorty } from './Consumo.jsx'
import { Produtos } from "./Produtos.jsx";
import './index.css'
import { Grafico } from "./Grafico.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/Produtos',
    element: <Produtos/>,
  },
  {
    path: '/CardRick',
    element: <CardRickMorty/>,
  },
  {
    path: '/Mapa',
    element: <Mapa/>,
  },
  {
    path: '/Grafico',
    element: <Grafico/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

