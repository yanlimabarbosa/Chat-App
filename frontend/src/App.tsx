import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/login"

export function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Login />
    </div>
  )
}
