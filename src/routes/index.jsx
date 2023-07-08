import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// import RoleBasedGuard from 'src/guards/RoleBasedGuard';
// components
import LoadingScreen from "src/components/LoadingScreen";
import AuthGuard from "src/guards/AuthGuard";
// guards
import GuestGuard from "src/guards/GuestGuard";
import AuthLayout from "src/layouts/AuthLayout";
// layouts
import DashboardLayout from "src/layouts/DashboardLayout";

const Loadable = (Component) => (props) => {
  const pathname = window.location.href;
  const isDashboard = pathname.includes("dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: "50%",
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

// product
const ProductManagement = Loadable(lazy(() => import("src/pages/Product/Management")));
const ProductForm = Loadable(lazy(() => import("src/pages/Product/Form")));

// customer
const CustomerManagement = Loadable(lazy(() => import("src/pages/Customer/Management")));
const CustomerDetail = Loadable(lazy(() => import("src/pages/Customer/Detail")));

// order
const OrderManagement = Loadable(lazy(() => import("src/pages/Order/Management")));
const OrderForm = Loadable(lazy(() => import("src/pages/Order/Form")));

// inventory
const InventoryOverview = Loadable(lazy(() => import("src/pages/Inventory/Overview")));

// shipment
const ShipmentOverview = Loadable(lazy(() => import("src/pages/Shipment/Overview")));
const ShipmentManagement = Loadable(lazy(() => import("src/pages/Shipment/Management")));

// supplier
const SupplierManagement = Loadable(lazy(() => import("src/pages/Inventory/Supplier/Management")));
const SupplierDetail = Loadable(lazy(() => import("src/pages/Inventory/Supplier")));

// po
const POManagement = Loadable(lazy(() => import("src/pages/Inventory/PO/Management")));
const POForm = Loadable(lazy(() => import("src/pages/Inventory/PO/Form")));

// returns
const ReturnManagement = Loadable(lazy(() => import("src/pages/Inventory/Return/Management")));
const ReturnForm = Loadable(lazy(() => import("src/pages/Inventory/Return/Form")));

// Dashboard
const Dashboard = Loadable(lazy(() => import("src/pages/Dashboard")));

// auth
const SignIn = Loadable(lazy(() => import("src/pages/Auth/SignIn")));

// 404
const ERROR404 = Loadable(lazy(() => import("src/pages/Page404")));

// ----------------------------------------------------------------------

const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/overview" />, index: true },
        { path: "overview", element: <Dashboard /> },
        // Product
        {
          path: "products",
          element: <ProductManagement />,
        },
        {
          path: "products/create",
          element: <ProductForm />,
        },
        {
          path: "products/edit/:id",
          element: <ProductForm />,
        },
        // Customer
        {
          path: "customers",
          element: <CustomerManagement />,
        },
        {
          path: "customers/:id",
          element: <CustomerDetail />,
        },
        // Order
        {
          path: "orders",
          element: <OrderManagement />,
        },
        {
          path: "orders/create",
          element: <OrderForm />,
        },
        {
          path: "orders/edit/:id",
          element: <OrderForm />,
        },
        // Inventory Overview
        {
          path: "inventory/overview",
          element: <InventoryOverview />,
        },
        {
          path: "inventory/suppliers",
          element: <SupplierManagement />,
        },
        {
          path: "inventory/suppliers/:id",
          element: <SupplierDetail />,
        },
        // PO
        {
          path: "inventory/po",
          element: <POManagement />,
        },
        {
          path: "inventory/po/create",
          element: <POForm />,
        },
        {
          path: "inventory/po/edit/:id",
          element: <POForm />,
        },

        // Return
        {
          path: "inventory/returns",
          element: <ReturnManagement />,
        },
        {
          path: "inventory/returns/create",
          element: <ReturnForm />,
        },
        {
          path: "inventory/returns/edit/:id",
          element: <ReturnForm />,
        },
        // Shipment
        {
          path: "shipments",
          element: <ShipmentManagement />,
          index: true
        },
        {
          path: "shipments/overview",
          element: <ShipmentOverview />,
          index: true
        },
      ],
    },
    // {
    //   path: "/auth",
    //   element: (
    //     <GuestGuard>
    //       <AuthLayout />
    //     </GuestGuard>
    //   ),
    //   children: [
    //     {
    //       element: <Navigate to="/auth/signin" />,
    //       index: true,
    //     },
    //     {
    //       path: "signin",
    //       element: <SignIn />,
    //     },
    //   ],
    // },

    {
      path: "/",
      element: <Navigate to="/dashboard/overview" replace />,
    },

    {
      path: "/404",
      element: <ERROR404 />,
    },

    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);
};

export default Router;
