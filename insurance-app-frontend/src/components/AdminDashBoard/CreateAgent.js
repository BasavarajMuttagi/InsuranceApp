import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";


function CreateAgent() {
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
  const validUser = localStorage.getItem('user')
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
    if(eachRole.role === 'agent'){
        return(
          <option  key={eachRole.role} value={eachRole._id}>{eachRole.role}</option>
        )
    }
   })
    
   const handleCreateAgent=async(e)=>{
    e.preventDefault()
    let data = {
        role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city
     }
     console.log(data);
    
 
     await axios.post('http://localhost:8888/api/createagent',{role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city})
     .then((response)=>{
         setCreateStatus(response)

         console.log(response);
     })
     .catch((error)=>{
         console.log(error.response.data);
         setCreateStatus(error.response.data)
     })
    
   }

   const SuccessToast =()=>{
    return (
      <div>
      {  toast.success(createStatus.data)}
        <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
      </div>
    );

  } 

  const WarnToast =()=>{
    return (
      <div>
      {  toast.warn(createStatus.data)}
        <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
      </div>
    );

  }

    return (  
        <>
       { validUser === 'admin'? <AdminNavBar/> : validUser === 'employee'? <EmployeeNavBar/>:''}
   <h1 className="text-center">Create Agent</h1>

<form className="row g-3 m-3 " onSubmit={handleCreateAgent} >
<div className="col-md-4 " >
<label  className="form-label ">Role</label>
<select type="text" className="form-control" onChange={e=>setRole(e.target.value)} >
  <option value={'Select A Role'} >Select A Role</option>
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
{/* { createStatus.status === 201 ?SuccessToast() :WarnToast()} */}
<div className="d-flex justify-content-center">
<button type="submit" className="btn btn-primary ">Create</button>
</div>
</form>



        </>
    );
}

export default CreateAgent;