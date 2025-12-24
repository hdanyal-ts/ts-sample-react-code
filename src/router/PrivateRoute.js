import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuth from '@hooks/useAuth'
import FullPageLoader from '@components/Layout/FullPageLoader'

export default function PrivateRoute ({ children }) {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()

  const pathIsProtected = router.pathname !== '/timesheet'

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathIsProtected) {
      router.push('/timesheet')
    }
  }, [router, isLoading, isAuthenticated, pathIsProtected])

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return <FullPageLoader />
  }

  return children
}
