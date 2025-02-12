import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apiexample = () => {
    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[id,setid]=useState("")
    const[alldata,setalldata]=useState([])
    
    const SaveData=(e)=>{
        e.preventDefault()
        const obj={
            name:name,
            age:age
        }
        if(id!=""){
            
            axios.put("http://localhost:3000/users/"+id,obj)
            .then(()=>console.log("Data saved.."))

        }else{
            
            axios.post("http://localhost:3000/users",obj)
            .then(()=>console.log("Data saved.."))
        }
        

        setname("")
        setage("")
        setid("")
        disp()
        
    }
    const disp=()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>setalldata(response.data))       
    }
    
    useEffect(()=>{
        disp()
        // console.log("e called");
        
    },[disp()])

    const deldata=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
            .then(()=>console.log("Data Deleted...."))
        desp()

    }
    const editdata=(id)=>{
        axios.patch("http://localhost:3000/users/"+id)
        .then((response)=>{
            setname(response.data.name)
            setage(response.data.age)
            setid(id)
        })
    }
    
  return (
    <div>
      <form   action="#" method="post" onSubmit={SaveData}>
        
        <label htmlFor="">Name:</label>
        <input type="text" id='name' name='name' value={name} onChange={(e)=>setname(e.target.value)}/><br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" value={age} name='age' id='age' onChange={(e)=>setage(e.target.value)}/><br /><br />
        <button type='submit'>{id==""?"Sumbit":"Update"}</button>
      </form><br /><br /><br /><br />   
      <table border={2}>
        <thead >
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Age</td>
                <td colSpan={2}>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td><button onClick={()=>{deldata(i.id)}}>Delete</button></td>
                            <td><button onClick={()=>{editdata(i.id)}}>Edit</button></td>

                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Apiexample
