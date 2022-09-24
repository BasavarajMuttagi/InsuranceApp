import NavDropdown from 'react-bootstrap/NavDropdown';
function MyAccount() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="My Account" menuVariant="dark">
       <NavDropdown.Item   href="/profile">Profile</NavDropdown.Item>
       <NavDropdown.Item   href="/changepassword">Change Password</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default MyAccount;