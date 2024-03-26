import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:'/book/:bookId',
        loader:()=>fetch('/books.json'),
        element:<BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
