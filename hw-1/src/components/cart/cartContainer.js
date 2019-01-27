import { connect } from 'react-redux';
import Cart from './cartView';
import { cartSelectors, cartAction } from '../../redux/modules/shopingCart';

const mapStateToProps = state => ({
  products: cartSelectors.getCartProducts(state),
});

const mapDispatchToProps = {
  deletProduct: cartAction.deletIdCart,
  cartIncrement: cartAction.addToCart,
  cartDecrement: cartAction.cartDecrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
