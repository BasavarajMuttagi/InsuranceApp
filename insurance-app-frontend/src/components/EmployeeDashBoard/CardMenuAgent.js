import Cards from "../AdminDashBoard/CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import EmployeeNavBar from "./EmployeeNavBar";
function CardMenuMyAgentInEmployee() {
    return ( 
    <>
    <EmployeeNavBar/>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/createagent'} Title={'Add Agent'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/allagents'} Title={'View Agents'} />
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/viewallagentcommissions'} Title={'View Commission'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/commissionapproval'} Title={'Comission Withdrawal Requests'} />
  
    </CardGroup>
    </> );
}

export default CardMenuMyAgentInEmployee;