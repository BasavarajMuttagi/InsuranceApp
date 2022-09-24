import NavDropdown from 'react-bootstrap/NavDropdown';
function Settings() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Settings" menuVariant="dark">
       <NavDropdown.Item   href="/addcountry">Create Country</NavDropdown.Item>
       <NavDropdown.Item   href="/addstate">Create State</NavDropdown.Item>
       <NavDropdown.Item   href="/addcity">Create City</NavDropdown.Item>
       <NavDropdown.Item   href="/createplan">Create Plan</NavDropdown.Item>
       <NavDropdown.Item   href="/createplantype">Create Plan Type</NavDropdown.Item>
       <NavDropdown.Item   href="/createrole">Create Role</NavDropdown.Item>
       <NavDropdown.Item   href="#">Tax Settings</NavDropdown.Item>
       <NavDropdown.Item   href="/viewplans">View And Modify Plans</NavDropdown.Item>
       <NavDropdown.Item   href="/viewplantypes">View And Modify Plan Types</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default Settings;