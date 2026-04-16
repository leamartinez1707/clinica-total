import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <header>
        Clinica Total
        <nav>
          <ul>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/clinics">Clinics</a></li>
            <li><a href="/patients">Patients</a></li>
            <li><a href="/professionals">Professionals</a></li>
            <li><a href="/sessions">Sessions</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}