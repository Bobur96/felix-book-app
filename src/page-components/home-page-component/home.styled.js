import styled from "styled-components";

export const Grids = styled.div`
width: 100%;
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 36px;
`;
export const Nav = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`
export const NavHead = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`;
export const NavBottom = styled.div`
align-self: stretch;
color: var(--foundation-white-white-50, #FEFEFE);
font-family: Mulish;
font-size: 20px;
font-weight: 400;
`;
export const Title = styled.h1`
color: var(--foundation-white-white-50, #fefefe);
font-family: Mulish;
font-size: 36px;
font-weight: 700;
`;
export const Span = styled.span`
color: var(--foundation-purple-purple-500, #6200ee);
`;
export const Buttons = styled.div`
display: flex;
align-items: center;
gap: 24px;
`;
