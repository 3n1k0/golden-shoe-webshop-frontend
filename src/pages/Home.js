import React from "react";
import { GlobalStyle } from "../config/globalStyles";
import Products from "../components/ProductsElements";
import Features from "../components/Feature/FeatureElements";
import Footer from "../components/FooterElements";
import styled from "styled-components";
import ImgBg from "../images/shoe-5.jpeg";
import FullNavbar from "../components/FullNavbar.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  background-position: 70% 90%;
  height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 0px;

  @media screen and(min-width: 1025px) {
    padding: 100px;
  }
`;

export const HeroContent = styled.div`
  max-height: 100%;
  width: 100%;
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 3.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  font-family: "Playfair Display", serif;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 2.5rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  border: none;
  background: #e9ba23;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: uppercase;

  &:hover {
    background: #cf7500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: cornsilk;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <FullNavbar />
      <HeroContainer>
        <HeroContent>
          <HeroItems>
            <HeroH1>Uplifting fashion</HeroH1>
            <HeroP>new arrivals</HeroP>
            <HeroBtn>Shop spring styles</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <Products data={products} />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
