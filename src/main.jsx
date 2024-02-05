import React from 'react'
import ReactDOM from 'react-dom/client'
/* import HooksApp from './HooksApp' */
import './styles.css';
/* import SimpleForm from './components/useEffect/SimpleForm'; */
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
)
