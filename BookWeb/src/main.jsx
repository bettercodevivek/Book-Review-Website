import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import './index.css'
import LoginForm from './Components/Authentication/Login';
import RegistrationForm from './Components/Authentication/Register';
import OTPVerification from './Components/Authentication/OTP';
import BookList from './Components/Books/Booklist';
import OurGuidelines from './Components/Guidelines';

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
      {
        path:'dashboard',
        element:<Dashboard/>
      },
      {path:'login',
        element:<LoginForm/>
      },
      {path:'register',
        element:<RegistrationForm/>
      },{
        path:'otp',
        element:<OTPVerification/>
      },
      {
        path:'books',
        element:<BookList/>
      },{
        path:'guidelines',
        element:<OurGuidelines/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
