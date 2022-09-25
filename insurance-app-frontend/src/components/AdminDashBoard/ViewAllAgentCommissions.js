import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";
import AdminNavBar from "./AdminNavBar";

function ViewAllAgentCommissions() {
    const [allTransactions,setAllTransactions] = useState([])
    const role = localStorage.getItem('user')

    const getAllTransactions =async()=>{
        
        await axios.get('http://localhost:8888/api/getalltransactions',{})
        .then((response)=>{
            setAllTransactions(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    let counter = 0
    useEffect(()=>{getAllTransactions()},[])
   let allTransactionsList =  Object.values(allTransactions).map((eachTransaction)=>{
    counter = counter + parseFloat(eachTransaction.comissionAmount)
    if(eachTransaction.agent!=''){
    return(
    <>
  <tr className="">
            <td>{eachTransaction.agent}</td>
            <td>{eachTransaction.planName}</td>
            <td>{eachTransaction.planType}</td>
            <td >{eachTransaction.premiumType}</td>
            <td>{eachTransaction.customer}</td>
            <td >{eachTransaction.comissionAmount}</td>
           <td>{eachTransaction.comissionAmountPaymentStatus === true ? 'Approved':eachTransaction.requestSent === true ? 'RequestPending':'-'}</td>
 </tr>
    </>
    )
   }
   })


   return(
   <>
          { role === 'admin'? <AdminNavBar/> : role === 'employee'? <EmployeeNavBar/>:''}
<div className="text-center m-3"><h1>Agent Commissions</h1></div>
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
                <th scope="col">Request Status</th>
            </tr>
        </thead>
        <tbody>
          {allTransactionsList}
          <tr>
            
            </tr>
        </tbody>
        
    </table>
    <p className="text-end">Total Amount : {counter}</p>
</div>
   </>
   )
    
}

export default ViewAllAgentCommissions;