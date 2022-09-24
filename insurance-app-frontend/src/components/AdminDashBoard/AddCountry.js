import { useState } from "react";
import axios from 'axios';
import AdminNavBar from "./AdminNavBar";
function AddCountry() {
    const [country,setCountry] = useState('')

    const handleAddCountry=async()=>{
        await axios.post('http://localhost:8888/api/createCountry',{country}).then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
    <>
    <AdminNavBar/>
    <div class="mb-3 m-2">
      <label for="" class="form-label">Country</label>
      <input type="text"class="form-control w-50 m-1" name="" id="" aria-describedby="helpId" onChange={e=>setCountry(e.target.value)} placeholder=""/>
        <button type="button" class="btn btn-primary" onClick={handleAddCountry}>Add Country</button>
    </div>
    </>
    );
}

export default AddCountry;