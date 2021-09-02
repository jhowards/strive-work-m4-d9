import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <Navbar bg="dark" expand="md">
            <Link to="/">
        <Navbar.Brand className="text-light">
        React Bookstore
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/register" className="text-light" >Register</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar