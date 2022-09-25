import NavDropdown from 'react-bootstrap/NavDropdown';
function Agent() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Agent" menuVariant="dark">
       <NavDropdown.Item   href="/createagent">Add Agent</NavDropdown.Item>
       <NavDropdown.Item   href="/allagents">View Agents</NavDropdown.Item>
       <NavDropdown.Item   href="/viewallagentcommissions">View Commissions</NavDropdown.Item>
       <NavDropdown.Item   href="/commissionapproval">Comission Withdrawal Requests</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default Agent;