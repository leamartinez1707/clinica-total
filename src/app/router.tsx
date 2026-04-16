import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'appointments', element: <div>Appointments</div> },
      { path: 'clinics', element: <div>Clinics</div> },
      { path: 'patients', element: <div>Patients</div> },
      { path: 'professionals', element: <div>Professionals</div> },
      { path: 'sessions', element: <div>Sessions</div> },

    ],
  },
])