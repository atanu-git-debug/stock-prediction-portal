import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
        
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex porro similique facilis. Quisquam est modi eaque blanditiis doloremque suscipit accusantium, voluptatem quibusdam facilis nostrum nesciunt, necessitatibus illo commodi praesentium?</p>
                <div>
                    <Button text='Explore Now' url="/dashboard" className='btn-info' />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Main