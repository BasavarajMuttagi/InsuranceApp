import Cards from "./CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import AdminNavBar from "./AdminNavBar";
function CardMenuAgent() {
    return ( 
    <>
    <AdminNavBar/>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/createagent'} Title={'Create Agent'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/allagents'} Title={'View Agent'} />
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/viewallagentcommissions'} Title={'View Agent Commissions'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/commissionapproval'} Title={'View Commission Requests'} />
    </CardGroup>
    </> );
}

export default CardMenuAgent;