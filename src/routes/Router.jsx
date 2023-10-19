import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import BrandDetails from "../pages/BrandDetails";
import Products from "../components/products/Products";
import UpdateProducts from "../pages/UpdateProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brand/:name",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(
            `https://flavor-fusion-server-sepia.vercel.app/brands/ads/${params.name}`
          ),
        children: [
          {
            path: "/brand/:name",
            element: <Products></Products>,
            loader: ({ params }) =>
              fetch(
                `https://flavor-fusion-server-sepia.vercel.app/brands/${params.name}`
              ),
          },
        ],
      },
      {
        path: "/product/:id/update",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(
            `https://flavor-fusion-server-sepia.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://flavor-fusion-server-sepia.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () =>
          fetch("https://flavor-fusion-server-sepia.vercel.app/cart"),
      },
    ],
  },
]);

export default router;
