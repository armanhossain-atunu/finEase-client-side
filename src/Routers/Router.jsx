import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import MyTransactions from "../Pages/MyTransactions";
import AddTransaction from "../Pages/AddTransaction";
import About from "../Pages/About";
import UpdateProfile from "../Pages/UpdateProfile";
import Update from "../Pages/UpdateTransactions";
import TransactionDetails from "../Pages/TransactionDetails";
import Contact from "../Pages/Contact";
import Errorpage from "../Pages/Errorpage";
import Loading from "../Components/Loading";
import PrivateRoute from "../Context/PrivateRoute";
import Reports from "../Pages/Reports ";
import DashboardHome from "../Pages/DashboardHome";
import SupportPage from "../Pages/SupportPage";
import Jobs from "../Pages/Jobs";
import Branding from "../Pages/Branding";
import Marketing from "../Pages/Marketing";
import Design from "../Pages/Design";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Loading />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path:'/jobs', element: <Jobs></Jobs>},
      { path:'/Branding', element: <Branding></Branding>},
      { path:'/Design', element: <Design></Design>},
      { path:'/Marketing', element: <Marketing></Marketing>},
      { path: "/support", element: <SupportPage /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/signup", element: <Signup /> },
      {
        path: "transaction/details",
        element: (
          <PrivateRoute>
            <TransactionDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "update/:_id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: () => fetch("https://finease-server-theta.vercel.app/myTransactions"),
      },

      { path: "*", element: <Errorpage /> },
    ],
  },

  // ================= DASHBOARD =================
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "MyTransactions",
        element: <MyTransactions />,
      },
      {
        path: "AddTransaction",
        element: <AddTransaction />,
      }
    ],

  },
]);

export default router;
