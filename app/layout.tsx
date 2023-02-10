import SideBar from "../components/SideBar"
import "../styles/globals.css"
import { getServerSession } from "next-auth"
import { authOptions } from "../pages/api/auth/[...nextauth]"

import Login from "../components/Login"
import Providers from "../components/Providers"
import ClientProvider from "../components/ClientProvider"
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)


  return (
    <html>
      <head />
      <body>
        <Providers session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] h-screen max-w-xs overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider-Notification by using React Toaster    */}

            <ClientProvider/>
               


              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </Providers>
      </body>
    </html>
  )
}
