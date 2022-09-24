import axios from "axios";
import { useEffect, useState } from "react";
import AgentNavBar from "./AgentNavBar";



function WithDrawAmountInAgent() {

    useEffect(()=>{getOneCustomer()},[])

    const [OneAdmin,setOneAdmin] = useState([])
    const [OneCustomer,setOneCustomer] = useState([])
    const [requestStatus,setRequestStatus] = useState(false)
    const [requestSent,setRequestSent] = useState(false)

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

    useEffect(()=>{getOneAdmin()},[requestSent])

    const getOneAdmin =async()=>{
        await axios.get('http://localhost:8888/api/getadmin',{})
        .then((response)=>{
            setOneAdmin(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

  
    const bothrequests=(transactionObjectId)=>{
        handleRequestPayment(transactionObjectId)
        handleRequestToggle(transactionObjectId)
    }

    const handleRequestPayment=async(value)=>{
        console.log(value);
        await axios.post('http://localhost:8888/api/updateadminpush',{adminId:OneAdmin[0]._id,property:'commissionWithdrawalRequests',value:value})
        .then((response)=>{
            setRequestStatus(true)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleRequestToggle=async(transactionObjectId)=>{
        
        await axios.put('http://localhost:8888/api/updatetransaction',{transactionObjectId,property:'requestSent',value:true})
        .then((response)=>{
            setRequestSent(true)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }



   let counter = 0
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
            <td>{
            eachTransaction.requestSent === false?  <button type="button" className="btn btn-primary" onClick={()=>{bothrequests(eachTransaction._id)} }>Request Payment</button> : 
            eachTransaction.requestSent === true && eachTransaction.comissionAmountPaymentStatus === false? <button type="button" disabled className="btn btn-warning" >Request Sent</button> : 
            eachTransaction.comissionAmountPaymentStatus === true? <button type="button" className="btn btn-success" >Request Approved</button> : <></> }</td>
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

export default WithDrawAmountInAgent;