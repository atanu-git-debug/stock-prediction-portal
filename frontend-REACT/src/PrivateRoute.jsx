import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {isloggedin} = useContext(AuthContext)
  return isloggedin ?(
        children
  ):(
    <Navigate to='/login' />
  )
  
}

export default PrivateRoute