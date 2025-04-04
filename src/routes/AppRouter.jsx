import { Route, Routes } from "react-router"
import Home from '../app/home/Home'
import Pokedex from '../app/pokedex/Pokedex'
import Pokemon from '../app/pokemon/Pokemon'
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoute from "./PublicRoute"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Home/></PublicRoute>}/>

      <Route path="/pokedex" element={<ProtectedRoutes/>} >
      <Route index element={<Pokedex/>}/>
      <Route path=":name" element={<Pokemon/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter
