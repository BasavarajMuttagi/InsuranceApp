import Cards from "../AdminDashBoard/CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import CustomerNavBar from "./CustomerNavBar";
function CardMenuCustomerProfile() {
    return ( 
    <>
    <CustomerNavBar/>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/customerprofile'} Title={'Profile'}/>
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/uploaddocuments'} Title={'Documents'} />
    <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/changepassword'} Title={'Change Password'} />
    </CardGroup>
    </> );
}

export default CardMenuCustomerProfile;