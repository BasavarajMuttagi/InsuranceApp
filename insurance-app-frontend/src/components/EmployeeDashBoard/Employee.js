import EmployeeNavBar from "./EmployeeNavBar";
import Cards from '../AdminDashBoard/CardRenderer'
import CardGroup from 'react-bootstrap/CardGroup';

function Employee() {
    return ( 
    <>
    <EmployeeNavBar/>
    <CardGroup className="m-5">
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/3hjjzndpnmofrci/settingsedit_y5f4iZo2GJ.jpg'} URL={'/agentmenuinemployee'} Title={'Agent'} Description={''}/>

              <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/insuranceemployeemenu'} Title={'Insurance'} Description={''}/>
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/myaccountinemployee'} Title={'My Account'} Description={''}/>
    </CardGroup>
    </> 
    );
}

export default Employee;