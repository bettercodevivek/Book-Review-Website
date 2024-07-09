import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './Components/Home';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
