import styled from "styled-components";

export const Head = styled.div`
display: flex;
width: 374px;
justify-content: space-between;
align-items: center;
color: var(--foundation-grey-grey-900, #151515);
font-family: Mulish;
font-size: 20px;
font-weight: 600;
`;
export const Main = styled.div`
padding: 25px 0 30px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
`;
export const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;
`;
export const Img = styled.img`
width: 24px;
height: 24px;
flex-shrink: 0;
cursor: pointer;
`;

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  outline: "none",
  display: "flex",
  width: "430px",
  padding: "24px 28px",
  flexDirection: "column",
  alignItems: "center",
  gap: "28px",
  borderRadius: "12px",
  background: "var(--foundation-white-white-50, #FEFEFE)",
  boxShadow: "0px 4px 32px 0px rgba(51, 51, 51, 0.04)",
};

export const ButtonE = styled.div`
display: flex;
padding: 8px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0px 6px 6px 6px;
background: var(--foundation-purple-purple-500, #6200ee);
box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
cursor: pointer;
`;