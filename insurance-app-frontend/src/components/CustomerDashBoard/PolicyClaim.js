import axios from "axios";
import { useEffect, useState } from "react";
import CustomerNavBar from "./CustomerNavBar";

function PolicyClaim() {
    const [OneCustomer,setOneCustomer] = useState([])
    const [wholeCustomerData,setwholeCustommerData] = useState([])
    const [requestStatus,setRequestStatus] = useState(false)
    const getOneCustomer =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getonecustomer',{userName})
        .then((response)=>{
            setOneCustomer(response.data['policies'])
            setwholeCustommerData(response.data['transactions'])
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    console.log(OneCustomer);
 
    useEffect(()=>{getOneCustomer()},[])

    const handleRequestPolicyClaim=async(policyObjectId)=>{
        console.log(policyObjectId);
        await axios.put('http://localhost:8888/api/updatepolicy',{policyObjectId,property:'requestSent',value:true})
        .then((response)=>{
            setRequestStatus(true)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }



let policy =()=> Object.values(OneCustomer).map((eachPolicy)=>{
    console.log(eachPolicy);
  return(  
    <>
      <tr>
    <td>{eachPolicy.planName}</td>
    <td>{eachPolicy.planType}</td>
    <td>{eachPolicy.customer}</td>
    <td>{eachPolicy.totalInvestment}</td>
    <td>{eachPolicy.InstallmentPeriod}</td>
    <td>{eachPolicy.InstallmentAmount}</td>
    <td>{eachPolicy.InterestAmount}</td>
    <td>{eachPolicy.TotalAmount}</td>
    <td>{ String(eachPolicy.isActive)}</td>
    <td>{eachPolicy.isActive === true ? <button type="button" class="btn btn-primary" onClick={()=>{handleRequestPolicyClaim(eachPolicy._id)}}>{eachPolicy.requestSent === true ? 'Request Sent': 'Claim'}</button> : <button type="button" disabled class="btn btn-success">Claim settled</button>}</td>
    </tr>
    </>
    )
})

    
    return (  
<>
        <CustomerNavBar/>
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
        
                        <th>plan</th>
                        <th>plantype</th>
                        <th>customer</th>
                        <th>totalInvestment</th>
                        <th>InstallmentPeriod</th>
                        <th>InstallmentAmount</th>
                        <th>InterestAmount</th>
                        <th>TotalAmount</th>
                        <th>isActive</th>
                        <th>Detailed</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {policy()}
                      
                </tbody>
            </table>
        </div>
</>
    );
}

export default PolicyClaim;