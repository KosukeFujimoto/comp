import './App.css';
import { Container, Row, Col, Tabs, Tab, Table, thread, tbody, tr, td } from 'react-bootstrap'


// Generate Table Based on input csv file
// Add function to check if 
function DataTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}


function Main() {

  return (<Tabs
    defaultActiveKey="home"
    id="noanim-tab-example"
    className="mb-3"
  >
    {/* 
      Generate Tabs based on a config file 
    */}
    <Tab eventKey="home" title="Home">
      <DataTable />
    </Tab>
  </Tabs>);
}


function App() {
  return (
    <Container>
      <Row>
        {/* Left Column should have Menu such as load file, export file */}
        <Col md={3}></Col>
        {/* Main Part will load csv file from local directory and populate config page */}
        <Col md={6}>
          <Main />
        </Col>
        {/* No usage for nows */}
        <Col md={3}></Col>
      </Row>
    </Container >
  );
}

export default App;
