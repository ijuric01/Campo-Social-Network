import React, { useState, useEffect } from "react";
import { Toolbar, Avatar } from "@material-ui/core";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  FormH2,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";
import decode from "jwt-decode";
import tent from "../../images/tent.svg";

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const changeNavBar = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     window.addEventListener("scroll", changeNavBar);
  //   } else {
  //     return () => {
  //       isMounted = false;
  //       //setScrolled({});
  //     };
  //   }
  // }, []);
  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  }, []);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/");
    setUser(null);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={tent} alt="tent" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Servicies"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Servicies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign up
              </NavLinks>
            </NavItem>
            <Toolbar className={classes.toolbar}>
              {user?.result ? (
                <div className={classes.profile}>
                  <Avatar className={classes.purple} alt={user?.result.name}>
                    {user?.result.name.charAt(0)}
                  </Avatar>
                  <FormH2 className={classes.userName} variant="h6">
                    {user?.result.name}
                  </FormH2>
                  <NavBtnLink
                    to="/"
                    className={classes.logout}
                    onClick={logout}
                  >
                    Logout
                  </NavBtnLink>
                </div>
              ) : (
                <NavBtnLink to="/SignIn">Sign In</NavBtnLink>
              )}
            </Toolbar>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
