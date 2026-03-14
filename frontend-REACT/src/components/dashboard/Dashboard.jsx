import axios from 'axios'
import React, {use, useEffect,useState} from 'react'
import AxiosInstance from '../../AxiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    const [ticker,setTicker] = useState('');
    const [error,setError] = useState();
    const [loadin,setLoading] = useState(false)
    const [plot,setPlot] = useState()
    const [ma100,setma100]= useState()
    const [ma200,setma200]= useState()
    const [prediction,setPrediction] = useState()
    const [mse,setMse] = useState()
    const [rmse,setRmse] = useState()
    const [r2,setR2] = useState()
    useEffect(() =>{
        const fetchProtectedData = async () =>{
            try {
                const response = await AxiosInstance.get('/protected-view/')
                console.log('Success: ',response.data);
                
            } catch (error) {
                console.error("Error fetching data",error);
            }
        }
        fetchProtectedData();
    },[])



    const handelSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            const response = await AxiosInstance.post('/predict/',{
                    ticker:ticker
                }
            )
            console.log(response.data);
            const backend_root = import.meta.env.VITE_BACKEND_ROOT
            const ploturl = `${backend_root}${response.data.plot_img}`
            const ma100url = `${backend_root}${response.data.plot_100_dma}`
            const ma200url = `${backend_root}${response.data.plot_200_dma}`
            const predictionurl = `${backend_root}${response.data.plot_prediction}`
            console.log(ploturl);
            setPlot(ploturl)
            setma100(ma100url)
            setma200(ma200url)
            setPrediction(predictionurl)
            setMse(response.data.mse)
            setRmse(response.data.r2)
            setR2(response.data.r2)
            // set plot
            if (response.data.error){
                setError(response.data.error)
            }
            
        } catch (error) {
            console.log('There was an error makin the api request');
            
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handelSubmit}>
                        <input type="text" placeholder='Enter stock ticker' className="form-control" onChange={(e)=>setTicker(e.target.value)} required />
                        <small>{error && <div className='text-danger'>{error}</div>}</small>
                        <button type='submit'className='btn btn-info mt-3'>
                            {loadin ? <span><FontAwesomeIcon icon={faSpinner} spin />Please Wait...</span>:'Predict' }
                        </button>
                    </form>
                </div>
                {/* {print prediction plots} */}
                {prediction && (
                    <>
                        <div className="prediction mt-5">
                    <div className="p-3">
                        {plot && (
                            <img src={plot} alt="" style={{maxWidth:'100%'}} />
                        ) }
                    </div>
                </div>
                <div className="prediction mt-5">
                    <div className="p-3">
                        {ma100 && (
                            <img src={ma100} alt="" style={{maxWidth:'100%'}} />
                        ) }
                    </div>
                </div>
                <div className="prediction mt-5">
                    <div className="p-3">
                        {ma200 && (
                            <img src={ma200} alt="" style={{maxWidth:'100%'}} />
                        ) }
                    </div>
                </div>
                <div className="prediction mt-5">
                    <div className="p-3">
                        {prediction && (
                            <img src={prediction} alt="" style={{maxWidth:'100%'}} />
                        ) }
                    </div>
                </div>
                <div className="text-light p3">
                        <h4>
                            Model Evalulation
                        </h4>
                        <p>Mean Squeared Error (MSE) : {mse} </p>
                        <p>Root Mean Squeared Error (RMSE) : {rmse} </p>
                        <p>R-Squered : {r2} </p>
                </div>

                    </>
                ) }
                
            </div>
        </div>
    </>
  )
}

export default Dashboard