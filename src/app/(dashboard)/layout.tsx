import React from 'react'
 import { onLoginUser } from '@/actions/auth'
 import SideBar from '@/components/sidebar'
import { ChatProvider } from '@/context/user-chat-context'
type Props = {
    children: React.ReactNode
  }


const OwnerLayout = async({ children }: Props) => {
  const authenticated = await onLoginUser()
  if (!authenticated) return null
  return (
    <ChatProvider>
    <div className="flex h-screen w-full">
    <SideBar domains={authenticated.domain} />
        <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
      {children}
      
    </div>
    </div>
    </ChatProvider>
  )
}

export default OwnerLayout
