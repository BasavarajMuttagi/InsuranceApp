import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AdminNavBar from "./AdminNavBar";

function EditPlan() {
    const location = useLocation();
    const [onePlan,setOnePlan] = useState([])
    const [property,setProperty] = useState('')
    const [valueForProperty,setValue] = useState('')
    const [planDescription,setplanDescription] = useState()
    
    const getOnePlan =async()=>{
        const planId = location.state.planId
        await axios.post('http://localhost:8888/api/getoneplan',{planId})
        .then((response)=>{
            setOnePlan(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOnePlan()},[])



    const handleUpdatePlan =async(planId,property,value)=>{
    
        await axios.put('http://localhost:8888/api/updateplan',{planId,property,value})
        .then((response)=>{
            
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }





    const unWanted = ['createdAt','__v','updatedAt','_id','planImage','planType','documents']
    const keys = Object.keys(onePlan)
    const finalArry =  keys.filter(item => !unWanted.includes(item));
    let planProperties = Object.values(finalArry).map((eachProperty)=>{
        return(
        <>
        <option key={eachProperty} value={eachProperty}>{eachProperty}</option>
        </>
        )
    })


    return (
<>
<AdminNavBar/>
    <div className="mb-3 m-5">
        <h1 className="text-center">Edit  Propetry</h1>
    <div className="mb-3">
      <label for="" className="form-label"></label>
      <select className="form-control" onChange={e=>setProperty(e.target.value)}>
        <option value={null}>select A property</option>
        {planProperties}
      </select>
    </div>
    {
        property === 'planDescription'?  <ReactQuill theme="snow" className="form-control" onChange={e=>setValue(e)} /> : <input type="text" className="form-control" placeholder="Enter Changes" onChange={e=>setValue(e.target.value)} required/>
        
    }
<div class="text-center">
     <button type="button" class="btn btn-primary m-2" onClick={()=>{handleUpdatePlan(location.state.planId,property,valueForProperty)}}>Update</button>
	 </div>
</div>
</>);
}

export default EditPlan;