import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Store } from './store/Store.jsx'
import {CookiesProvider} from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider defaultSetOptions={{path:'/'}}>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
)
