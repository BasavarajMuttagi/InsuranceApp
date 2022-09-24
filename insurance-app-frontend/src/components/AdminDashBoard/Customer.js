import NavDropdown from 'react-bootstrap/NavDropdown';
function Customer() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Customer" menuVariant="dark">
       <NavDropdown.Item   href="/allcustomers">View Customers</NavDropdown.Item>
       <NavDropdown.Item   href="/queries">View Customer Queries</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Claims</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Payments</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default Customer;