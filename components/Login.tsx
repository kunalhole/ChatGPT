"use client"
import Image from "next/image"
import { signIn } from "next-auth/react"
const Login = () => {
  return (
    <div className="bg-[#11A37f] h-screen flex justify-center items-center flex-col">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />

      <button
        onClick={() => signIn("google")}
        className="text-3xl text-white font-bold animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  )
}

export default Login
