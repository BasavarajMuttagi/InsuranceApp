import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import InsuranceInAgent from "./Insurance";
import MyAccountInAgent from "./MyAccount";
import Nav from 'react-bootstrap/Nav';


function AgentNavBar() {
  const navigation = new useNavigate()
  const handleMyLogout = async() =>{


     await axios.post("http://localhost:8888/api/logout",{}).then(resp =>{
      if(resp.status === 200){
        console.log(resp.data);
        localStorage.removeItem('user')
        localStorage.removeItem('userName')
        navigation('/')
      }
    })
    .catch(err=>{
      console.log(err.response.data);
    })

  }
    return ( 
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top ">
        <div className="container ">
          <Link className="navbar-brand " to="/agent">AGENT DASHBOARD</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
              <MyAccountInAgent/>
              <InsuranceInAgent/>
              <Nav.Link href="/marketing">Marketing</Nav.Link>
              </ul>
          </div>
          
          <button type="button" className="btn btn-outline-warning" style={{"float":"right"}} onClick={()=>{handleMyLogout()}}>Logout</button>
    </div>
  </nav>


</>
     );
}

export default AgentNavBar;