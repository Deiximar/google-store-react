import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import EarbudsPage from "./pages/EarbudsPage";
import WatchesPage from "./pages/WatchesPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/earbuds-page" />,
  },
  {
    path: "earbuds-page",
    element: <EarbudsPage />,
  },
  {
    path: "watches-page",
    element: <WatchesPage />,
  },
  {
    path: "cart-page",
    element: <CartPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
