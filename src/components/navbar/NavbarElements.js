import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export const Nav = styled.nav`
  background: transparent;
  /* background: linear-gradient(to right, rgba(62, 64, 149, 0.4)); */
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  /* position: fixed;
  width: 100%; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: "10px";
    left: "20px";
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
export const Cart = styled(IoMdCart)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
