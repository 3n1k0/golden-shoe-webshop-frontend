import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  padding: 20px 20px;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const ProductCard = styled.div`
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 10px 15px;
  margin: 10px;
  color: black;
  min-height: 470px;
  max-height: 470px;

`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 280px;
  max-height: 280px;
  object-fit: cover;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  padding-top: 10px;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductPrice = styled.p`
  font-size: 1em;
  padding: 20px 0px; 
`;

export const ProductBrand = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Kiwi Maru";
  color: #e9ba23;
`;

const Products = ({ data }) => {
  return (
    <ProductsContainer>
      {data.map((product, index) => {
        return (
          <Link to={`/shop/${product._id}`}>
            <ProductCard key={index}>
              <ProductImage src={product.imageUrl} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}.-</ProductPrice>
                <ProductBrand>{product.brand}</ProductBrand>
              </ProductInfo>
            </ProductCard>
          </Link>
        );
      })}
    </ProductsContainer>
  );
};

export default Products;
