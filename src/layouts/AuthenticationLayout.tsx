import { Outlet } from "react-router-dom"

const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <img src="/assets/img/bg.png" className="absolute object-cover w-full h-full opacity-20" />
      <Outlet />
    </div>
  )
}

export default AuthenticationLayout