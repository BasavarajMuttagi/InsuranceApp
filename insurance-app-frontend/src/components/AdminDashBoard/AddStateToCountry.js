import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";
function AddStateToCountry() {
    const [allCountriesObject,setAllCountriesObject] = useState([])
    const [state,setTheState] = useState('')
    const [countryId,setCountryId] = useState('')
    const handleGetCountries=async()=>{
        
        await axios.get('http://localhost:8888/api/getallcountries').then((response)=>{
            setAllCountriesObject(response.data)
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleAddStateToCountry=async()=>{
        console.log(countryId,state);
        if(countryId != null){
        await axios.post('http://localhost:8888/api/createState',{countryId,state}).then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    }

    useEffect(()=>{
        handleGetCountries()
    },[])

    const allCountriesList = Object.values(allCountriesObject).map((eachCountry)=>{
        return(
        <>
            <option key={eachCountry.country} value={eachCountry._id}>{eachCountry.country}</option>
        </>
        )
    })

    return ( 
    <>
    <AdminNavBar/>
        <div className="mb-3 m-2 w-50 ">
          <label  className="form-label"></label>
          <select className="form-control "  onChange={e=>setCountryId(e.target.value)} >
          <option selected value={null} >Select A Country</option>
            {
                allCountriesList
            }
          </select>
    <div className="mb-3 m-3">
      <label  className="form-label">State</label>
      <input type="text"className="form-control" onChange={e=>setTheState(e.target.value)} placeholder=""/>
        <button type="button" className="btn btn-primary" onClick={handleAddStateToCountry}>Add State</button>
    </div>
        </div>
    </> 
    );
}

export default AddStateToCountry;