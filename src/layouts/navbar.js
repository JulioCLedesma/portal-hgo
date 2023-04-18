import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >HGO-Zoquipan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/calidad">Calidad</Nav.Link>
                <Nav.Link as={Link} to="/farmacovigilancia">Farmacovigilancia</Nav.Link>
                <Nav.Link as={Link} to="/tecnovigilancia">Tecnovigilancia</Nav.Link>
                <Nav.Link as={Link} to="/mantenimiento">Mantenimiento</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample