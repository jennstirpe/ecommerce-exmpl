import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LightRequirementsArticle from './pages/LightRequirementsArticle.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lightRequirements",
    element: <LightRequirementsArticle />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
