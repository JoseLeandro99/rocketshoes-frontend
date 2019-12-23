import React from 'react';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';
import { MdShoppingBasket } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#ffffff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);