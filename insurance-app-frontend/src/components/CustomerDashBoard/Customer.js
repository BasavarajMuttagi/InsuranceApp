import CustomerNavBar from "./CustomerNavBar";
import Cards from '../AdminDashBoard/CardRenderer'
import CardGroup from 'react-bootstrap/CardGroup';
function Customer() {
    return ( 
    <>
      <CustomerNavBar/>
      <CardGroup className="m-5">
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/3hjjzndpnmofrci/settingsedit_y5f4iZo2GJ.jpg'} URL={'/customerprofilecardmenu'} Title={'Customer Profile'} Description={''}/>

              <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/insuranceplanscustomermenu'} Title={'Insurance Plans'} Description={''}/>
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/insuranceaccountcustomermenu'} Title={'Insurance Account'} Description={''}/>

              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/customerqueriesmenu'} Title={'Queries'} Description={''}/>
    </CardGroup>
    </> 
    );
}

export default Customer;