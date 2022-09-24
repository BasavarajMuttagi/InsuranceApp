import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function BuyPlan() {

    const [OneCustomer,setOneCustomer] = useState([])
    const [documents,setDocuments] = useState([])
    let value
    const getOneCustomer =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getonecustomer',{userName})
        .then((response)=>{
            setOneCustomer(response.data)
            setDocuments(response.data['documents']);
            console.log(OneCustomer);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneCustomer()},[])

const location = useLocation();
const {MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agentCommissionForImt,agentCommissionForReg} = location.state
const NumberOfInstallments = totalInvestment/InstallmentAmount

const agent = OneCustomer.agentUserName
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear(); 
today = mm + '/' + dd + '/' + yyyy

let DateCreated = today
Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
const handlePolicyPurchase =async(e)=>{
   e.preventDefault()
let MaturityDate 
let SumAssured = parseFloat(InterestAmount) + parseFloat(totalInvestment)
  let date = new Date();
  console.log(date.addDays(365));
  let installmentPaymentDates = []
  installmentPaymentDates.push({paymentDay :date,isActive : true,paymentId :1})
  for (let index = 1; index < NumberOfInstallments; index++) {
        installmentPaymentDates.push({paymentDay :date.addDays(365*index),isActive : false,paymentId :index + 1})
        MaturityDate = date.addDays(365*index)
  }

    const premiumType = 'FirstPremium'
    console.log(installmentPaymentDates);
    const comissionAmount = (agentCommissionForReg*totalInvestment)/100
    console.log(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType);
    
    await axios.post('http://localhost:8888/api/createtransaction',{DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType})
    .then((response)=>{
        value = response.data['_id']
        console.log(response.data);

    })
    .catch((error)=>{
        console.log(error);
    })

    
    const property = 'transactions'
    const userName = localStorage.getItem('userName')
    console.log(value);
    await axios.put('http://localhost:8888/api/addpolicy',{userName,property,value})
    .then((response)=>{
        
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })

    if(OneCustomer.agentUserName!=''){
        console.log("hello");
        console.log(userName,property,value);
        const agent = OneCustomer.agentUserName
    await axios.put('http://localhost:8888/api/updateagentpushpayment',{userName : agent,property,value})
    .then((response)=>{
        
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
    }



    await axios.post('http://localhost:8888/api/createpolicy',{DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates})
    .then((response)=>{
        
        console.log(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })






}


  return (<>
<form onSubmit={handlePolicyPurchase}>
    <div class="table-responsive m-5">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Plan Type</th>
                    <th scope="col">plan Name</th>
                    <th scope="col">username</th>
                    <th scope="col">totalInvestment</th>
                    <th scope="col">InstallmentPeriod</th>
                    <th scope="col">Number Of Installments</th>
                    <th scope="col">InstallmentAmount</th>
                    <th scope="col">InterestAmount</th>
                    <th scope="col">TotalAmount</th>
                </tr>
                </thead>
                <tbody>
            <tr class="">
                    <td>{plantype}</td>
                    <td>{plan}</td>
                    <td>{customer}</td>
                    <td>{totalInvestment}</td>
                    <td>{InstallmentPeriod}</td>
                    <td>{totalInvestment/InstallmentAmount}</td>
                    <td>{InstallmentAmount}</td>
                    <td>{InterestAmount}</td>
                    <td>{TotalAmount}</td>
            </tr>
            </tbody>
            
        </table>
    </div >

    <div className="text-center"> 
    <button type="submit" class="btn btn-primary">Proceed</button>
    </div>
    </form>  
    </>  );
}

export default BuyPlan;

























import axios from "axios";
import { useLocation } from "react-router-dom";


function Payment() {
    const location = new useLocation()
    const policy = location.state.policy
    const dates =  location.state.policy['installmentPaymentDates']
    console.log(location.state.paymentId +"my Id");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear(); 
    today = mm + '/' + dd + '/' + yyyy
    const handleUpdateCustomerPayment =async(userName,property,value)=>{
    
        await axios.put('http://localhost:8888/api/updatecustomerpayment',{userName,property,value})
        .then((response)=>{
            
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (<>

   <h2 className="m-5">Transaction Details</h2>  
   <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4">Date</th>
                            <td  className=" p-4" data-type="date">{today}</td>
                        </tr>
                        <tr >
                          
                            <th  className=" p-4" >Installment Amount</th>
                            <td>{policy.InstallmentAmount}</td>
                        </tr>

                        <tr >
                            <th  className=" p-4">Tax</th>
                            <td  className=" p-4" >{'18%'}</td>
                        </tr>
                        <tr >
                            <th className=" p-4" >Installment Amount with Tax</th>
                            <td>{parseFloat(policy.InstallmentAmount) + (parseFloat((policy.InstallmentAmount)*18)/100)}</td>
                         </tr>
                        <tr >
                            <th className=" p-4" >Payment Type</th>
                            <td  className=" p-4" >{'Card'}</td>
                        </tr>
                 </table>
                 <h2 className="m-5 ">Card Details</h2>
                 <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4">Card Number</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Card Number" maxLength={12}/>
                            </div>
                            </td>
                        </tr>
                        {/* <tr >
                            <th  className=" p-4" >Installment Amount</th>
                            <td className=" p-4">
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Installment Amount" maxLength={15}/>
                            </div>
                            </td>
                        </tr> */}

                        <tr >
                            <th  className=" p-4">Card Holder's Name</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Card Holder's Name" maxLength={35}/>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <th className=" p-4" >CVV</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="CVV" maxLength={3}/>
                            </div>
                            </td>
                         </tr>
                        <tr >
                            <th className=" p-4" >Expiry Date</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="date" className="form-control" placeholder="Expiry Date"/>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <th className=" p-4" >Pay </th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3 text-center">
                            <button type="button" class="btn btn-primary" onClick={()=>{handleUpdateCustomerPayment(policy._id,location.state.paymentId,true)}}>Pay</button>
                            </div>
                            </td>
                        </tr>
                       
                 </table>
                 
                 
    
    </>  );
}

export default Payment;