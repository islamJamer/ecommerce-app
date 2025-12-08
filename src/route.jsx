import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Products from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "home",
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "contact",
            element: <Contact />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
        {
            path: "blog",
            element: <Blog />,
        },
        {
            path: "products",
            element: <Products />,
        }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            path: "login",
            element: <Login />,
        },
                {
            path: "Register",
            element: <Register />,
        }
    ],
  }
]);

export default router;