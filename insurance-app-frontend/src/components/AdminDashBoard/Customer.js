import NavDropdown from 'react-bootstrap/NavDropdown';
function Customer() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Customer" menuVariant="dark">
       <NavDropdown.Item   href="/allcustomers">View Customers</NavDropdown.Item>
       <NavDropdown.Item   href="/queries">View Customer Queries</NavDropdown.Item>
       <NavDropdown.Item   href="/allinsuranceaccounts">View Insurance Accounts</NavDropdown.Item>
       <NavDropdown.Item   href="/policyclaimsettlement">Policy Claim Settlement</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default Customer;