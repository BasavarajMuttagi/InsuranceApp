import axios from "axios";
import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import ViewPlanType from "./ViewPlanType";


function CreatePlanType() {
    const [plantype,setPlanType] = useState('')
    const [refresh,setRefresh] = useState('')
    
    const handleCreatePlanType =(e)=>{
        e.preventDefault()
        console.log(plantype);
        axios.post('http://localhost:8888/api/createplantype',{plantype})
        .then((response)=>{
            window.location.reload()
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    console.log('hello');
    
    

    return ( 
        <>
            <AdminNavBar/>
            <form className="center m-2" onSubmit={handleCreatePlanType}>
            <div className="mb-3 w-25"  >
                <label  className="form-label">Plan Type</label>
                <input type="text" className="form-control" onChange={(e)=>{setPlanType(e.target.value)}}/>
            </div>

            <button type="submit" className="btn btn-primary">Create Plan Type</button>
            </form>
            {
                ViewPlanType()
            }
        </>
    );
}

export default CreatePlanType;