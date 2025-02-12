import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import "./app.css"
const baseURL = "https://fakestoreapi.com/products"
const ApiGet = () => {
  const [my_data, setmy_data] = useState([])
  useEffect(() => {
    Axios.get(baseURL).then((response) => {

      setmy_data(response.data)
    })
  
    
  },[])
  return (
    <div className='moin'>
      <h1>All Data Of API</h1>
     <table border={2}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Price</td>
          <td>Description</td>
          <td>Category</td>
          <td>Image</td>
          <td>rating</td>

        </tr>
      </thead>
      <tbody>
        {
          my_data.map((i)=>{
            
            return(
              <tr>
                <td>{i.id}</td>
                <td>{i.title.slice(0,5)}</td>
                <td>{i.price}</td>
                <td>{i.description}.spl</td>
                <td>{i.category}</td>
                
                <td>
                <img src={i.image} alt={i.title} width="50" height="50" />
                </td>
                <td>{i.rating.rate}</td>

              </tr>
            )
          })
        }
      </tbody>
     </table>
      
     </div>
  )
}

export default ApiGet
