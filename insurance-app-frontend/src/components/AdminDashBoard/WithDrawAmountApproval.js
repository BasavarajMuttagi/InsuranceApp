import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";
import AdminNavBar from "./AdminNavBar";


function WithDrawAmountApproval() {
let counter = 0
    const [requestList,setRequestList] = useState([])
    const [approvalStatus,setApprovalStatus] = useState([])
    const role = localStorage.getItem('user')
    const getOneAdmin =async()=>{
        await axios.get('http://localhost:8888/api/getadmin',{})
        .then((response)=>{
            setRequestList(response.data[0]['commissionWithdrawalRequests'])
            console.log(response.data[0]['commissionWithdrawalRequests']);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{getOneAdmin()},[approvalStatus])

    const handleRequestApproval=async(transactionObjectId)=>{
        
        await axios.put('http://localhost:8888/api/updatetransaction',{transactionObjectId,property:'comissionAmountPaymentStatus',value:true})
        .then((response)=>{
            setApprovalStatus(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
  

    let allTransactions =  Object.values(requestList).map((eachTransaction)=>{
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
                <td>{eachTransaction.comissionAmountPaymentStatus === false ?  <button type="button" className="btn btn-primary" onClick={()=>{handleRequestApproval(eachTransaction._id)} }>Approve Payment Request</button> :<button type="button" className="btn btn-success" onClick={()=>{handleRequestApproval(eachTransaction._id)} }>Payment Approved</button>}</td>
     </tr>
        </>
        )
       })
    
    
       return(
       <>
       { role === 'admin'? <AdminNavBar/> : role === 'employee'? <EmployeeNavBar/>:''}
    <div className="text-center m-3"><h1>Commission Requests</h1></div>
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
                    <th scope="col">Request Payment</th>
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

export default WithDrawAmountApproval;
