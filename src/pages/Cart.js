import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import FullNavbar from "../components/FullNavbar";
import Footer from "../components/FooterElements";
import { GlobalStyle } from "../config/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { AddToCartButton } from "./ProductPage";

export const CartContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: grid;
  place-items: center;
  

  h3 {
    padding: 50px;
    text-align: center;

    a {
      color: black;
      text-decoration: underline;
    }
  }
  img {
    padding-right: 10px;
  }
  p {
    width: 250px;
    padding: 5px;
  }
`;

export const OrderTotal = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(230, 230, 230, 0.6);
  height: 100%;
  padding: 50px;

  p {
    font-weight: bolder;
    padding: 10px;
    text-align: center;
  }
`;

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <FullNavbar />
      <GlobalStyle />
      <CartContainer>
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <h3>
            Your Cart Is Empty
            <br /> <Link to="/">Back To Shop</Link>
          </h3>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
        {cartItems.length !== 0 && (
          <OrderTotal>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>€{getCartSubTotal()}</p>
            <AddToCartButton>Proceed To Checkout</AddToCartButton>
          </OrderTotal>
        )}
      </CartContainer>
      <Footer />
    </>
  );
};

export default CartScreen;
