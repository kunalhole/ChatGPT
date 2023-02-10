"use client"
import { signOut, useSession } from "next-auth/react"
import NewChat from "./NewChat"

const SideBar = () => {
  const { data: session } = useSession()
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map througth the ChatRows */}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image}
          onClick={() => signOut()}
          alt="userImage"
          title="LogOut"
          className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer"
        />
      )}
    </div>
  )
}

export default SideBar
