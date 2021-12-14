import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;
export const NavbarContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #f7882f;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bolder;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    /* font-size: 0.11rem;
    width: 10px; */
  }
`;
export const NavLogo2 = styled(LinkR)`
  color: #f7882f;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bolder;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
`;
export const NavItem = styled.ul`
  height: 60px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 5px solid #f7882f;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  //signin
  border-radius: 50px;
  background: #f7882f;
  white-space: nowrap;
  padding: 8px 22px;
  color: #010606;
  font-size: 17px;
  font-weight: bolder;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
    padding: 6px 20px;
  }
`;
export const FormH2 = styled.p`
  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;
  font-size: 15px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
