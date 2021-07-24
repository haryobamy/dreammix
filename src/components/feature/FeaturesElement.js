import styled from "styled-components";
import cheffonCake from "../../images/cheffonCake.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${cheffonCake});
  max-height: 500px;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    font-size: clamp(1rem, 5vw, 2rem);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-in-out;
  border-radius: 10px;
  border: none;
  &:hover {
    color: #fff;
    background: #e31837;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;
