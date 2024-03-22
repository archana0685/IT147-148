import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AdminProvider } from './context/AdminContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AdminProvider>
    <ProductProvider>
    <OrderProvider>
    <App />  
    </OrderProvider>
    </ProductProvider>
  </AdminProvider>
)
