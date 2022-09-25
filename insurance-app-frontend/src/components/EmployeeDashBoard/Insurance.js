import NavDropdown from 'react-bootstrap/NavDropdown';
function InsuranceInEmployee() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Insurance" menuVariant="dark">
       <NavDropdown.Item   href="/allcustomers">View Customers</NavDropdown.Item>
       <NavDropdown.Item   href="/allinsuranceaccounts">Insurance Account</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Claim</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Payments</NavDropdown.Item>

    </NavDropdown>
    </> );
}

export default InsuranceInEmployee;