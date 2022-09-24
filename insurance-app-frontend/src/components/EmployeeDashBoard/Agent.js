import NavDropdown from 'react-bootstrap/NavDropdown';
function Agent() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Agent" menuVariant="dark">
       <NavDropdown.Item   href="/createagent">Add Agent</NavDropdown.Item>
       <NavDropdown.Item   href="/allagents">View Agents</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Commission</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Commission Withdrawal</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default Agent;