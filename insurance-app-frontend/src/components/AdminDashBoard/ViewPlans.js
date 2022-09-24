
import axios from "axios";
import { useEffect, useState } from "react";

import AdminNavBar from "./AdminNavBar";
import parse from 'html-react-parser';
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
function ViewPlans() {
    const navigation = new useNavigate()
    const [allplans,setAllPlans] = useState([])
    const [currentState,setCurrentState]= useState('')
    const getAllPlanTypes =()=>{
        axios.get('http://localhost:8888/api/getallplans')
        .then((response)=>{
            setAllPlans(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getAllPlanTypes()},[currentState])

    const toggleSwitch =async(planId,currentState)=>{
        console.log(planId,currentState);
       await axios.put('http://localhost:8888/api/toggleSwitchPlan',{planId,currentState})
        .then((response)=>{
            setCurrentState(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    let AllPlans = Object.values(allplans).map((eachPlan)=>{
        return(
        <>
<tr  height="100%" >
                    <td key={eachPlan.planId}>{eachPlan.planId}</td> 
                    <td key={eachPlan.planType} >{eachPlan.planType.plantype}</td>
                    <td key={eachPlan.planName}  >{eachPlan.planName} </td>
                    
                 <td>   <img key={eachPlan.planImage} src={eachPlan.planImage} height={100} width={100} className="col-md-12 shadow-lg p-3 mb-5 bg-body rounded "></img></td>
 
                    {/* <td height="100%" >     <pre  className="text-wrap overflow-scroll">{(eachPlan.planDescription)}</pre></td> */}
                
                            <td   key={eachPlan.policyTermMin}>{eachPlan.policyTermMin}</td>
                       

                     
                            
                            <td   key={eachPlan.policyTermMax}>{eachPlan.policyTermMax}</td>
                     
 
                            <td   key={eachPlan.minAge}>{eachPlan.minAge}</td>
                         
                        
       
                            <td   key={eachPlan.maxAge}>{eachPlan.maxAge}</td>
                    

                            <td   key={eachPlan.minInvestment}>{eachPlan.minInvestment}</td>
                    
  
                            <td   key={eachPlan.maxInvestment}>{eachPlan.maxInvestment}</td>
                            <td   key={eachPlan.maxInvestment}><button type="button" class="btn btn-primary" onClick={()=>{navigation('/editplan',{state:{planId:eachPlan._id}})}}>Edit</button></td>
                            <td><ReactSwitch onChange={()=>toggleSwitch(eachPlan._id,eachPlan.isActive)} checked={eachPlan.isActive}></ReactSwitch></td>
                            </tr>
        </>)
    })
  
       
        
      
        
        
    
    
    return (
     <>
    <AdminNavBar/>
    <div className="table-responsive m-5">
    <table className="table  table-bordered">
        <thead>
            <tr>
                <th scope="col">Plan ID</th>
                <th scope="col">Plan Type</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Plan Image</th>
                {/* <th scope="col" >Plan Description</th> */}
                <th scope="col">Policy Term(Min) in Years</th>
                <th scope="col">Policy Term(Max) in Years</th>
                <th scope="col">Minimum Age in Years</th>
                <th scope="col">Maximum Age in Years</th>
                <th scope="col">Minimum Investment (₹)</th>
                <th scope="col">Maximum Investment (₹)</th>
                <th scope="col">Edit</th> 
                <th scope="col">Toggle</th>
            </tr>
        </thead>
        <tbody>
            
            {AllPlans}
    
        </tbody>
    </table>
</div>
  
    </>
     );
}


export default ViewPlans;


