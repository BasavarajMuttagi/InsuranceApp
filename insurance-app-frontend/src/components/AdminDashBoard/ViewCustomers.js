
import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import ReactSwitch from "react-switch";
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";

function ViewCustomers() {
    const [allCustomers,setAllCustomers] = useState([])
    const [currentState,setCurrentState]= useState('')
    const role = localStorage.getItem('user')
    const getAllCustomers =async()=>{
        await axios.get('http://localhost:8888/api/getallcustomers')
        .then((response)=>{
            setAllCustomers(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getAllCustomers()},[currentState])

    const toggleSwitch =async(customerId,currentState)=>{
        console.log(customerId,currentState);
       await axios.put('http://localhost:8888/api/toggleSwitchCustomer',{customerId,currentState})
        .then((response)=>{
            setCurrentState(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    let AllCustomers = Object.values(allCustomers).map((eachCustomer)=>{return(
            <>
              <tr className="">
            <td key={eachCustomer}>{eachCustomer.role.role}</td>
            <td key={eachCustomer}>{eachCustomer.firstName}</td>
            <td key={eachCustomer}>{eachCustomer.lastName}</td>
            <td key={eachCustomer}>{String(eachCustomer.isActive)}</td>
            <td><ReactSwitch onChange={()=>toggleSwitch(eachCustomer._id,eachCustomer.isActive)} checked={eachCustomer.isActive}></ReactSwitch></td>
            </tr>
            </>
    )})
    return (  
        <>
          { role === 'admin'? <AdminNavBar/> : role === 'employee'? <EmployeeNavBar/>:''}
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Role</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">isActive</th>
                        <th scope="col">Toggle</th>
                    </tr>
                </thead>
                <tbody>
                  
                        {AllCustomers}
                
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ViewCustomers;