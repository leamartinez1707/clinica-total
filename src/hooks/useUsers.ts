import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export type UserProfile = {
  id: string
  role: 'admin' | 'professional'
  clinic_id: string
}

export function useUser() {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: auth } = await supabase.auth.getUser()

      if (!auth.user) {
        setUser(null)
        setLoading(false)
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('id, role, clinic_id')
        .eq('id', auth.user.id)
        .single()

      setUser(profile)
      setLoading(false)
    }

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser()
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  return { user, loading }
}