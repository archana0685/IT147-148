import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAdminContext } from './context/AdminContext'
import Signin from './components/Signin'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import { ToastContainer } from 'react-toastify'
import Orders from './pages/Orders'

const App = () => {

  const { loginState, isActive } = useAdminContext();

  return (
    <>
      <BrowserRouter>

        {loginState && localStorage.getItem("ADMIN_TOKEN") !== "" ? (
          <>
            <Sidebar />
            <div className="main__container" style={isActive ? { marginLeft: "17rem" } : { marginLeft: "4.5rem" }}>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={loginState ? <Dashboard /> : <Signin />}
                />

                <Route
                  path="/products"
                  element={loginState ? <Products /> : <Signin />}
                />

                <Route
                  path="/addproduct"
                  element={loginState ? <AddProduct /> : <Signin />}
                />

                <Route
                  path="/orders"
                  element={loginState ? <Orders /> : <Signin />}
                />

                <Route
                  path="*"
                  element={loginState ? <Dashboard /> : <Signin />}
                />
              </Routes>
            </div>
          </>
        ) : (
          <Signin />
        )}

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />


      </BrowserRouter>
    </>
  )
}

export default App
