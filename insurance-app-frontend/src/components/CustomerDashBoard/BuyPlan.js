import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function BuyPlan() {
    const navigation = new useNavigate()
   const location = new useLocation()
   const planId = location.state.planId


const [numberOfYears,setNumberOfYears] = useState(0)
const [amount,setAmount] = useState(0)
const [installmentPeriod,setInstallmentPeriod] = useState(0)
const [interestRate,setInterestRate] = useState(0)
const [eachinstallment,setEachinstallment] = useState(0)
const [interestamount,setInterestamount] = useState(0)
const [totalamount,setTotalamount] = useState(0)

const [plan,setPlan] = useState({})

console.log(planId);
const getOnePlan=async()=>{
    await axios.post('http://localhost:8888/api/getoneplan',{planId})
    .then((response)=>{
        setPlan(response.data)
        console.log(response.data);
        setInterestRate(response.data['interestRate'])
        console.log(response.data['interestRate']);

    })
    .catch((error)=>{
        console.log(error);
    })
}


useEffect(()=>{getOnePlan()},[])


const handleCalculate=(e)=>{
    e.preventDefault()

        const interestAmt =( parseFloat(amount) * parseFloat(interestRate))/100
        const totalAmt = parseFloat(amount) + parseFloat(interestAmt)
        const instalment = parseFloat(amount)/(parseFloat(numberOfYears)/parseFloat(installmentPeriod))
        console.log(amount,numberOfYears,installmentPeriod);
        setInterestamount(interestAmt)
        setTotalamount(totalAmt)
        setEachinstallment(instalment)
       
}





  return (<>
 <div className="container">
<div className="row">
  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <div className="card border-0 shadow rounded-3 my-5">
      <div className="card-body p-4 p-sm-5">
        <h5 className="card-title text-center mb-5 fw-light fs-5">Calculator</h5>
        <form onSubmit={handleCalculate} >
          <div className="form-floating mb-3">
            <div class="mb-3">
              <label for="" class="form-label">Number Of Years</label>
              <select class="form-control" onChange={e=>{setNumberOfYears(e.target.value)}}>
                        <option value={5} selected>5 Year</option>
                        <option value={6}>6 Year</option>
                        <option value={7}>7 Year</option>
                        <option value={8}>8 Year</option>
                        <option value={9}>9 year</option>
                        <option value={10}>10 Year</option>
              </select>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control"  onChange={(e) => setAmount(e.target.value)} id="floatingPassword" placeholder="Password"/>
            <label >Amount</label>
          </div>



          <div class="mb-3">
              <label for="" class="form-label">installment Period</label>
              <select class="form-control"  onChange={(e) => setInstallmentPeriod(e.target.value)} >
                        <option value={1}  selected>1 year</option>
                        <option value={2}>2 Year</option>
                        <option value={3}>3 Year</option>
                        <option value={4}>4 Year</option>
                        <option value={5}>5 Year</option>
                        <option value={6}>6 Year</option>
                        <option value={7}>7 Year</option>
                        <option value={8}>8 Year</option>
              </select>
          </div>
          


          <div className="d-grid">
            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Calculate</button>
          </div>
          <div className="form-floating mb-3 mt-2">
            <input type="text" className="form-control" value={eachinstallment}  id="floatingPassword" placeholder="Password"/>
            <label >Amount For Each Installment</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={interestamount} id="floatingPassword" placeholder="Password"/>
            <label >insterest Amount</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" value={totalamount} id="floatingPassword" placeholder="Password"/>
            <label >Total Amount</label>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>
</div> 

<div className="text-center m-5"><button type="submit" class="btn btn-primary" onClick={()=>{navigation('/premiumpayment',{state:{planObject : plan ,amount : amount,totalamount : totalamount,interestamount:interestamount, eachinstallment:eachinstallment,installmentPeriod: installmentPeriod}})}}>Proceed</button></div>
  
    </>  );
}

export default BuyPlan;


