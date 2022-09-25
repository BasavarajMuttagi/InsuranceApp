import NavDropdown from 'react-bootstrap/NavDropdown';
function InsuranceAccountsInCustomer() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Insurance Account" menuVariant="dark">
       <NavDropdown.Item   href="/mypolicies">View Policies</NavDropdown.Item>
       <NavDropdown.Item   href="/policyclaim">Claim Policy</NavDropdown.Item>
    </NavDropdown>
    </> );
}

export default InsuranceAccountsInCustomer;