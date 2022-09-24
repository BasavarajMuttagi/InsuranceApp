import { useLocation, useNavigate } from "react-router-dom";
import CustomerNavBar from "./CustomerNavBar";


function DetailedViewOfPolicies() {
    const location = useLocation();
    const navigation = new useNavigate()
    const policy = location.state.policy
    let color
   const dates =  location.state.policy['installmentPaymentDates']
  
   const trans = location.state.trans
    let installmentPaymentDates = Object.values(dates).map((dateProperty)=>{
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
          <td className={color} ><button  type="button"  disabled={dateProperty.isActive} className="btn btn-primary" onClick={()=>{navigation('/payment',{state:{policy : policy,paymentId:dateProperty.paymentId,trans : trans}})}}>Payment</button></td>
          </tr>
          </>
          )
        
      })


    console.log(location.state.policy['installmentPaymentDates']);
    return ( <>
    <CustomerNavBar/>
    <div className="text-center m-2"><h2>Detailed Information</h2></div>
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
                       
                    </tr>
                </thead>
                <tbody>
                    
        <>
          <tr>
          <td>{policy.planName}</td>
          <td>{policy.planType}</td>
          <td>{policy.customer}</td>
          <td>{policy.totalInvestment}</td>
          <td>{policy.InstallmentPeriod}</td>
          <td>{policy.InstallmentAmount}</td>
          <td>{policy.InterestAmount}</td>
          <td>{policy.TotalAmount}</td>
          <td>{ String(policy.isActive)}</td>
          </tr>
          </>
                      
                </tbody>
            </table>
        </div>

        <div class="table-responsive table-bordered m-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Payment Dates</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Payment</th>
                    </tr>
                </thead>
                <tbody>
            {installmentPaymentDates}
                </tbody>
            </table>
        </div>
        
    

    </> );
}

export default DetailedViewOfPolicies;