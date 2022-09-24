import { useState } from "react";

function Calculator() {
const [numberOfYears,setNumberOfYears] = useState(0)
const [amount,setAmount] = useState(0)
const [installmentPeriod,setInstallmentPeriod] = useState(0)
const [interestRate,setInterestRate] = useState(5)
const [eachinstallment,setEachinstallment] = useState(0)
const [interestamount,setInterestamount] = useState(0)
const [totalamount,setTotalamount] = useState(0)
const handleCalculate=(e)=>{
e.preventDefault()
        const interestAmt =( parseFloat(amount) * parseFloat(interestRate))/100
        const totalAmt = parseFloat(amount) + parseFloat(interestAmt)
        const instalment = parseFloat(amount)/(parseFloat(numberOfYears)/parseFloat(installmentPeriod))
        setInterestamount(interestAmt)
        setTotalamount(totalAmt)
        setEachinstallment(instalment)
}

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(9, 18); 

let optionRender = result.map((eachYear)=>{
  return(<>
     <option value={eachYear}>{eachYear}</option>
  </>)
})

    return ( <>
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
                    {optionRender}
                  </select>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control"  onChange={(e) => setAmount(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >Amount</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control"  onChange={(e) => setInstallmentPeriod(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >installment Period</label>
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

    </> );
}

export default Calculator;