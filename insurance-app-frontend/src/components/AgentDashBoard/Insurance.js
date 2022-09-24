import NavDropdown from 'react-bootstrap/NavDropdown';
function InsuranceInAgent() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Insurance" menuVariant="dark">
       {/* <NavDropdown.Item   href="#">View Customers</NavDropdown.Item> */}
       <NavDropdown.Item   href="/insuranceaccountsinagent">Insurance Account</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Claim</NavDropdown.Item>
       <NavDropdown.Item   href="#">View Policy Payments</NavDropdown.Item>

    </NavDropdown>
    </> );
}

export default InsuranceInAgent;