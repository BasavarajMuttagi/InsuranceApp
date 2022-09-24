
import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";
function ViewEmployees() {

    const navigation = new useNavigate()
    const [allEmployees,setAllEmployees] = useState([])
    
    const getAllEmployees =async()=>{
        await axios.get('http://localhost:8888/api/getallemployees')
        .then((response)=>{
            setAllEmployees(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getAllEmployees()},[])


    let AllEmployees = Object.values(allEmployees).map((eachEmployee)=>{return(
            <>
            <tr className="">
            <td key={eachEmployee}>{eachEmployee.role.role}</td>
            <td key={eachEmployee}>{eachEmployee.firstName}</td>
            <td key={eachEmployee}>{eachEmployee.lastName}</td>
            <td key={eachEmployee}>{String(eachEmployee.isActive)}</td>
            <td   key={eachEmployee._id}><button type="button" class="btn btn-primary" onClick={()=>{navigation('/editemployee',{state:{EmployeeId:eachEmployee._id}})}}>Edit</button></td>
            {/* <td><ReactSwitch onChange={()=>toggleSwitch(eachEmployee._id,eachEmployee.isActive)} checked={eachEmployee.isActive}></ReactSwitch></td> */}
            </tr>
            </>
    )})
    return (  
        <>
        <AdminNavBar/>
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Role</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">isActive</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {AllEmployees}
                    
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ViewEmployees;