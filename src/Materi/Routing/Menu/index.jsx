import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Menu () {
    return(
        <>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="fw-bolder">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0 fw-bolder"
                    style={{ maxHeight: '120px' }}
                    navbarScroll
                >
                    <Nav.Link className="me-5 active" href="/">Home</Nav.Link>
                    <Nav.Link className="me-5 active" href="/about">About Me</Nav.Link>
                    <Nav.Link className="active"href="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
