import Footer from "@/components/Footer"
import {Header} from "@/components/Header"
import AuthHandler from "@/handlers/AuthHandler"
import { Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <div className="w-full">
        {/* handler to store the user data */}
        <AuthHandler />
        <Header />

        <Outlet />

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default PublicLayout