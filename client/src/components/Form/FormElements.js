import styled from "styled-components";

export const FormWrap = styled.div`
  min-height: 100%;
  color: blue;
  display: flex;
  //padding:25px 30px;

  margin-bottom: 30px;

  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
    width: auto;
  }
`;
export const Formm = styled.form`
  // bež  background:#dcc7aa;

  background: #aebbc2;

  /* background: linear-gradient(
  to right bottom,
  rgba(255, 255, 255, 0.7),
  rgba(255, 255, 255, 0.2)
); */
  border-radius: 2rem;
  z-index: 2;

  display: flex;
  flex-direction: column;
  //grid-template-columns:70% 30%;

  /* grid-template-columns: auto-fit 200px; */
  width: 380px;
  max-width: 600px;
  gap: 5px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 32px 32px;
  border-radius: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const FormButton = styled.button`
  background: black;
  /* margin: 10px; */
  padding: 12px 0;
  border: none;
  // border:solid 4px white;
  width: 60%;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  font-weight: bolder;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  align-self: center;
  margin-top: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7882f;
  }
  @media screen and (max-width: 400px) {
    margin: 10px;
  }
`;
export const divOne = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  grid-area: auto;
`;
export const divTwo = styled.div`
  text-align: center;
  display: block;
  align-items: center;
  grid-area: b;
`;
export const FormLabel = styled.label`
  font-size: 13px;
  color: #6b7a8f;
  font-weight: 700;
`;
export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #fff;
`;
export const InputMessage = styled.textarea`
  resize: none;
  overflow-y: scroll;
  margin-top: 5px;
  font-size: 12px;
  color: black;
  align-content: center;
  width: 100%;
  height: auto;
  outline: none;

  border-bottom: 1.4px solid transparent;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;

  &:not(:last-of-type) {
    border-bottom: 2.5px solid rgba(200, 200, 200, 0.4);
  }
`;
export const FormH1 = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;

  letter-spacing: 1.2px;
`;
