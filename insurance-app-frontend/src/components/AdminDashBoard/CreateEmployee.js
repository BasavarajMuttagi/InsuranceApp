import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";

function CreateEmployee() {
   const [role,setRole] = useState('') 
   const [firstName,setFirstName] = useState('')
   const [lastName,setLastName] = useState('')
   const [DOB,setDOB] = useState('')
   const [userName,setuserName] = useState('')
   const [password,setPassword] = useState('')
   const [phone,setPhone] = useState('')
   const [email,setEmail] = useState('')
   const [city,setCity] = useState('')
   const [state,setStates] = useState('')
   const [country,setCountry] = useState('')
   const [address,setAddress] = useState('')
   const [allRoles,setAllRoles] = useState([])
   const [createStatus,setCreateStatus] = useState('')

   useEffect(()=>{handleGetRoles()},[])
   const handleGetRoles=(e)=>{
        axios.get('http://localhost:8888/api/getallroles',{})
        .then((response)=>{
            setAllRoles(response.data)

          console.log(response);
      })
      .catch((error)=>{
          console.log(error);
      })
   }

   let AllRolesList = Object.values(allRoles).map((eachRole)=>{
    if(eachRole.role === 'employee'){
        return(
          <option key={eachRole.role} value={eachRole._id}>{eachRole.role}</option>
        )
    }
   })
    
   const handleCreateEmployee=async(e)=>{
    e.preventDefault()
    let data = {
        role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city
     }
     console.log(data);
  
      await axios.post('http://localhost:8888/api/createemployee',{role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city})
     .then((response)=>{
         setCreateStatus(response)
         console.log(response);
     })
     .catch((error)=>{
        setCreateStatus(error.response.data)
         console.log(error);
     })
    
   }

    return (  
        <>
   <AdminNavBar/>
   <h1 className="text-center">Create Employee</h1>

<form className="row g-3 m-3 " onSubmit={handleCreateEmployee} >
<div className="col-md-4 " >
<label  className="form-label ">Role</label>
<select type="text" className="form-control" onChange={e=>setRole(e.target.value)} >
  <option value={null} >Select A Role</option>
  {AllRolesList}
</select>
</div>
<div className="col-md-4">
<label className="form-label">First Name</label>
<input type="text" className="form-control" onChange={e=>setFirstName(e.target.value)} required/>
</div>

<div className="col-md-4">
<label className="form-label">Last Name</label>
<input  type="text" className="form-control"onChange={e=>setLastName(e.target.value)} required/>
</div>

<div className="col-md-4">
<label  className="form-label">Email</label>
<input  type="text" className="form-control" onChange={e=>setEmail(e.target.value)} required/>
</div>

<div className="col-md-4">
<label className="form-label">Username</label>
<input  type="text" className="form-control" onChange={e=>setuserName(e.target.value)} required/>
</div>

<div className="col-md-4">
<label className="form-label">Password</label>
<input  type="text" className="form-control" onChange={e=>setPassword(e.target.value)} required/>
</div>

<div className="col-md-4">
<label className="form-label">Date Of Birth</label>
<input  type="date" className="form-control"onChange={e=>setDOB(e.target.value)} required/>
</div>

<div className="col-md-4">
<label for="inputAddress2" className="form-label">Phone</label>
<input  type="text" className="form-control" onChange={e=>setPhone(e.target.value)} required/>
</div>

<div className="col-md-4">
<label className="form-label">Country</label>
<input  type="text" className="form-control"onChange={e=>setCountry(e.target.value)} required/>
</div>

<div className="col-md-4">
<label for="inputAddress2" className="form-label">State</label>
<input  type="text" className="form-control" onChange={e=>setStates(e.target.value)} required/>
</div>

<div className="col-md-4">
<label for="inputAddress2" className="form-label">City</label>
<input  type="text" className="form-control" onChange={e=>setCity(e.target.value)} required/>
</div>

<div className="col-md-4">
<label for="inputAddress2" className="form-label">Address</label>
<textarea  type="text" className="form-control" onChange={e=>setAddress(e.target.value)} required/>
</div>
<h1-6 m-2>Message :<span className="badge bg-primary m-2">{createStatus.data}</span></h1-6>
<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-primary ">Create Plan</button>
</div>
</form>
   
        </>
    );
}

export default CreateEmployee;