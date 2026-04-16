import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

export const SidebarComponent = () => {
    return (
        <Sidebar>
            HOLA
            <SidebarHeader />
            <h1>HOLA</h1>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default SidebarComponent