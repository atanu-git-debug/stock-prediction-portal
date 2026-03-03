import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


const Hader = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link  className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>
            <div>
                <Button text='Login' className='btn-outline-info' url='/login'/>
                    &nbsp;
                <Button text='Sign Up' className='btn-info' url='/register'/>
            </div>
        </nav>
    </>
  )
}

export default Hader