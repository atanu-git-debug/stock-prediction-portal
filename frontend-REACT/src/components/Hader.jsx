import React from 'react'
import Button from './Button'

const Hader = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a  className='navbar-brand text-light'>Stock Prediction Portal</a>
            <div>
                <Button text='Login' class='btn-outline-info'/>
                    &nbsp;
                <Button text='Sign Up' class='btn-info'/>
            </div>
        </nav>
    </>
  )
}

export default Hader