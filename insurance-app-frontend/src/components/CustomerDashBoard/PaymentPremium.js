import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentReceipt from "./PaymentReceipt";
// state:{planObject : plan ,amount : amount,totalamount : totalamount,interestamount:interestamount, eachinstallment:eachinstallment }

function PremiumPayment() {


    const transferSuccessToast =()=>{
        return (
          <div>
          {  toast.success('Transfer Successful')}<ToastContainer position="bottom-right"autoClose={5000}hideProgressBar={false}newestOnTop={false}closeOnClickrtl={false}pauseOnFocusLossdraggablepauseOnHover/>
          </div>
        );
    
      } 


    const [transfersuccess,setTransferSuccess] = useState(0)
    const [OneCustomer,setOneCustomer] = useState([])
    const [documents,setDocuments] = useState([])
    let value
    let counter = 0
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


    const location = new useLocation()
    const {planObject,amount,totalamount,interestamount,eachinstallment,installmentPeriod} = location.state
    console.log(planObject,amount,totalamount,interestamount,eachinstallment,installmentPeriod);
    const [paymentMethod,setpaymentMethod] = useState('')

    const userName = localStorage.getItem('userName')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear(); 
    today = mm + '/' + dd + '/' + yyyy

    const NumberOfInstallments = amount/interestamount

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
       
         let MaturityDate 
        let SumAssured = parseFloat(interestamount) + parseFloat(amount)

        let date = new Date();
       console.log(date.addDays(365));
       let installmentPaymentDates = []
       installmentPaymentDates.push({paymentDay :date,isActive : true,paymentId :1})
       for (let index = 1; index < NumberOfInstallments; index++) {
             installmentPaymentDates.push({paymentDay :date.addDays(365*index),isActive : false,paymentId :index + 1})
             MaturityDate = date.addDays(365*index)
       }
     
        const taxHelper  =parseFloat(eachinstallment) + (parseFloat((eachinstallment)*18)/100)
     

         const premiumType = 'FirstPremium'
         console.log(installmentPaymentDates);

         const comissionAmount = (parseFloat(planObject.agentCommissionForReg)*parseFloat(amount))/100


console.log({DateCreated ,MaturityDate,interestRate : planObject.interestRate
    ,SumAssured,plantype:planObject.planType._id,plan : planObject._id,customer:userName,totalInvestment:amount,InstallmentPeriod:installmentPeriod,NumberOfInstallments,InstallmentAmount:eachinstallment,InterestAmount:interestamount,TotalAmount:totalamount,planName:planObject.planName,planType:planObject.planType.plantype,agent,agentCommissionForImt:planObject.agentCommissionForImt
    ,agentCommissionForReg : planObject.agentCommissionForReg,comissionAmount,premiumType,installmentPaymentDates});

      
         
         await axios.post('http://localhost:8888/api/createtransaction',{DateCreated ,MaturityDate,interestRate : planObject.interestRate
         ,SumAssured,plantype:planObject.planType._id,plan : planObject._id,customer:userName,totalInvestment:amount,InstallmentPeriod:installmentPeriod,NumberOfInstallments,InstallmentAmount:eachinstallment,InterestAmount:interestamount,TotalAmount:totalamount,planName:planObject.planName,planType:planObject.planType.plantype,agent,agentCommissionForImt:planObject.agentCommissionForImt
         ,agentCommissionForReg :planObject.agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus:false,taxAmount:taxHelper,paymentMode:paymentMethod,requestSent:false})
         .then((response)=>{
             value = response.data['_id']
             console.log(response.data);
             console.log("successful 1");
         })
         .catch((error)=>{
             console.log(error);
         })
     
         
         const property = 'transactions'
         console.log(value);
         await axios.put('http://localhost:8888/api/addpolicy',{userName,property,value})
         .then((response)=>{
             
             console.log(response.data);
             console.log("successful 2");
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
             console.log("successful 3");
             counter++
         })
         .catch((error)=>{
             console.log(error);
         })
         }
     
     
     
         await axios.post('http://localhost:8888/api/createpolicy',{DateCreated,MaturityDate,interestRate:planObject.interestRate,SumAssured,plantype:planObject.planType._id,plan:planObject._id,customer:userName,totalInvestment:amount,InstallmentPeriod:installmentPeriod,NumberOfInstallments,InstallmentAmount:eachinstallment,InterestAmount:interestamount,TotalAmount:totalamount,installmentPaymentDates,transactionObjectId:value,planType:planObject.planType.plantype,planName:planObject.planName,requestSent:false})
         .then((response)=>{
            counter++
             console.log(response.data);
             console.log("successful 4");
             setTransferSuccess(200)
         })
         .catch((error)=>{
             console.log(error);


             
         })
     
     
     
     
     
     
     }
  
     if(transfersuccess !== 200){

    return (<>
   <h2 className="m-5">Plan Details</h2>  
   <table className="table  text-dark border border-dark table-bordered m-5 w-50 ">
                        <tr >
                            <th className=" p-4">Plan Type</th>
                            <td  className=" p-4 text-center" >{planObject.planType.plantype}</td>
                        </tr>
                        <tr >
                          
                            <th  className=" p-4" >plan Name</th>
                            <td className=" p-4 text-center"> {planObject.planName}</td>
                        </tr>

                        <tr >
                            <th  className=" p-4">username</th>
                            <td  className=" p-4 text-center" >{userName}</td>
                        </tr>
                        <tr >
                            <th className=" p-4" >totalInvestment</th>
                            <td className=" p-4 text-center">{amount}</td>
                         </tr>
                        <tr >
                            <th className=" p-4" >Number Of Installments</th>
                            <td className=" p-4 text-center">{amount/eachinstallment}</td>
                        </tr>
                        <tr >
                            <th className=" p-4">InstallmentAmount</th>
                            <td  className=" p-4 text-center" >{eachinstallment}</td>
                        </tr>
                        <tr >
                          
                            <th  className=" p-4" >InterestAmount</th>
                            <td className=" p-4 text-center">{interestamount}</td>
                        </tr>

                        <tr >
                            <th  className=" p-4">TotalAmount</th>
                            <td  className=" p-4 text-center" >{totalamount}</td>
                        </tr>
                  
                 </table>

                 



   <h2 className="m-5">Transaction Details</h2>  
   <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4 ">Date</th>
                            <td  className=" p-4 text-center" data-type="date">{today}</td>
                        </tr>
                        <tr >
                          
                            <th  className=" p-4 " >Installment Amount</th>
                            <td className=" p-4 text-center">{eachinstallment}</td>
                        </tr>

                        <tr >
                            <th  className=" p-4 ">Tax</th>
                            <td  className=" p-4 text-center" >{'18%'}</td>
                        </tr>
                        <tr >
                            <th className=" p-4 "  >Installment Amount with Tax</th>
                            <td className=" p-4 text-center">{parseFloat(eachinstallment) + (parseFloat((eachinstallment)*18)/100)}</td>
                         </tr>
                        <tr >
                            <th className=" p-4 " >Payment Type</th>
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
                 <form>
                 <table className="table  text-dark border border-dark table-bordered m-5 w-50">
                        <tr >
                            <th className=" p-4">Card Number</th>
                            <td  className=" p-4" >
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" placeholder="Card Number" min="1" max="999999999999" maxLength={16} minLength={16}/>
                            </div>
                            </td>
                        </tr>
                

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
                                    <input type="text" className="form-control" placeholder="CVV" maxLength={3}  required/>
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
                            <button type="button" class="btn btn-primary" onClick={()=>{handlePolicyPurchase()}}>Pay</button>
                            </div>
                            </td>
                        </tr>
                       
                 </table>
                 </form>
                 <div>{counter}</div>
                 <div>{ transfersuccess === 200 ? transferSuccessToast() : null}</div>
                 
    
    </>  );
     }
     else
     {
        return <PaymentReceipt instalment ={eachinstallment} tax={18} date={today} plan={planObject.planName} />
     }
}

export default PremiumPayment;