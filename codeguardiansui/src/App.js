import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Navbar  bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Code Guardians Hackathon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Create New Ticket</Nav.Link>
          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">View Tickets</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              External Links
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default App;