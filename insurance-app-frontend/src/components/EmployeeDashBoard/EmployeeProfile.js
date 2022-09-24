import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeNavBar from "./EmployeeNavBar";

function EmployeeProfile() {
    const navigation = new useNavigate()
    const [OneCustomer,setOneCustomer] = useState([])
    

    const getOneCustomer =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getoneemployeusingusername',{userName})
        .then((response)=>{
            setOneCustomer(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneCustomer()},[])


  let Customerdata = <>
           <tr className="">

            <td key={OneCustomer.firstName}>{OneCustomer.firstName}</td>
            <td key={OneCustomer.lastName}>{OneCustomer.lastName}</td>
            <td key={OneCustomer.isActive}>{String(OneCustomer.isActive)}</td>
            <td   key={OneCustomer._id}><button type="button" className="btn btn-primary" onClick={()=>{navigation('/editemployeeinemployee',{state:{userName:OneCustomer.credential.userName}})}}>Edit</button></td>
            </tr>
            </>

    
    return (  
<>
    <EmployeeNavBar/>
        <div className="table-responsive m-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
        
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">isActive</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                        {Customerdata}
                </tbody>
            </table>
        </div>
</>
    );
}

export default EmployeeProfile;