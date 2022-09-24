import NavDropdown from 'react-bootstrap/NavDropdown';
function QueriesInCustomer() {
    return ( 
    <>
    <NavDropdown id="nav-dropdown-dark-example" title="Queries" menuVariant="dark">
       <NavDropdown.Item   href="/createquery">Create Query</NavDropdown.Item>
       {/* <NavDropdown.Item   href="/viewreply">View Feedback</NavDropdown.Item> */}
    </NavDropdown>
    </> );
}

export default QueriesInCustomer;