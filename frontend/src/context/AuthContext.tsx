import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../api/AxiosInstance'

type AuthUserType = {
  id: string
  fullname: string
  email: string
  profilePic: string
  gender: string
}

type AuthContextType = {
  authUser: AuthUserType | null
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  authUser: null,
  setAuthUser: () => { },
  isLoading: true,
})

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await api.get('/api/auth/me')
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data.error)
        }
        setAuthUser(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAuthUser()
  }, [])

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
