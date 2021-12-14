import styled from "styled-components";

export const NetworkContainer = styled.div`
  color: blue;

  margin-top: 150px;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  position: relative;
  z-index: 1;
  margin-top: 120px;
  margin-bottom: 80px;

  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;
export const FormContainer = styled.div`
  background: green;
`;
export const PostContainer = styled.div`
  background-color: blue;

  grid-area: bbb;
`;
export const NetworkWrapper = styled.div`
  background: yellow;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 30px;

  z-index: 1;
  height: auto; //stavit na AUTOOOO
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  /* background-color:blue; */

  margin-top: 80px;
  padding-top: 55px;
`;
export const NetworkCard = styled.div`
  max-width: 1000px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 0.2fr;
  grid-gap: 10px;
  padding: 0 50px;
  transition: all 0.2s ease-in-out;
  align-items: center;
  align-self: center;

  overflow: auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const NetworkCard2 = styled.div`
  display: center;
  justify-content: center;

  border-radius: 10px;
  width: auto;
  padding: 30px;
  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  } */
`;
export const FormButton = styled.button`
  background: #aebbc2;

  width: 60px;
  padding: 16px 0;
  outline: none;

  border-radius: 100%;
  cursor: pointer;
  font-size: 17px;
  color: black;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.2s ease-in-out;
  border: 2px solid #aebbc2;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7882f;
    color: #010606;
    border: 2px solid #f7882f;
  }
  @media screen and (max-width: 486px) {
    margin-left: 110px;
    margin-bottom: 10px;
  }
`;
