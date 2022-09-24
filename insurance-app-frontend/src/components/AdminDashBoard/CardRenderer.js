import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards(props) {
    const navigation = new useNavigate()
    return (
        
        <a href={props.URL}  className="link-dark text-decoration-none m-5" > 
            <Card style={{ width: '100%' ,height:'100%',border: '3px solid black'}} className="border-2">
           <Card.Img variant="top" src={props.imageURL} style={{ width: '220px' ,height:'200px'}} />
            <Card.Body>
                <Card.Title className='text-wrap ' style={{fontWeight:'bold'}} >{props.Title}</Card.Title>
                <Card.Text className='text-wrap '>
                {props.Description}
                </Card.Text>
                
            </Card.Body>
            </Card>
            </a>
      );
}

export default Cards


