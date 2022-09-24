import axios from "axios"
import { useEffect, useState } from "react"
import AdminNavBar from "./AdminNavBar"


function AddCityToState() {

    const [allCountriesObject,setAllCountriesObject] = useState({})
    const [allStatesObject,setAllStatesObject] = useState({})
    const [city,setTheCity] = useState('')
    const [countryId,setCountryId] = useState('')
    const [stateId,setStateId] = useState('')

    const handleGetCountries=async()=>{
        
        await axios.get('http://localhost:8888/api/getallcountries').then((response)=>{
            setAllCountriesObject(response.data)
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    // const handleGetStatesUnderCountry=async()=>{
    //     console.log(countryId);
        
    //     await axios.post('http://localhost:8888/api/getonecountry',{countryId}).then((response)=>{
        
    //         setAllStatesObject(response.data)
    //         console.log(response.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    
    // }
    const handleAddCityToState=async()=>{
        console.log(stateId,city);
        
        await axios.post('http://localhost:8888/api/createcity',{stateId,city}).then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    
}

    
    useEffect(()=>{
        handleGetCountries()
        console.log(allStatesObject);
    },[allStatesObject])

    // useEffect(()=>{
    //     handleGetStatesUnderCountry()
    // },[countryId])

    const allCountriesList = Object.values(allCountriesObject).map((eachCountry)=>{
        return(
        <>
            <option key={eachCountry.country} value={eachCountry._id}>{eachCountry.country}</option>
        </>
        )
    })

    const allStatesList = Object.values(allStatesObject).map((eachState)=>{
        return(
        <>
            <option key={eachState._id} value={eachState._id}>{eachState.state}</option>
        </>
        )
    })


    return (
    <>
    <AdminNavBar/>
    <div className="mb-3 m-2 w-50">
    <label  className="form-label">Country</label>
          <select className="form-control"  onChange={(e)=>{ setAllStatesObject(allCountriesObject.filter((eachCountry)=>{if(eachCountry._id === e.target.value){return eachCountry}})[0].states)}}>
          <option  value={null} >Select A Country</option>
            {
                allCountriesList
            }
          </select>
   </div>
   <div className="mb-3 m-2 w-50">
   <label  className="form-label">State</label>
          <select className="form-control"  onChange={e=>setStateId(e.target.value)} >
          <option  value={null} >Select A State</option>
            {
                allStatesList
            }
          </select>
</div>
<div className="mb-3 m-2 w-50">
      <label  className="form-label">City</label>
      <input type="text"className="form-control w-50" onChange={e=>setTheCity(e.target.value)} placeholder=""/>
        <button type="button" className="btn btn-primary" onClick={handleAddCityToState}>Add State</button>
    
        </div>
    </>
    );
}


export default AddCityToState;