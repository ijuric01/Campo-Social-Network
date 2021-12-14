import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  z-index: 1;
  margin-top: 60px;
  height: 960px;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  overflow: auto;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-columns: 700px auto;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: black;
`;
export const Subtitle2 = styled.p`
  max-width: 440px;

  font-size: 15px;
  line-height: 24px;
  color: grey;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const CommentSec = styled.div`
  background-color: whitesmoke;
  border-radius: 10px;
  padding-top: 3px;
`;
export const FormButton = styled.button`
  background: black;

  border: none;
  width: 200px;
  cursor: pointer;
  font-size: 15px;
  color: #fff;
  font-weight: bolder;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;
  height: 35px;
  align-self: center;
  align-content: center;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7882f;
  }
`;
export const TopLine = styled.p`
  color: #6b7a8f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
