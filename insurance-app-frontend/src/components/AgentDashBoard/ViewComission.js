import axios from "axios";
import { useEffect, useState } from "react";
import AgentNavBar from "./AgentNavBar";



function ViewComissionInAgent() {

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

    let counter = 0
    useEffect(()=>{getOneCustomer()},[])
   let allTransactions =  Object.values(OneCustomer).map((eachTransaction)=>{
    counter = counter + parseFloat(eachTransaction.comissionAmount)
    return(
    <>
  <tr className="">
            <td>{eachTransaction.agent}</td>
            <td>{eachTransaction.planName}</td>
            <td>{eachTransaction.planType}</td>
            <td >{eachTransaction.premiumType}</td>
            <td>{eachTransaction.customer}</td>
            <td >{eachTransaction.comissionAmount}</td>
 </tr>
    </>
    )
   })


   return(
   <>
   <AgentNavBar/>
<div className="text-center m-3"><h1>View Commission</h1></div>
   <div className="table-responsive m-5">
    <table className="table table-bordered ">
        <thead>
            <tr>
                <th scope="col">Agent UserName</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Plan Type</th>
                <th scope="col">Premium Type</th>
                <th scope="col">Customer UserName</th>
                <th scope="col">commission Amount (₹)</th>
            </tr>
        </thead>
        <tbody>
          {allTransactions}
          <tr>
            
            </tr>
        </tbody>
        
    </table>
    <p className="text-end">Total Amount : {counter}</p>
</div>
   </>
   )
    
}

export default ViewComissionInAgent;