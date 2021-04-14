import React from "react";
import featureImage from "./featured4.jpeg";
import styled from "styled-components";

export const FeatureContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  padding-bottom: 3rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    position: relative;
    background: pink;
    color: black;
    top: 100px;
  }
  p {
    margin-bottom: 2rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  border: none;
  background: #e9ba23;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: uppercase;
  margin-top: 50px;

  &:hover {
    background: #cf7500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: cornsilk;
  }
`;

const Features = () => {
  return (
    <FeatureContainer>
      <h1>#OOTD </h1>
      <img src={featureImage} alt="" />
      <FeatureButton>Shop the look</FeatureButton>
    </FeatureContainer>
  );
};

export default Features;
