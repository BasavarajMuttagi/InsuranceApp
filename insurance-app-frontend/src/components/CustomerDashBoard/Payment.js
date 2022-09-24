import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaymentReceipt from "./PaymentReceipt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Payment() {
const [paymentMethod,setpaymentMethod] = useState('')
const [transfersuccess,setTransferSuccess] = useState(0)


    const transferSuccessToast =()=>{
        return (
          <div>
          {  toast.success('Transfer Successful')}<ToastContainer position="bottom-right"autoClose={5000}hideProgressBar={false}newestOnTop={false}closeOnClickrtl={false}pauseOnFocusLossdraggablepauseOnHover/>
          </div>
        );
    
      } 


    let counter = 0
    const userName = localStorage.getItem('userName')
    const location = new useLocation()
    const policy = location.state.policy
    const alltrans = location.state.trans
console.log(policy);

const transactionIdInPolicy = policy.transactionObjectId
console.log(transactionIdInPolicy);
    const [currentPolicy,setCurrentPolicy] = useState()
    const [transaction,setTransaction] = useState()


    const fetchRecord = alltrans.filter((eachTrans)=>eachTrans._id === transactionIdInPolicy)[0]
    console.log(fetchRecord);




  

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

       

        const premiumType = 'InstallmentPayment'
        const comissionAmount = (parseFloat(fetchRecord.agentCommissionForReg)*parseFloat(fetchRecord.InstallmentAmount))/100


console.log({DateCreated : today ,MaturityDate : fetchRecord.MaturityDate,interestRate : fetchRecord.interestRate
   ,SumAssured : fetchRecord.SumAssured,plantype:fetchRecord.plantype,plan : fetchRecord.plan,customer:fetchRecord.customer,totalInvestment:fetchRecord.totalInvestment,InstallmentPeriod:fetchRecord.InstallmentPeriod,NumberOfInstallments : fetchRecord.NumberOfInstallments,InstallmentAmount:fetchRecord.InstallmentAmount,InterestAmount:fetchRecord.InterestAmount,TotalAmount:fetchRecord.TotalAmount,planName:fetchRecord.planName,planType:fetchRecord.planType,agent : fetchRecord.agent,agentCommissionForImt:fetchRecord.agentCommissionForImt
   ,agentCommissionForReg : fetchRecord.agentCommissionForReg,comissionAmount :comissionAmount,premiumType : premiumType});

     
        
        await axios.post('http://localhost:8888/api/createtransaction',{DateCreated : today ,MaturityDate : fetchRecord.MaturityDate,interestRate : fetchRecord.interestRate
        ,SumAssured : fetchRecord.SumAssured,plantype:fetchRecord.plantype,plan : fetchRecord.plan,customer:fetchRecord.customer,totalInvestment:fetchRecord.totalInvestment,InstallmentPeriod:fetchRecord.InstallmentPeriod,NumberOfInstallments : fetchRecord.NumberOfInstallments,InstallmentAmount:fetchRecord.InstallmentAmount,InterestAmount:fetchRecord.InterestAmount,TotalAmount:fetchRecord.TotalAmount,planName:fetchRecord.planName,planType:fetchRecord.planType,agent : fetchRecord.agent,agentCommissionForImt:fetchRecord.agentCommissionForImt
        ,agentCommissionForReg : fetchRecord.agentCommissionForReg,comissionAmount :comissionAmount,premiumType : premiumType,comissionAmountPaymentStatus:false,taxAmount:18,paymentMode:paymentMethod,requestSent:false})
        .then((response)=>{
            value = response.data['_id']
            console.log(response.data);
            console.log("successful 1");
        })
        .catch((error)=>{
            console.log(error);
        })
    
        
         
        console.log(value);
        await axios.put('http://localhost:8888/api/addpolicy',{userName,property : 'transactions',value})
        .then((response)=>{
            
            console.log(response.data);
            console.log("successful 2");
        })
        .catch((error)=>{
            console.log(error);
        })
    
        if(fetchRecord.agent!=''){
            console.log("hello");
            console.log(userName,property,value);
            const agent = fetchRecord.agent
        await axios.put('http://localhost:8888/api/updateagentpushpayment',{userName : agent,property : 'transactions',value})
        .then((response)=>{
            setTransferSuccess(200)
            console.log(response.data);
            console.log("successful 3");
            counter++
        })
        .catch((error)=>{
            console.log(error);
        })
        }
    
    }
 
if(transfersuccess !== 200){
    
    return (<>

   <h2 className="m-5">Transaction Details</h2>  
   <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4">Date</th>
                            <td  className=" p-4 text-center" data-type="date">{today}</td>
                        </tr>
                        <tr >
                          
                            <th  className=" p-4" >Installment Amount</th>
                            <td className=" p-4 text-center">{policy.InstallmentAmount}</td>
                        </tr>

                        <tr >
                            <th  className=" p-4">Tax</th>
                            <td  className=" p-4 text-center" >{'18%'}</td>
                        </tr>
                        <tr >
                            <th className=" p-4" >Installment Amount with Tax</th>
                            <td className=" p-4 text-center">{parseFloat(policy.InstallmentAmount) + (parseFloat((policy.InstallmentAmount)*18)/100)}</td>
                         </tr>
                        <tr >
                            <th className=" p-4" >Payment Type</th>
                            <td  className=" p-4 text-center" ><div class="mb-3">
                                    <select class="form-control"  onChange={e=>setpaymentMethod(e.target.value)}>
                                        <option value={'Debit Card'}>Debit Card</option>
                                        <option value={'Credit Card'}>Credit Card</option>
                                    </select>
                              </div>
                            </td>
                        </tr>

                 </table>
                 <h2 className="m-5 ">Card Details</h2>
                 <form >
                 <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4">Card Number</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Card Number" maxLength={16} minLength={16} required/>
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
                                    <input type="text" className="form-control" placeholder="Card Holder's Name" maxLength={35} required/>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <th className=" p-4" >CVV</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="CVV" maxLength={3} required/>
                            </div>
                            </td>
                         </tr>
                        <tr >
                            <th className=" p-4" >Expiry Date</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="date" className="form-control" placeholder="Expiry Date" required/>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <th className=" p-4" >Pay </th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3 text-center">
                            <button type="button" class="btn btn-primary" onSubmit={()=>{handleUpdateCustomerPayment(policy._id,location.state.paymentId,true)}}>Pay</button>
                            </div>
                            </td>
                        </tr>
                       
                 </table>
                 </form>
                 <div>{ transfersuccess === 200 ? transferSuccessToast() : null}</div>
                 
    
    </>  )
}
else
{
   return <PaymentReceipt premiumType={'InstallmentPayment'} instalment ={policy.InstallmentAmount} tax={18} date={today} plan={fetchRecord.planName} />
}
}

export default Payment;