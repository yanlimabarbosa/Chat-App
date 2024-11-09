import { Navigate, Route, Routes } from 'react-router-dom'

import { useAuthContext } from './context/AuthContext'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SignUp } from './pages/signup'

export function App() {
  const { authUser, isLoading } = useAuthContext()
  if (isLoading) return null
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={'/login'} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to={'/'} />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>
  )
}
