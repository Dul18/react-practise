import Home from '../components/Home';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: () => dispatch(removeToCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
