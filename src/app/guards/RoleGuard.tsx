import { useUser } from '@/hooks/useUsers'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'


type Props = {
    role: 'admin' | 'professional'
    children: JSX.Element
}

export default function RequireRole({ role, children }: Props) {
    const { user, loading } = useUser()

    if (loading) return <div>Loading...</div>

    if (!user || user.role !== role) {
        return <Navigate to="/" replace />
    }

    return children
}