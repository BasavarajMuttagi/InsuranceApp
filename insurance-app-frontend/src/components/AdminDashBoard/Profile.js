import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import { useNavigate } from "react-router-dom";
function ViewAdmin() {
    const navigation = new useNavigate()
    const [OneAdmin,setOneAdmin] = useState([])
    

    const getOneAdmin =async()=>{
        const userName = localStorage.getItem('userName')
        console.log(userName);
        await axios.post('http://localhost:8888/api/getoneadmin',{userName})
        .then((response)=>{
            setOneAdmin(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{getOneAdmin()},[])


  let admindata = <>
           <tr className="">

            <td key={OneAdmin.firstName}>{OneAdmin.firstName}</td>
            <td key={OneAdmin.lastName}>{OneAdmin.lastName}</td>
            <td key={OneAdmin.isActive}>{String(OneAdmin.isActive)}</td>
            <td   key={OneAdmin._id}><button type="button" className="btn btn-primary" onClick={()=>{navigation('/editadmin',{state:{userName:OneAdmin.credential.userName}})}}>Edit</button></td>
            </tr>
            </>

    
    return (  
<>
        <AdminNavBar/>
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
                        {admindata}
                </tbody>
            </table>
        </div>
</>
    );
}

export default ViewAdmin;