"use client"
import { collection, orderBy, query } from "firebase/firestore"
import { signOut, useSession } from "next-auth/react"
import { db } from "../firebase"
import NewChat from "./NewChat"
import { useCollection } from "react-firebase-hooks/firestore"
import ChatRow from "./ChatRow"

const SideBar = () => {
  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  )

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map througth the ChatRows */}

          {chats?.docs.map((chat) => {
            return <ChatRow key={chat.id} id={chat.id} />
          })}
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
