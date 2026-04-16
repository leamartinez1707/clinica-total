import { useUser } from '@/hooks/useUsers'
import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const { user, loading } = useUser()

    if (loading) return <div>Loading...</div>

    if (!user) {
        return <Navigate to="/auth" replace />
    }

    return children
}