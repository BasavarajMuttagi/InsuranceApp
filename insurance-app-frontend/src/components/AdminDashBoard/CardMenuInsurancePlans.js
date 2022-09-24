import Cards from "./CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import axios from "axios"
import { useEffect, useState } from "react"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
function CardMenuInsurancePlans() {

    const [allplantypes,setAllPlanTypes] = useState([])
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

    const navigate = useNavigate();
    

    useEffect(()=>{getAllPlanTypes()},[])

    let AllPlanTypes = Object.values(allplantypes).map((eachPlanType)=>{
        return(
        <>
        <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={`/singlePlanTypeRender/${eachPlanType.plantype}`} Title={eachPlanType.plantype}/>
        </>
        )
    })
    return ( 
    <>
    <AdminNavBar/>
    <CardGroup className="m-5">
    {AllPlanTypes}
    </CardGroup>
    </> );
}

export default CardMenuInsurancePlans;

