import NavDropdown from 'react-bootstrap/NavDropdown';
function Agent() {
    return ( 
    <>
    <NavDropdown  id="nav-dropdown-dark-example" title="Agent" menuVariant="dark">
       <NavDropdown.Item   href="/createagent">Create Agent</NavDropdown.Item>
       <NavDropdown.Item   href="/allagents">View Agent </NavDropdown.Item>
       {/* <NavDropdown.Item   href="/"></NavDropdown.Item>
       <NavDropdown.Item   href="/">Create Plan</NavDropdown.Item>
       <NavDropdown.Item   href="/">Create Plan Type</NavDropdown.Item>
       <NavDropdown.Item   href="#">Tax Settings</NavDropdown.Item>
       <NavDropdown.Item   href="/">View And Modify Plans</NavDropdown.Item>
       <NavDropdown.Item   href="/">View And Modify Plan Types</NavDropdown.Item> */}
    </NavDropdown>
    </> );
}

export default Agent;