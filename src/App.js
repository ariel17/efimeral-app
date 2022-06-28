import { BoxLoading } from 'react-loadingg';
import { Container, Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Link 1</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BoxLoading />
    </>
  );
}

export default App;
