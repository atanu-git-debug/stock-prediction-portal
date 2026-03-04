import  { useContext } from 'react'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Hader = () => {
    const {isloggedin,setLoggedin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handelLogout = () =>{
        localStorage.removeItem(
            'accessToken'
        )
        localStorage.removeItem(
            'refreshToken'
        )
        setLoggedin(false)
        console.log("Logged Out");
        
        navigate('/login')
    }
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link  className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>
            <div>
                {isloggedin ?(
                    
                    <>
                        <button className='btn btn-danger' onClick={handelLogout} >Logout</button>
                        {" "}
                        <Button text='Dashboard' className='btn-outline-info' url='/dashboard'/>
                    </>
                ):(
                    <>
                        <Button text='Login' className='btn-outline-info' url='/login'/>
                        &nbsp;
                        <Button text='Sign Up' className='btn-info' url='/register'/>
                    </>
                )}
                
            </div>
        </nav>
    </>
  )
}

export default Hader