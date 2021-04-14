import React from "react";
import { GlobalStyle } from "../config/globalStyles";
import FullNavbar from "../components/FullNavbar";
import { NavLink } from "react-router-dom";
import { getProductDetails } from "../redux/actions/productActions.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/FooterElements";
import { addToCart } from "../redux/actions/cartActions";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";

export const DropDownContainer = styled.div`
display: flex;
align-items: center;

p{
  padding: 10px;
}
`

export const SizeSelector = styled.select`
  font-size: 16px;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 20%;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-top: 5px;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;

export const AddToCartButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  cursor: pointer;
  background: #222;
  border: 1px solid transparent;
  border-radius: 0;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  line-height: 34px;
  padding: 7px 20px;
  font-size: 15px;
  transition: background 0.2s, border-color, 0.2s, color 0.2s;
  

  &:hover {
  }
`;
export const StyledLikeButton = styled(BiHeart)`
  color: black;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 5px;
  margin-left: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FirstBigContainer = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    flex-flow: row;
    align-items: flex-start;
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    cursor: pointer;

    @media screen and (min-width: 1025px) {
      width: 80%;
    }
  }

  h2 {
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 1.3px;
    padding-bottom: 12px;
  }

  span {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  h5 {
    font-size: 10px;
    padding: 5px;
  }

  div{
    display: flex;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  &:hover {
  }
`;

export const SecondBigContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 100px;
  padding: 50px;

  p {
    width: 90%;
    text-align: center;
    @media screen and (min-width: 1025px) {
      width: 55%;
    }
  }
`;

export const AddToCartContainer = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  width: 120%;
  margin-bottom: 30px;
`;

export const Stars = styled(RiStarSFill)`
  color: orange;
`;
export const Reviews = styled.div`
  display: flex;
  padding-bottom: 20px;

  p {
    font-size: 10px;
    text-decoration: underline;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  font-family: "Arial Black";
  padding-bottom: 5px;
`;

export const Color = styled.p`
  padding: 10px;
  font-size: 13px;
`;

export const ViewCart = styled(NavLink)`
  font-size: 13px;
  color: black;
  padding: 20px;
  position: relative;
  right: 25px;
  text-decoration: underline;
`;

export const Truck = styled(FiTruck)`
  color: black;
  font-size: 1.5em;
  width: 100px;
  position: relative;
  left: 0;
`;

export const Arrow = styled(GiReturnArrow)`
  color: black;
  width: 100px;
  font-size: 1.5em;
  position: relative;
  left: 0;
`;

export const ShippingInformation = styled.div`
  color: #767676;
  font-size: 12px;
  line-height: 1;
  background: rgb(247, 248, 250);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 15px;

  p {
    line-height: 1.3;
    width: 200px;
    height: 90px;
  }
`;

export const ReturnPolicy = styled(ShippingInformation)`
  padding-bottom: 30px;
`;

export const Status = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };



  return (
    <>
      <GlobalStyle />
      <FullNavbar />
      <FirstBigContainer>
        <ImageContainer>
          <img src={product.imageUrl} alt="" />
        </ImageContainer>
        <span>
          <h2>{product.name}</h2>
          <h5>SKU: {product._id}</h5>
          <Reviews>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <p>(149 reviews)</p>
          </Reviews>
          <Status>
            Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </Status>
          <Price>€ {product.price}</Price>
          <Color>
            <b>Color:</b> {product.color}
          </Color>
          <DropDownContainer>
            <p>Quantity</p>
            <SizeSelector value={qty} onChange={(e) => setQty(e.target.value)}>
              {new Array(product.countInStock).fill(0).map((item, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </SizeSelector>
            <p style={{ paddingTop: "20px" }}>Size (EU)</p>
            <SizeSelector>
              <option>37</option>
              <option>38 - out of stock -</option>
              <option>39</option>
              <option>41</option>
              <option>42</option>
              <option>43 - out of stock -</option>
            </SizeSelector>
          </DropDownContainer>
          <AddToCartContainer>
            <AddToCartButton onClick={addToCartHandler}>
              Add to cart
            </AddToCartButton>

            <StyledLikeButton />
            <NavLink to="/liked"></NavLink>
          </AddToCartContainer>

          <ShippingInformation>
            <Truck />
            <p>
              Free Shipping Free standard shipping on orders over 29,00€
              Estimated to be delivered on 26/04/2021 - 29/04/2021.
            </p>
          </ShippingInformation>
          <ReturnPolicy>
            <Arrow />
            Return Policy
            <br /> Learn more
          </ReturnPolicy>
        </span>
      </FirstBigContainer>
      <SecondBigContainer>
        <p>{product.description}</p>
      </SecondBigContainer>
      <Footer />
    </>
  );
};

export default ProductPage;
