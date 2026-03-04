import './assets/css/style.css'
import Main from './components/Main'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Register from './components/Register'
import Hader from './components/Hader'
import Footerbar from './components/Footerbar'
import Login from './components/Login'
import AuthProvider from './AuthProvider'

function App() { 

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Hader/>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='register/' element={<Register/>} />
            <Route path='login/' element={<Login/>} />
          </Routes>
          <Footerbar/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
