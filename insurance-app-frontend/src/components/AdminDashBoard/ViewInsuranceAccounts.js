import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";
import AdminNavBar from "./AdminNavBar";




function ViewInsuranceAccountsInAdmin() {

    const [allPolicies,setAllPolicies] = useState([])
    const [toggle,setToggle] = useState(false)
    const [dates,setDates] = useState('')
    const role = localStorage.getItem('user')
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

    const callFunctions=(Date)=>{
        setToggle(true)
        setDates(Date)
    }

    let color
    let installmentPaymentDates=(dates)=> Object.values(dates).map((dateProperty)=>{
        if(dateProperty.isActive === true){
             color = 'bg-success '
        }
        else{
            color = 'bg-danger'
        }
        return(  
          <>
        <tr  className="text-dark">
          <td className={color}>{new Date(Date.parse(dateProperty.paymentDay)).toLocaleDateString() }</td>
          <td className={color}>{dateProperty.isActive === true?'Paid':'Pending Payment'}</td>
          {/* <td className={color} ><button  type="button"  disabled={dateProperty.isActive} className="btn btn-primary" >Payment</button></td> */}
          </tr>
          </>
          )
        
      })



   let allPoliciesList =  Object.values(allPolicies).map((eachpolicy)=>{
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
            <td><button type="button" class="btn btn-primary" onClick={()=>{callFunctions(eachpolicy.installmentPaymentDates)}}>View</button></td>
 </tr>
    </>
    )
   })

   if(toggle === false){

   return(
   <>
    { role === 'admin'? <AdminNavBar/> : role === 'employee'? <EmployeeNavBar/>:''}
<div className="text-center m-3"><h1> Insurance Accounts</h1></div>
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
   if(toggle === true){
    return (<>
    { role === 'admin'? <AdminNavBar/> : role === 'employee'? <EmployeeNavBar/>:''}
        <h2 className="m-5">Installment Payment Status</h2>
            <div class="table-responsive table-bordered m-5 w-50 ">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Payment Dates</th>
                        <th scope="col">Payment Status</th>
                        {/* <th scope="col">Payment</th> */}
                    </tr>
                </thead>
                <tbody>
            {installmentPaymentDates(dates)}
                </tbody>
            </table>
        </div>
    </>)
   }
    
}

export default ViewInsuranceAccountsInAdmin;