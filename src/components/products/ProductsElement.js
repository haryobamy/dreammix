import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
export const ProductHeading = styled.h1`
  margin-bottom: 5rem;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  max-width: 100%;
  min-width: 300px;
  height: 300px;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;

  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  color: #fff;
  background: #e31837;
  transition: 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    color: #000;
    background: #ffc500;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;
