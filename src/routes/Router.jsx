import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import BrandDetails from "../pages/BrandDetails";

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
          fetch(`http://localhost:5000/brands/ads/${params.name}`),
      },
    ],
  },
]);

export default router;
