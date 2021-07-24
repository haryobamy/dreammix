import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.2s ease-in-out;

  right: ${({ cartIsOpen }) => (cartIsOpen ? "0" : "-1000px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcons = styled(FaIcons.FaTimes)`
  color: #000;
`;

export const CartMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: repeat(5, 80px); */
  grid-template-rows: repeat(
    (${({ length }) => (length > 0 ? length : 0)}),
    80px
  );
  text-align: center;
  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(
      (${({ length }) => (length > 0 ? length : 0)}),
      60px
    );
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const CartsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;

  /* input {
    outline: none;
    border: none;
    width: 30px;
    /* background: none; */
  /* text-align: center; */

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const CartsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const CartBtn = styled.button`
  margin-left: 10px;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 5px;
  background: #e31837;
  color: #fff;
  outline: none;
  /* font-size: 16px; */
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const CartQty = styled.h6`
  margin-left: 10px;
`;

export const CartTotal = styled.div`
  text-align: center;
  font-weight: bold;
  margin-top: ${({ length }) => (length > 0 ? "-250px" : "20px")};
  /* margin-bottom: -200px; */

  span {
    color: #fff;
  }
`;

export const TotalQty = styled.p`
  margin-top: ${({ length }) => (length > 0 ? "-120px" : "0")};
  margin-bottom: 5px;
  font-size: 22px;
`;

export const TotalPrice = styled.p`
  margin-bottom: 20px;
  font-size: 22px;
`;

export const CartH1 = styled.h1``;

export const ItemName = styled.h3`
  font-size: 16px;
  font-weight: bolder;

  width: 100%;
  max-width: 110px;
`;

export const ItemPrice = styled.h6`
  margin-left: 10px;

  width: 100%;
  max-width: 70px;
`;
