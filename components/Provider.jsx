'use client'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ chidren, session }) => {
  return (
    <SessionProvider session={session}>
      {chidren}
    </SessionProvider>
  )
}

export default Provider