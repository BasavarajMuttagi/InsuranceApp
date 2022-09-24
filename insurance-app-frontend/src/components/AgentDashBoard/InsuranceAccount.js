import axios from "axios";
import { useEffect, useState } from "react";
import AgentNavBar from "./AgentNavBar";

function InsuranceAccountInAgent() {
    
    const [OneCustomer,setOneCustomer] = useState([])
    const getOneCustomer =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getoneagentusingusername',{userName})
        .then((response)=>{
            setOneCustomer(response.data['transactions'])
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{getOneCustomer()},[])

   const filtered =  OneCustomer.filter((eachTransaction)=>eachTransaction.premiumType === 'FirstPremium')
   let allAccounts =  Object.values(filtered).map((eachTransaction)=>{
  
    return(
    <>
  <tr className="">
            <td>{eachTransaction.planType}</td>
            <td>{eachTransaction.planName}</td>
            <td>{eachTransaction.customer}</td>
            <td >{eachTransaction.DateCreated}</td>
            <td>{new Date(Date.parse(eachTransaction.MaturityDate)).toLocaleDateString()}</td>
            <td >{eachTransaction.totalInvestment}</td>
            <td >{eachTransaction.SumAssured}</td>
            <td>{eachTransaction.premiumType}</td>
 </tr>
    </>
    )
    

   })


   return(
   <>
   <AgentNavBar/>
<div className="text-center m-3"><h1>View Insurance Accounts</h1></div>
   <div className="table-responsive m-5">
    <table className="table table-bordered ">
        <thead>
            <tr>
  
                <th scope="col">Plan Type</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Customer UserName</th>
                <th scope="col">Date Created</th>
                <th scope="col">Maturity Date</th>
                <th scope="col">Total Investment</th>
                <th scope="col">Sum Assured</th>
                <th scope="col">Premium Type</th>

            </tr>
        </thead>
        <tbody>
          {allAccounts}
          <tr>
            
            </tr>
        </tbody>
        
    </table>

</div>
   </>
   )
    
}



export default InsuranceAccountInAgent;