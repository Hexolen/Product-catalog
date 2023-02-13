import { Row } from "react-bootstrap";
import CartView from "./Cart_view";
import { connect } from "react-redux";

function Cart(props) {
  var a = props.cart.map((e, i) => {
    return <CartView itemId={e.id} amount={e.amount} key={e.id} />;
  });
  return <Row>{a}</Row>;
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Cart);
