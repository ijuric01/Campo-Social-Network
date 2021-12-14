import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { BsFillShieldLockFill } from "react-icons/bs";
import { signin, signup } from "../actions/auth";
import { AUTH } from "../constants/actionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/react-toastify.cjs.development";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";
import {
  Containerr,
  FormButton,
  FormWrap,
  Formm,
  MutedLink,
  BoldLink,
  FormH1,
  FormContent,
  FormLabel,
  Text,
  Iconn,
} from "./SignInElements";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
toast.configure();

const SignIn = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj; //da ne doivamo errore ako ne postoji
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/posts"); //redirection
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Containerr>
      <FormWrap>
        <FormContent>
          <Formm onSubmit={handleSubmit}>
            <Iconn>
              <BsFillShieldLockFill fontSize="30px" />
            </Iconn>
            <FormH1>{isSignup ? "Sign up" : "Sign in"}</FormH1>

            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <FormLabel>Enter first name and last name</FormLabel>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Text>Enter E-mail adress</Text>
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Text>Enter password</Text>
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type="password"
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>

            <GoogleLogin
              clientId={
                "656533077335-irphrcguuabl3i5so7t4469f56a3d2h8.apps.googleusercontent.com"
              }
              render={(renderProps) => (
                <FormButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                >
                  {<Icon />} Google SignIn
                </FormButton>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />

            <FormButton type="submit">
              {isSignup ? "Sign Up" : "Sign In"}
            </FormButton>

            <Grid container justify="center">
              <MutedLink>Don't have an account? </MutedLink>
              <BoldLink onClick={switchMode}>
                {isSignup ? "Sign in" : " Sign Up"}
              </BoldLink>
            </Grid>
          </Formm>
        </FormContent>
      </FormWrap>
    </Containerr>
  );
};

export default SignIn;
