import NavDropdown from 'react-bootstrap/NavDropdown';
function Agent() {
    return ( 
    <>
    <NavDropdown  id="nav-dropdown-dark-example" title="Agent" menuVariant="dark">
       <NavDropdown.Item   href="/createagent">Create Agent</NavDropdown.Item>
       <NavDropdown.Item   href="/allagents">View Agent</NavDropdown.Item>
       <NavDropdown.Item   href="/viewallagentcommissions">View Agent Commissions</NavDropdown.Item>
       <NavDropdown.Item   href="/commissionapproval">View Commission Requests</NavDropdown.Item>


    </NavDropdown>
    </> );
}

export default Agent;