import { useName } from "../hooks/useName"
import { Navigate, Outlet } from "react-router"

function ProtectedRoutes( {children} ) {
 const {name} = useName()
 if (!name) {
   return <Navigate to='/'/>
 }
 return  children ? children : <Outlet/>
}

export default ProtectedRoutes
