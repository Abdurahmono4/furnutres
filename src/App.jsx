import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// pages
import {
  About,
  HomeLayout,
  Error,
  Checkout,
  Cart,
  Orders,
  Products,
  Login,
  Landing,
  SingleProduct,
  Register,
} from "./pages";

// components
import { ErrorElement,ProtectedRoutes } from "./components";

// actions
import { action as RegisterAction } from "./pages/Register";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { authReady, login } from "./features/user/userSlice";

// loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";



function App() {
  const { user, authReadyState } = useSelector((state) => state.userState);
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <HomeLayout />
        </ProtectedRoutes>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: LandingLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
    },
    {
      path: "register",
      element: user ? <Navigate to="/" /> : <Register />,
      errorElement: <Error />,
      action: RegisterAction,
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReady());
    });
  }, []);

  return <>{authReady && <RouterProvider router={routers} />}</>;
}

export default App;
