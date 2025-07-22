import { useState } from 'react'
import "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from 'react-router-dom'
import '../evaluation-service/logs.jsx'
import Log from '../evaluation-service/logs.jsx'

function getInput(){
    const [count, setCount] = useState(0)
    const handleChange= (e) => {
    const[name,value]=e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]:value
    }))
  }

  nav=useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/',formData)
    .then(result => {
        Log("Frontend","info","api",result)
        if(result === "Success"){
            nav('/out')
        }
    })
    .catch(error=>Log("Frontend","Error","api",error))
  }
  const [formData, setFormData]=useState({
    url:"",
    validity:30,
    shortcode:""

  })

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">URL Shortener</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text" 
              name="url" 
              placeholder="Enter URL" 
              value={formData.url} 
              onChange={handleChange} 
              className="form-control"
              required
            />
          </div>
            <div className="mb-3">
            <input 
              type="number" 
              name="validity"  
              value={formData.validity} 
              onChange={handleChange} 
              className="form-control"
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="shortcode" 
              placeholder="Enter shortcode" 
              value={formData.shortcode} 
              onChange={handleChange} 
              className="form-control"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100"
          >
            Shorten URL
          </button>
        </form>
      </div>
    </div>
  )
}

export default getInput