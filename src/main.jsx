import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import './components/useReducer/intro-reducer';
import {
  BrowserRouter,
/*   createBrowserRouter, */
/*   RouterProvider, */
} from "react-router-dom";
import TodoApp from  "./components/useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
{/*   <React.StrictMode> */}
{/*     <RouterProvider router={}/>  */}
    <TodoApp/>
{/*   </React.StrictMode>, */}
  </BrowserRouter>
)
