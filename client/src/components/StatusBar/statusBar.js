import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavBtnLink,
  FormH2,
} from "./statusBarElements";
import { Toolbar, Avatar } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import tent from "../../images/tent.svg";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const StatusBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={tent} alt="img" />
          </NavLogo>

          <NavMenu>
            <Toolbar className={classes.toolbar}>
              {user?.result ? (
                <div className={classes.profile}>
                  <Avatar
                    style={{ backgroundColor: "#f98424", fontSize: "17px" }}
                    alt={user?.result.name}
                  >
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

export default StatusBar;
