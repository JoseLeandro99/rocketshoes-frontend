import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, Loading } from './styles';
import api from '../../services/api';

import loading from '../../assets/anims/loading.json';

class Home extends Component {
  state = {
    products: [],
    loaded: false,
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data, loaded: true });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loaded } = this.state;
    return (
      <ProductList>
        {!loaded && <Loading options={{ animationData: loading }}/>}
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
    
            <button type="button" onClick={() => {this.handleAddProduct(product.id)}}>
              <div>
                <MdAddShoppingCart size={16} color="#ffffff" />
                3
              </div>
    
              <span>Adiconar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch)

export default connect(null, mapDispatchToProps)(Home);
