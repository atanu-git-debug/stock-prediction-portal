import './assets/css/style.css'
import Main from './components/Main'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Register from './components/Register'
import Hader from './components/Hader'
import Footerbar from './components/Footerbar'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() { 

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Hader/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='register/' element={<PublicRoute><Register/></PublicRoute>} />
            <Route path='login/' element={<PublicRoute><Login/></PublicRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          </Routes>
          <Footerbar/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
