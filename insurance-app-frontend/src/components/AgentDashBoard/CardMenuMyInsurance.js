import Cards from "../AdminDashBoard/CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import AgentNavBar from "./AgentNavBar";
function CardMenuMyInsurance() {
    return ( 
    <>
   
    <AgentNavBar/>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/insuranceaccountsinagent'} Title={'Insurance Account'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'#'} Title={'View Policy Claim'} />
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'#'} Title={'View Policy Payments'} />
    </CardGroup>
    </> );
}

export default CardMenuMyInsurance;

