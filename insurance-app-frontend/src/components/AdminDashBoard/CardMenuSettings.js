import Cards from "./CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
import AdminNavBar from "./AdminNavBar";
function CardMenuSettings() {
    return ( 
    <>
    <AdminNavBar/>
    <CardGroup className="m-5">
            <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={"/addcountry"} Title={'Create Country'}/>
            <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={"/addstate"} Title={'Create State'} />
            <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={"/addcity"} Title={'Create City'}/>
            <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={"/createplan"} Title={'Create Plan'} />
            <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={"/createplantype"} Title={'Create Plan Type'}/>
            <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={"/createrole"} Title={'Create Role'} />
            <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'#'} Title={'Tax Settings'}/>
            <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={"/viewplans"} Title={'View And Modify Plans'} />
            <Cards imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/wh84z4ql9oedrak/employeeedit2_AlhwE8TIH9.jpg'} URL={"/viewplantypes"} Title={'View And Modify Plan Types'} />
    </CardGroup>
    </> );
}

export default CardMenuSettings;
