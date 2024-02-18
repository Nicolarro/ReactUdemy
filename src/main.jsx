import ReactDOM from 'react-dom/client'
import './styles.css';
import './components/useReducer/intro-reducer';
import {
  BrowserRouter,
/*   createBrowserRouter, */
/*   RouterProvider, */
} from "react-router-dom";
/* import TodoApp from  "./components/useReducer/TodoApp"; */
import MainApp from './components/useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
{/*   <React.StrictMode> */}
{/*     <RouterProvider router={}/>  */}
    <MainApp/>
{/*   </React.StrictMode>, */}
  </BrowserRouter>
)
