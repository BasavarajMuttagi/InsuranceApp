import axios from "axios";
import { useState } from "react";

function TaxSetting() {
const [tax,setTax] = useState(0)
const [status,setStatus] = useState('')

    const handleMyTax =async()=>{

        await axios.post('http://localhost:8888/api/getoneagentusingusername',{tax})
        .then((response)=>{
           setStatus(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (<>
      <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Tax Panel</h5>
            <form onSubmit={handleMyTax} >
             
              <div className="form-floating mb-3">
                <input type="text" className="form-control" value={tax} onChange={(e) => setTax(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label >Password</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">upate Tax</button>
              </div>
              <h1-6 m-2>Message :<span className="badge bg-primary m-2">{status}</span></h1-6>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </>  );
}

export default TaxSetting;