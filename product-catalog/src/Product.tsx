import { Col, Row } from "react-bootstrap";
import { AddToCartReducer } from "./reducers";
import { connect } from "react-redux";

function Product(props) {
  return (
    <Col xs={12} md={6} lg={4}>
      <Row>
        <h3>{props.item.name}</h3>
        <Col xs={4}>
          <img
            width="100%"
            height="auto"
            src={props.item.picture}
            alt={props.item.name + " resimi bulunamadı"}
          />
        </Col>
        <Col xs={8}>
          <p>Price: {props.item.price}</p>
          <p>Stock: {props.item.stock}</p>
          <button
            onClick={() => {
              props.AddToCartReducer(props.item);
            }}
          >
            Add To Cart
          </button>
        </Col>
      </Row>
    </Col>
  );
}

function mapStateToProps(state) {
  return { productList: state.productList };
}

export default connect(mapStateToProps, { AddToCartReducer })(Product);
