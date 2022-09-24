import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import AdminNavBar from "./AdminNavBar";

function ViewPlanType() {
    const navigation = new  useNavigate()
    const [allplantypes,setAllPlanTypes] = useState([])
    // const [planTypeId,setPlanId]= useState()
    // const [currentState,setCurrentState]= useState()
    const [currentState,setCurrentState]= useState()
    const getAllPlanTypes =()=>{
        axios.get('http://localhost:8888/api/getallplantypes')
        .then((response)=>{
            setAllPlanTypes(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const toggleSwitch =async(planTypeId,currentState)=>{
        console.log(planTypeId,currentState);
       await axios.put('http://localhost:8888/api/toggleSwitch',{planTypeId,currentState})
        .then((response)=>{
            setCurrentState(response.data)
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    useEffect(()=>{getAllPlanTypes()},[currentState])

    let AllPlanTypes = Object.values(allplantypes).map((eachPlanType)=>{
        return(
        <>
             <tr >
                            <td key={eachPlanType.plantype}>{eachPlanType.plantype}</td>
                            <td key={eachPlanType.isActive}>{String(eachPlanType.isActive)}</td>
                            <td><button type="button" class="btn btn-primary" onClick={()=>{navigation('/editplantype',{state:{planTypeId:eachPlanType._id}})}} >update</button></td>
                            <td><ReactSwitch onChange={()=>toggleSwitch(eachPlanType._id,eachPlanType.isActive)} checked={eachPlanType.isActive}></ReactSwitch></td>
            </tr>
        </>
        )
    })

    return (
    <> 
    <AdminNavBar/>
            <div className="table-responsive w-50 m-4">
                <table className="table border rounded-1">
                    <thead>
                        <tr>
                            <th scope="col">Plan Type</th>
                            <th scope="col">isActive</th>
                            <th scope="col">Toggle</th>
                        </tr>
                    </thead>
                    <tbody>
                   {AllPlanTypes}
                    </tbody>
                </table>
            </div>
    
    </>
    );
}

export default ViewPlanType;