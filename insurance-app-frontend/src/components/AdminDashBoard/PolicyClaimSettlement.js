import axios from "axios";
import { useEffect, useState } from "react";


function PolicyClaimSettlement() {
    const [allPolicies,setAllPolicies] = useState([])
    const [approvalStatus,setApprovalStatus] = useState(false)

 
    const getAllPolicies =async()=>{
        await axios.get('http://localhost:8888/api/getallpolicies',{})
        .then((response)=>{
            setAllPolicies(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{getAllPolicies()},[])

    const handleRequestPolicyClaimSettlement=async(policyObjectId)=>{
        console.log(policyObjectId);
        await axios.put('http://localhost:8888/api/updatepolicy',{policyObjectId,property:'isActive',value:false})
        .then((response)=>{
            setApprovalStatus(true)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }



    let allPoliciesList =  Object.values(allPolicies).map((eachpolicy)=>{
        if(eachpolicy.requestSent === true && eachpolicy.isActive === true || eachpolicy.isActive === false ){
        return(
        <>
      <tr className="">
                <td>{eachpolicy.plantype.plantype}</td>
                <td>{eachpolicy.plan.planName}</td>
                <td>{eachpolicy.customer}</td>
                <td>{eachpolicy.totalInvestment}</td>
                <td>{eachpolicy.InstallmentPeriod}</td>
                <td>{eachpolicy.NumberOfInstallments}</td>
                <td>{eachpolicy.InstallmentAmount}</td>
                <td>{eachpolicy.InterestAmount}</td>
                <td>{eachpolicy.DateCreated}</td>
                <td>{new Date(Date.parse(eachpolicy.MaturityDate)).toLocaleDateString()}</td>
                <td>{eachpolicy.interestRate}</td>
                <td>{eachpolicy.SumAssured}</td>
                <td>{eachpolicy.isActive === true ? <button type="button" class="btn btn-primary" onClick={()=>{handleRequestPolicyClaimSettlement(eachpolicy._id)}}>Validate</button> : <button type="button" class="btn btn-success" >Claim Settled</button>  }</td>
     </tr>
        </>
        )
        }
       })

    
    return (  

<>
<div className="text-center m-3"><h1> Claim Settlement  Accounts</h1></div>
   <div className="table-responsive m-5 ">
    <table className="table table-bordered ">
        <thead>
            <tr>
                <th scope="col">Plan Type</th>
                <th scope="col">Plan Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Total Investment</th>
                <th scope="col">Installment Period</th>
                <th scope="col">Number Of Installments</th>
                <th scope="col">Installment Amount</th>
                <th scope="col">Interest Amount</th>
                <th scope="col">Date Created</th>
                <th scope="col">Maturity Date</th>
                <th scope="col">Interest Rate</th>
                <th scope="col">Sum Assured</th>
            </tr>
        </thead>
        <tbody>
          {allPoliciesList}
          <tr>
            
            </tr>
        </tbody>
        
    </table>
</div>
</>
    )
}

export default PolicyClaimSettlement;