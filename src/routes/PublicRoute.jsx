import { useName } from "../hooks/useName"
import { Navigate, Outlet } from "react-router"

function PublicRoute({children}) {
    const {name} = useName()
 if (name) {
   return <Navigate to='/pokedex'/>
 }
  return children ? children : <Outlet/>
}

export default PublicRoute
