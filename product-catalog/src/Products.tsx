import { Row } from "react-bootstrap";
import Product from "./Product";
import { connect } from "react-redux";

function Products(props) {
  var a = props.productList.map((e, i) => {
    return <Product item={e} key={i} />;
  });
  return <Row>{a}</Row>;
}

function mapStateToProps(state) {
  return { productList: state.productList };
}

// function mapDispatchToProps(dispatch) {
//   return {};
// }

export default connect(mapStateToProps)(Products);
