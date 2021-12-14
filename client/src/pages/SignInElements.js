import styled from "styled-components";
import { Link } from "react-router-dom";

export const Containerr = styled.div`
  min-height: 690px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  background-image: url(https://images.pexels.com/photos/5717775/pexels-photo-5717775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  -o-object-fit: cover;
  object-fit: cover;
  @media screen and (max-width: 400px) {
    overflow-y: scroll; //bilo je
  }
`;
export const FormWrap = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%; //bilo je
  }
`;
export const IconCampo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: -90px;
  margin-left: 200px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    text-align: center;
    justify-content: center;
    display: fixed;
  }
`;
export const Iconn = styled.div`
  text-decoration: none;
  text-align: center;
  color: #f7882f;
  margin-bottom: 4px;
  cursor: default;

  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
`;
export const FormContent = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 20px;
    //  padding-bottom: 150px; //!!!!!!!!!!
  }
`;
export const Formm = styled.form`
  // bež  background:#dcc7aa;
  background: white;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.2)
  );
  border-radius: 2rem;
  /* z-index: 2; */
  backdrop-filter: blur(0.3rem);

  // background:#6B7A8F;
  max-width: 350px;
  height: auto;
  width: 100%;

  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 400px) {
    padding: 16px 26px;
    max-width: 350px;
    min-height: 400px;
  }
`;
export const FormH1 = styled.h1`
  color: #fff;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;
export const FormLabel = styled.label`
  font-size: 14px;
  color: #6b7a8f;
  margin-left: 10px;
  @media screen and (max-width: 400px) {
  }
`;
export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #f7882f;
  width: 60%;
  align-self: center;
  place-self: center;
  margin-top: 20px;
  padding: 10px 0;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  font-weight: bolder;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 400px) {
    margin-top: 12px;
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  color: #6b7a8f;
  margin-left: 10px;
  @media screen and (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;
export const MutedLink = styled.a`
  font-size: 13px;
  color: #3d4651;
  font-weight: 600;
  text-decoration: none;
  margin-top: 8px;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: #f7882f;
  font-weight: 600;
  text-decoration: none;
  margin: 0 4px;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;

    color: #fff;
  }
`;
export const InputText = styled.input`
  width: 100%;
  height: 32px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.8);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  border-radius: 1rem;
  transition: all 200ms ease-in-out;
  margin-top: -5px;

  color: black;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
    font-size: 13px;
  }
  &:not(:last-of-type) {
    border-bottom: 2.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 3px solid rgb(241, 196, 15);
    transition: 500ms ease-in-out;
  }
`;
