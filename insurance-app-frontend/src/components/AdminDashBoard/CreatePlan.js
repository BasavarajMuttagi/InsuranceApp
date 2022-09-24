import AdminNavBar from "./AdminNavBar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase'
const client = new PocketBase('http://127.0.0.1:8090');

function CreatePlan() {
const [dataObject,setDataObject] = useState('')
const [planType,setplanType] = useState('')
const [planId,setplanId] = useState('')
const [planName,setplanName] = useState('')
const [planImage,setplanImage] = useState('')
const [planDescription,setplanDescription] = useState('')
const [policyTermMin,setpolicyTermMin] = useState('')
const [policyTermMax,setpolicyTermMax] = useState('')
const [minAge,setminAge] = useState('')
const [maxAge,setmaxAge] = useState('')
const [minInvestment,setminInvestment] = useState('')
const [maxInvestment,setmaxInvestment] = useState('')
const [allplantypes,setAllPlanTypes] = useState([])
const [agentRegCom,setAgentRegCom] = useState('')
const [agentImtCom,setAgentImtCom] = useState('')
const [interestRate,setinterestRate] = useState('')
let createLink = ''



const getAllPlanTypes =()=>{
    axios.get('http://localhost:8888/api/getallplantypes')
    .then((response)=>{
        setAllPlanTypes(response.data)
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

useEffect(()=>{getAllPlanTypes()},[])

let AllPlanTypes = Object.values(allplantypes).map((eachPlanType)=>{
  if(eachPlanType.isActive){

    return(
    <>  
         <option key={eachPlanType._id} value={eachPlanType._id} >{eachPlanType.plantype}</option>:""
    </>
    )
  }
})

    const handleCreatePlan =async(e)=>{
        e.preventDefault()
   

          try {
            const formdata =  new FormData()
             formdata.append('image',planImage)
            const createdRecord = await client.records.create('planimage',formdata)
            console.log(createdRecord);
             createLink =  'http://127.0.0.1:8090/api/files/'+createdRecord['@collectionId']+'/'+createdRecord['id']+'/'+createdRecord['image']
            console.log(createLink);
            
          } catch (error) {
              console.log(error);
          }
            

           const data = {
            interestRate:interestRate,
              planType : planType,
              planId : planId,
              planName : planName,
              planImage : createLink,
              planDescription : planDescription,
              policyTermMin : policyTermMin,
              policyTermMax : policyTermMax,
              minAge : minAge,
              maxAge : maxAge,
              minInvestment : minInvestment,
              maxInvestment : maxInvestment,
              agentCommissionForReg:agentRegCom,
              agentCommissionForImt:agentImtCom
          }
          
       await axios.post('http://localhost:8888/api/createplan',data)
        .then((response)=>{
            
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
      
    }
    return ( 
    <>
    <AdminNavBar/>
    <h1 className="text-center">Create A Plan</h1>

    <form className="row g-3 m-3 " onSubmit={e=>handleCreatePlan(e)}  >
  <div className="col-md-4 " >
    <label  className="form-label ">Plan Type</label>
    <select type="text" className="form-control" name="planType" onChange={e=>setplanType(e.target.value) } required>
      <option value={null} disabled>Select A Plan</option>
      {AllPlanTypes}
    </select>
  </div>
  <div className="col-md-4">
    <label className="form-label">Plan ID</label>
    <input type="text" className="form-control" name="planId" onChange={e=>setplanId(e.target.value)} required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Plan Name</label>
    <input  type="text" className="form-control" onChange={e=>setplanName(e.target.value)} name="planName" required/>
  </div>


  <div className="col-md-4">
    <label className="form-label">Policy Term (Min)</label>
    <input  type="text" className="form-control" onChange={e=>setpolicyTermMin(e.target.value)} name="policyTermMin" required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Policy Term (Max)</label>
    <input  type="text" className="form-control" onChange={e=>setpolicyTermMax(e.target.value)} name="policyTermMax" required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Minimum Age</label>
    <input  type="text" className="form-control" onChange={e=>setminAge(e.target.value)} name="minAge" required/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Maximum Age</label>
    <input  type="text" className="form-control" onChange={e=>setmaxAge(e.target.value)} name="maxAge" required/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Min Investment</label>
    <input  type="text" className="form-control" onChange={e=>setminInvestment(e.target.value)} name="minInvestment" required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Max Investment</label>
    <input  type="text" className="form-control" onChange={e=>setmaxInvestment(e.target.value)} name="maxInvestment" required/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Plan Image</label>
    <input  type="file" className="form-control" onChange={e=>setplanImage(e.target.files[0])} name="planImage" required/>
  </div>
  <div className="col-md-4">
    <label className="form-label">Agent Commission for New Registration</label>
    <input  type="text" className="form-control" onChange={e=>setAgentRegCom(e.target.value)}  required/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">Agent Commission for Installment Payment</label>
    <input  type="text" className="form-control" onChange={e=>setAgentImtCom(e.target.value)}  required/>
  </div>
  <div className="col-md-4">
    <label for="inputAddress2" className="form-label">interest Rate</label>
    <input  type="text" className="form-control" onChange={e=>setinterestRate(e.target.value)}  required/>
  </div>
  <div className="col-md-12 bg-light">
    <label  className="form-label">Plan Description</label>
    <ReactQuill theme="snow" className="form-control" onChange={e=>setplanDescription(e)} />
    {/* <textarea  type="textarea" id="textarea" className="form-control" rows={6} onChange={e=>setplanDescription(e.target.value)} name="planDescription" required/> */}
    {/* <TrixEditor   onChange={e=>setplanDescription(e)} /> */}
  </div>
  <div>
       
  </div>
  
  <div className="d-flex justify-content-end">
    <button type="submit" className="btn btn-primary ">Create Plan</button>
  </div>
</form>
    </> );
}

export default CreatePlan;



