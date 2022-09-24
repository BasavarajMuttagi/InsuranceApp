import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditPlanType() {
    const location = useLocation();
    const [onePlanType,setOnePlanType] = useState([])
    const [property,setProperty] = useState('')
    const [valueForProperty,setValue] = useState('')

    
    const getOnePlanType =async()=>{
        const planTypeId = location.state.planTypeId
        console.log(planTypeId);
        await axios.post('http://localhost:8888/api/getoneplantype',{planTypeId})
        .then((response)=>{
            setOnePlanType(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOnePlanType()},[])



    const handleUpdatePlanType =async(planTypeId,property,value)=>{
    
        await axios.put('http://localhost:8888/api/updateplantype',{planTypeId,property,value})
        .then((response)=>{
            
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }





    const unWanted = ['createdAt','__v','updatedAt','_id','planImage','documents','plans','isActive']
    const keys = Object.keys(onePlanType)
    const finalArry =  keys.filter(item => !unWanted.includes(item));
    let planTypeProperties = Object.values(finalArry).map((eachProperty)=>{
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
      <label for="" className="form-label"></label>
      <select className="form-control" onChange={e=>setProperty(e.target.value)}>
        <option value={null}>select A property</option>
        {planTypeProperties}
      </select>
    </div>
    
 <input type="text" className="form-control" placeholder="Enter Changes" onChange={e=>setValue(e.target.value)} required/> 
    
<div className="text-center">
     <button type="button" className="btn btn-primary m-2" onClick={()=>{handleUpdatePlanType(location.state.planTypeId,property,valueForProperty)}}>Update</button>
	 </div>
</div>
    );
}

export default EditPlanType;