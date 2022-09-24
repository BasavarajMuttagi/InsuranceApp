import NavDropdown from 'react-bootstrap/NavDropdown';
function MyAccountInAgent() {
    return ( 
    <>
       <NavDropdown id="nav-dropdown-dark-example" title="My Account" menuVariant="dark">
       <NavDropdown.Item   href="/agentprofile">Profile</NavDropdown.Item>
       <NavDropdown.Item   href="/changepassword">Change Password</NavDropdown.Item>
       <NavDropdown.Item   href="/viewcomission">View Comission </NavDropdown.Item>
       <NavDropdown.Item   href="#">View Comission Withdrawal</NavDropdown.Item>
       <NavDropdown.Item   href="/withdrawamount">Withdraw Amount</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default MyAccountInAgent;