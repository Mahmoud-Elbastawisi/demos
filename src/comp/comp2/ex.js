import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='links' to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link className='links' to="/C">Contact</Link></Nav.Link>
            <Nav.Link><Link className='links' to="/C">about</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;