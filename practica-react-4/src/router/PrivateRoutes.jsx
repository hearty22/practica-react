import { Navigate, Outlet } from "react-router"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"

export const PrivateRoutes = () => {
    const isLogged = localStorage.getItem("isLogged")
  return (
    isLogged ? <Outlet/> : (<Navigate to="/login"/>)
  )
}
