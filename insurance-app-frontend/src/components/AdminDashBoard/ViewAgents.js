import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";
import EmployeeNavBar from "../EmployeeDashBoard/EmployeeNavBar";
function ViewAgents() {
    const navigation = new useNavigate()
    const [allAgents,setAllAgents] = useState([])
    const role = localStorage.getItem('user')
    const getAllAgents =async()=>{
        await axios.get('http://localhost:8888/api/getallagents')
        .then((response)=>{
            setAllAgents(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getAllAgents()},[])


    let AllAgents = Object.values(allAgents).map((eachAgent)=>{return(
            <>
             <tr className="">
            <td key={eachAgent.role.role}>{eachAgent.role.role}</td>
            <td key={eachAgent.firstName}>{eachAgent.firstName}</td>
            <td key={eachAgent.lastName}>{eachAgent.lastName}</td>
            <td key={eachAgent.isActive}>{String(eachAgent.isActive)}</td>
            <td   key={eachAgent._id}><button type="button" className="btn btn-primary" onClick={()=>{navigation('/editagent',{state:{AgentId:eachAgent._id}})}}>Edit</button></td>
            {/* <td><ReactSwitch onChange={()=>toggleSwitch(eachAgent._id,eachAgent.isActive)} checked={eachAgent.isActive}></ReactSwitch></td> */}
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
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {AllAgents}
                    
                </tbody>
            </table>
        </div>
</>
    );
}

export default ViewAgents;