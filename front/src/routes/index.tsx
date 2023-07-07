import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Register } from "../pages/register"
import { Login } from "../pages/login"

export const RoutesMain = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    )
}