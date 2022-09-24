import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function EditEmployeeInEmployee() {
    const location = useLocation();
    const [oneAgent,setOneAgent] = useState([])
    const [property,setProperty] = useState('')
    const [valueForProperty,setValue] = useState('')

    const getOneAgent =async()=>{
        // const userName = location.state.userName
        const userName = localStorage.getItem('userName')
    console.log(userName);
        await axios.post('http://localhost:8888/api/getoneemployeusingusername',{userName})
        .then((response)=>{
            setOneAgent(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneAgent()},[])



    const handleUpdateAgent =async(userName,property,value)=>{
       
        await axios.put('http://localhost:8888/api/updateemployeeusingusername',{userName,property,value})
        .then((response)=>{
            
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }





    const unWanted = ['createdAt','__v','updatedAt','_id','planImage','planType','documents']
    const keys = Object.keys(oneAgent)
    const finalArry =  keys.filter(item => !unWanted.includes(item));
    let AgentProperties = Object.values(finalArry).map((eachProperty)=>{
        return(
        <>
        <option key={eachProperty} value={eachProperty}>{eachProperty}</option>
        </>
        )
    })


    return (

    <div className="mb-3 m-5">
        <h1 className="text-center">Edit  Propetry</h1>
    <div className="mb-3">
      <label for="" className="form-label">City</label>
      <select className="form-control" onChange={e=>setProperty(e.target.value)}>
        <option value={null}>select A property</option>
        {AgentProperties}
      </select>
    </div>
    {
       <input type="text" className="form-control" placeholder="Enter Changes" onChange={e=>setValue(e.target.value)} required/>
        
    }
<div class="text-center">
     <button type="button" class="btn btn-primary m-2" onClick={()=>{handleUpdateAgent(localStorage.getItem('userName'),property,valueForProperty)}}>Update</button>
	 </div>
</div>
    );
}

export default EditEmployeeInEmployee;