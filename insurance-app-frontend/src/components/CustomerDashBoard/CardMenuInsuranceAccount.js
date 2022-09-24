import Cards from "../AdminDashBoard/CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import CustomerNavBar from "./CustomerNavBar";
function CardMenuInsuranceAccountInCustomer() {
    return ( 
    <>
    <CustomerNavBar/>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/mypolicies'} Title={'View Policies'}/>
   
    </CardGroup>
    </> );
}

export default CardMenuInsuranceAccountInCustomer;