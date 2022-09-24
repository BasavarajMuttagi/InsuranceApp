import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditEmployee() {
    const location = useLocation();
    const [oneEmployee,setOneEmployee] = useState([])
    const [property,setProperty] = useState('')
    const [valueForProperty,setValue] = useState('')

    
    const getOneEmployee =async()=>{
        const employeeId = location.state.EmployeeId
        console.log(employeeId);
        await axios.post('http://localhost:8888/api/getoneEmployee',{employeeId})
        .then((response)=>{
            setOneEmployee(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneEmployee()},[])



    const handleUpdateEmployee =async(employeeId,property,value)=>{
    
        await axios.put('http://localhost:8888/api/updateEmployee',{employeeId,property,value})
        .then((response)=>{
            
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }





    const unWanted = ['createdAt','__v','updatedAt','_id','planImage','planType','documents']
    const keys = Object.keys(oneEmployee)
    const finalArry =  keys.filter(item => !unWanted.includes(item));
    let EmployeeProperties = Object.values(finalArry).map((eachProperty)=>{
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
        {EmployeeProperties}
      </select>
    </div>
    {
        property === 'planDescription'?  <ReactQuill theme="snow" className="form-control" onChange={e=>setValue(e)} /> : <input type="text" className="form-control" placeholder="Enter Changes" onChange={e=>setValue(e.target.value)} required/>
        
    }
<div class="text-center">
     <button type="button" class="btn btn-primary m-2" onClick={()=>{handleUpdateEmployee(location.state.EmployeeId,property,valueForProperty)}}>Update</button>
	 </div>
</div>
    );
}

export default EditEmployee;