"use client"
import { collection, orderBy, query } from "firebase/firestore"
import { signOut, useSession } from "next-auth/react"
import { db } from "../firebase"
import NewChat from "./NewChat"
import { useCollection } from "react-firebase-hooks/firestore"
import ChatRow from "./ChatRow"
import ModelSelection from "./ModelSelection"

const SideBar = () => {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  )

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {/* Map througth the ChatRows */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                Loading Chats...
              </div>
            )}
            {chats?.docs.map((chat) => {
              return <ChatRow key={chat.id} id={chat.id} />
            })}
          </div>
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
