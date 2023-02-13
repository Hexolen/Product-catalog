import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Nav, Navbar, Badge } from "react-bootstrap";
//import { FindItemCountInCart } from "./reducers";

function Menu(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Ucuza Al Sitesi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Cart">
            Cart
            <Badge bg="secondary" pill>
              {props.cart.length}
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Menu);
