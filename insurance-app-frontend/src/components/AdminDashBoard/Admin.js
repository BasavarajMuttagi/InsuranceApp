import AdminNavBar from "./AdminNavBar";

import Cards from './CardRenderer'
import CardGroup from 'react-bootstrap/CardGroup';
function Admin() {
    return ( 
    <>
    <AdminNavBar/>

    <CardGroup className="m-5">
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/3hjjzndpnmofrci/settingsedit_y5f4iZo2GJ.jpg'} URL={'/adminmenu'} Title={'My Account'} Description={''}/>

              <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/agentmenu'} Title={'Agent'} Description={''}/>
              

           
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={'/employeemenu'} Title={'Employee'} Description={''}/>
              
              
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/y9hpza3bcrpcp8x/customeredit_tirPUzpprz.jpg'} URL={'/customermenu'} Title={'Customer'} Description={''}/>
              
        
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/5d2hjvsdll3iz9p/insuranceedit_bFX1sdErun.jpg'} URL={'/insuranceplansmenu'} Title={'Insurance Plans'} Description={''}/>
              
              
              
              <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/3hjjzndpnmofrci/settingsedit_y5f4iZo2GJ.jpg'} URL={'/settingsmenu'} Title={'Settings'} Description={''}/>
              

    </CardGroup>
    </> 
    );
}

export default Admin;

