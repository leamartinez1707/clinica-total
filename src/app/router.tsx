import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import RequireAuth from "./guards/AuthGuard";
import RequireRole from "./guards/RoleGuard";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
  },
  {
    path: '/',
    element: <RequireAuth><DashboardLayout /></RequireAuth>,
    children: [
      { path: 'appointments', element: <div>Appointments</div> },
      { path: 'clinics', element: <div>Clinics</div> },
      { path: 'patients', element: <RequireRole role="admin"><div>Patients</div></RequireRole> },
      { path: 'professionals', element: <div>Professionals</div> },
      { path: 'sessions', element: <div>Sessions</div> },

    ],
  },
])

