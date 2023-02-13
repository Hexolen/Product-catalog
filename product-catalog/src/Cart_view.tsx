import { Col, Row } from "react-bootstrap";
import { FindProduct } from "./reducers";
import {
  AddToCartReducer,
  DecreaseAmountReducer,
  IncreaseAmountReducer
} from "./reducers";
import { connect } from "react-redux";

function CartView(props) {
  var item = FindProduct(props.productList, props.itemId);
  if (item) {
    return (
      <Col xs={12} md={6} lg={4}>
        <Row>
          <h3>{item.name}</h3>
          <Col xs={4}>
            <img
              width="100%"
              height="auto"
              src={item.picture}
              alt={item.name + " resimi bulunamadı"}
            />
          </Col>
          <Col xs={8}>
            <p>Price: {item.price}</p>
            <p>
              <button
                onClick={() => {
                  props.DecreaseAmountReducer(item);
                }}
              >
                -
              </button>
              Amount: {props.amount}
              <button
                onClick={() => {
                  props.IncreaseAmountReducer(item);
                }}
              >
                +
              </button>
            </p>
            <p>Total Price: {Number(item.price * props.amount).toFixed(2)}</p>
          </Col>
        </Row>
      </Col>
    );
  } else {
    return (
      <div>
        <p>Id: {props.itemId}</p>
        <p>This Id cannot be found</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { productList: state.productList, cart: state.cart };
}

export default connect(mapStateToProps, {
  AddToCartReducer,
  DecreaseAmountReducer,
  IncreaseAmountReducer
})(CartView);
