import AgentNavBar from "./AgentNavBar";
import Cards from '../AdminDashBoard/CardRenderer'
import CardGroup from 'react-bootstrap/CardGroup';
function Agent() {
    return ( 
    <>
      <AgentNavBar/>
      
    <CardGroup className="m-5">
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/3hjjzndpnmofrci/settingsedit_y5f4iZo2GJ.jpg'} URL={'/myaccountagentmenu'} Title={'My Account'} Description={''}/>

              <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/myinsuranceagentmenu'} Title={'Insurance'} Description={''}/>
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/marketing'} Title={'Marketing'} Description={''}/>
    </CardGroup>
    </> 
    );
}

export default Agent;