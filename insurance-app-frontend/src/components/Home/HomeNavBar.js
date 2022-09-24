import { Link, useNavigate } from "react-router-dom";
import InsuranceTypeDropDown from "../AdminDashBoard/DropDown";
import logo from './logo1.png'


function HomeNavBar(props) {
  const navigation  = new  useNavigate()
    return ( 
        <>
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top ">
        <div className="container ">
        <a class="navbar-brand" href="/">
        <img src={logo} alt="brand logo" width="70" height="40" className="d-inline-block align-text-top "/>
            
        </a>
          <Link className="navbar-brand " to="/">Home</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0 ">
              
                <InsuranceTypeDropDown/>
                <li><Link className="nav-link  " to="/register">Register</Link></li>
                <li><Link className="nav-link  " to="/">Contact</Link></li>
                <li><Link className="nav-link  " to="/">About Us</Link></li>
              </ul>
  
          </div>
          
          { props.value === true ? '' : <button type="button" className="btn btn-outline-warning"  style={{"float":"right"}} onClick={()=>{navigation('/login')}}>Login</button>}
    </div>
  </nav>


</>
     );
}

export default HomeNavBar;