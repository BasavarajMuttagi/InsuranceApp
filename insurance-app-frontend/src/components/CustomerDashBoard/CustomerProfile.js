import NavDropdown from 'react-bootstrap/NavDropdown';
function CustomerProfile() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Customer Profile" menuVariant="dark">
       <NavDropdown.Item   href="/customerprofile">Profile</NavDropdown.Item>
       <NavDropdown.Item   href="/uploaddocuments">Documents</NavDropdown.Item>
       <NavDropdown.Item   href="/changepassword">Change Password</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default CustomerProfile;