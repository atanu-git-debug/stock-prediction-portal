import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
        
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>AI-Driven Stock Prediction Platform. <br />

Explore stock market trends using machine learning. This platform analyzes historical data and uses deep learning models to forecast possible future price movements, providing insights through interactive charts and analytics.

Start exploring smarter market predictions today.</p>
                <div>
                    <Button text='Explore Now' url="/dashboard" className='btn-info' />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Main