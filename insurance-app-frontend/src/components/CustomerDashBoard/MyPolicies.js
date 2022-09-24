import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerNavBar from "./CustomerNavBar";
function MyPolicies() {
    const navigation = new useNavigate()
    const [OneCustomer,setOneCustomer] = useState([])
    const [wholeCustomerData,setwholeCustommerData] = useState([])

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

 
    useEffect(()=>{getOneCustomer()},[])
    console.log(wholeCustomerData);
    console.log(OneCustomer);
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
    <td><button type="button" class="btn btn-primary" onClick={()=>{navigation('/detailedview',{state:{customer:eachPolicy.customer,plantype:eachPolicy.plantype,policy:eachPolicy,trans:wholeCustomerData}})}}>View</button></td>
    </tr>
    </>
    )
})


//   let Customerdata = <>
//            <tr className="">

//             <td key={OneCustomer.firstName}>{OneCustomer.firstName}</td>
//             <td key={OneCustomer.lastName}>{OneCustomer.lastName}</td>
//             <td key={OneCustomer.isActive}>{String(OneCustomer.isActive)}</td>

//             <td   key={OneCustomer._id}><button type="button" className="btn btn-primary" onClick={()=>{navigation('/mypolicies')}}>Edit</button></td>
//             </tr>
//             </>

    
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

export default MyPolicies;