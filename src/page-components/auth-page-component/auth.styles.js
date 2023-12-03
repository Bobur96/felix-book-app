import styled from "styled-components";

export const Content = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Forms = styled.div`
display: flex;
width: 430px;
padding: 48px 28px !important;
flex-direction: column;
align-items: center;
gap: 36px;
flex-shrink: 0;

border-radius: 12px;
background: var(--foundation-white-white-50, #fefefe);
box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
border: 1px solid #dedede;
`;
export const H1 = styled.h1`
color: var(--foundation-grey-grey-900, #151515);
font-size: 36px;
font-weight: 700;
`;
export const Social = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 16px;
align-self: stretch;
`;
export const Lines = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;
position: relative;
width: 374px;
height: 1px;
background: #24272c;
`;
export const Line = styled.div`
width: 374px;
height: 1px;
background: #24272c;
`;
export const LineCenter = styled.div`
display: flex;
width: 48px;
justify-content: center;
align-items: center;
position: absolute;
left: 163px;
color: #000;

top: -10.6px;
background: #fefefe;
`;
export const Inputs = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
`;
export const Enter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;
`;
export const Already = styled.div`
color: #333;
text-align: center;
font-size: 15px;
font-weight: 300;
line-height: 120%;
`;
export const Span = styled.span`
color: #6200ee;
cursor: pointer;
`;

export const Grid = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
align-self: stretch;
`;
export const Label = styled.label`
align-self: stretch;
color: var(--foundation-grey-grey-900, #151515);
font-feature-settings: "clig" off, "liga" off;
font-size: 15px;
font-weight: 500;
line-height: 120%;
`;