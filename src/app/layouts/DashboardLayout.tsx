
import SidebarComponent from '@/components/Sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <nav>
        <SidebarComponent />
      </nav>
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}