import axios from "axios";
import { useState } from "react";
import AdminNavBar from "./AdminNavBar";



function CreateRole() {
    const [role,setRole] = useState('')

    
    const handleCreateRole =(e)=>{
        e.preventDefault()
        console.log(role);
        axios.post('http://localhost:8888/api/createRole',{role})
        .then((response)=>{
            
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    
    

    return ( 
        <>
            <AdminNavBar/>
            <form className="center m-2" onSubmit={handleCreateRole}>
            <div className="mb-3 w-25"  >
                <label  className="form-label">Role</label>
                <input type="text" className="form-control" onChange={(e)=>{setRole(e.target.value)}}/>
            </div>

            <button type="submit" className="btn btn-primary">Create Role</button>
            </form>
            
        </>
    );
}

export default CreateRole;