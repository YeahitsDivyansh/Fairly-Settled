import Chat from '@/components/Chat'
import Navbar from '@/components/ui/Navbar1/Navbar1'
import React from 'react'
import { useUserAuth } from '@/context/UserAuthContext'
import StaticChat from '@/components/StaticChat'
import Spinner from '@/components/Spinner'

const Chatbot = () => {
  const {userData , loading} = useUserAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Spinner />
      </div>
    )
  }

  return ( 
    <> 
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>

      {/* Chat Area */}
      <div className="relative z-0">
        {userData ? <Chat /> : <StaticChat/>}
      </div>
    </>
  )
}

export default Chatbot
