
import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import parse from 'html-react-parser';
function ViewPlans() {
    const [allplans,setAllPlans] = useState([])
    
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
    useEffect(()=>{getAllPlanTypes()},[])


    let AllPlans = Object.values(allplans).map((eachPlan)=>{
        return(
            
    
   <div className=" p-5 bg-opacity-100 ">


                <div >
                    {/* <h3 key={eachPlan.planType} className="col-md-12">Plan Type :{eachPlan.planType}</h3>
                    <h3 key={eachPlan.planId} className="col-md-12">Plan ID:{eachPlan.planId}</h3> */}
                    <h1 key={eachPlan.planName}  className="col-md-12 bg-warning text-center rounded-1">{eachPlan.planName} </h1>
                    
                    <img key={eachPlan.planImage} src={eachPlan.planImage} height={600} className="col-md-12 shadow-lg p-3 mb-5 bg-body rounded "></img>
                    <h1>Plan Description</h1>
                    <pre className="col-md-12 bg-primary p-4 bg-opacity-75 shadow-lg p-3 mb-5 rounded text-wrap">{parse(eachPlan.planDescription)}</pre>
                
                </div>

                    <br></br>

                    <h1>Plan Details</h1>
                   
                 <table className="table  text-dark border border-dark table-bordered">
                        <tr >
                            <th className=" p-4">Policy Term(Min) in Years</th>
                            <th  className=" p-4" key={eachPlan.policyTermMin}>{eachPlan.policyTermMin}</th>
                        </tr>

                        <tr >
                            <th  className=" p-4">Policy Term(Max) in Years</th>
                            <th  className=" p-4" key={eachPlan.policyTermMax}>{eachPlan.policyTermMax}</th>
                        </tr>
                        <tr >
                            <th className=" p-4" >Minimum Age in Years</th>
                            <th  className=" p-4" key={eachPlan.minAge}>{eachPlan.minAge}</th>
                         </tr>
                        <tr >
                            <th className=" p-4" >Maximum Age in Years</th>
                            <th  className=" p-4" key={eachPlan.maxAge}>{eachPlan.maxAge}</th>
                        </tr>
                        <tr >
                            <th className=" p-4" >Minimum Investment (₹)</th>
                            <th  className=" p-4" key={eachPlan.minInvestment}>{eachPlan.minInvestment}</th>
                        </tr>
                        <tr >
                            <th className=" p-4" >Maximum Investment (₹)</th>
                            <th  className=" p-4" key={eachPlan.maxInvestment}>{eachPlan.maxInvestment}</th>
                        </tr>
                 </table>
             
            
            <div class="mt-5  bg-dark text-white text-center">******</div>
            
        </div>
       
        )
    })
       
        
      
        
        
    
    
    return (
    
     <>
    <AdminNavBar/>
    {AllPlans}
    </>
     );
}


export default ViewPlans;