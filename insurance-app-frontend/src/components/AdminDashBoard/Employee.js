import NavDropdown from 'react-bootstrap/NavDropdown';
function Employee() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Employee" menuVariant="dark">
       <NavDropdown.Item   href="/createemployee">Create Employee</NavDropdown.Item>
       <NavDropdown.Item   href="/allemployees">View Employee</NavDropdown.Item>
       {/* <NavDropdown.Item   href="/">Create City</NavDropdown.Item>
       <NavDropdown.Item   href="/">Create Plan</NavDropdown.Item>
       <NavDropdown.Item   href="/">Create Plan Type</NavDropdown.Item>
       <NavDropdown.Item   href="#">Tax Settings</NavDropdown.Item>
       <NavDropdown.Item   href="/">View And Modify Plans</NavDropdown.Item>
       <NavDropdown.Item   href="/">View And Modify Plan Types</NavDropdown.Item> */}
    </NavDropdown>
    </> );
}

export default Employee;