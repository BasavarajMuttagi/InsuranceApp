import Cards from "../AdminDashBoard/CardRenderer";
import CardGroup from 'react-bootstrap/CardGroup';
function CardMenuQueriesInCustomer() {
    return ( 
    <>
    <CardGroup className="m-5">
    <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/createquery'} Title={'Queries'}/>
    {/* <Cards  imageURL={'http://127.0.0.1:8090/api/files/h464b2ssrbuu1ts/ipuoqijwmwgxw8r/agentedit_vn3rWxmQvQ.jpg'} URL={'/viewreply'} Title={'View Feedback'}/> */}
    
    </CardGroup>
    </> );
}

export default CardMenuQueriesInCustomer;