import NavDropdown from 'react-bootstrap/NavDropdown';
function MyAccountInEmployee() {
    return ( 
    <>
       <NavDropdown id="nav-dropdown-dark-example" title="My Account" menuVariant="dark">
       <NavDropdown.Item   href="/employeeprofile">Profile</NavDropdown.Item>
       <NavDropdown.Item   href="/changepassword">Change Password</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default MyAccountInEmployee;