import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FormPageDetails() {
  return (
    <div>
      <div className="container">
       <h1 className="mt-4">Ticket Details</h1>
       <>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextuserId">
         <Form.Label column sm="2">
          User Id
          </Form.Label>
          <Col sm="10">
            <Form.Control size="lg" type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSummary">
         <Form.Label column sm="2">
          Summary
          </Form.Label>
          <Col sm="10">
            <Form.Control size="lg" type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDetails">
         <Form.Label column sm="2">
          Details
          </Form.Label>
          <Col sm="10">
            <Form.Control size="lg" type="textArea" placeholder="" />
          </Col>
         </Form.Group>
         <Button variant="success">Submit</Button>
        </Form>
      </>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div>
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
  <FormPageDetails />
   </div>
  );
}