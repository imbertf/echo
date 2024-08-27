'use client'
import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const LoggedUser = {
  username: "Rider on the Block", profilePicture: "https://github.com/shadcn.png"
}

const Layout = ({ children }) => {

  return (
    <div className="bg-custom-gradient min-h-screen w-full flex flex-col sm:flex-row text-white mb-[95px]">
      <div className="w-full">
        <main className="min-h-screen">
          {children}
        </main>
        <Navbar />
      </div>
    </div >
  )
}

export default Layout