import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  justify-content: center;
  align-items: center;
  margin: 10 auto;
`;
export const Grid1 = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const Subtitle2 = styled.p`
  max-width: 440px;

  font-size: 15px;
  line-height: 24px;
  color: grey;
`;
export const TopLine = styled.p`
  color: #6b7a8f;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
