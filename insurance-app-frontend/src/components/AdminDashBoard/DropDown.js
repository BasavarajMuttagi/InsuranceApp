import axios from "axios"
import { useEffect, useState } from "react"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function InsuranceTypeDropDown() {
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
        <Link className="nav-link  " target="_blank" to={`/singlePlanTypeRender/${eachPlanType.plantype}`}>{eachPlanType.plantype}</Link>
        </>
        )
    })

return ( 
     <>

<NavDropdown  id="nav-dropdown-dark-example" title="Insurance Plans" menuVariant="dark">
              {AllPlanTypes}
</NavDropdown>
</>);
   
}

export default  InsuranceTypeDropDown

