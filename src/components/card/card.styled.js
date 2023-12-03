import styled from "styled-components";

export const Content = styled.div`
display: flex;
width: 100%;
padding: 32px;
flex-direction: column;
align-items: flex-end;
gap: 16px;
border-radius: 12px;
border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
background: var(--foundation-white-white-50, #fefefe);
box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
`;
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 6px;
align-self: stretch;
`;
export const Title = styled.div`
align-self: stretch;
color: var(--foundation-grey-grey-900, #151515);
font-size: 16px;
font-weight: 600;
`;
export const Text = styled.p`
align-self: stretch;
color: var(--foundation-grey-grey-500, #333);
font-family: Mulish;
font-size: 14px;
font-weight: 400;
line-height: 150%;
`;
export const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`;
export const BLeft = styled.span`
color: var(--foundation-grey-grey-500, #333);
font-family: Mulish;
font-size: 14px;
font-weight: 500;
line-height: 15px;
`;
export const Badge = styled.span`
display: flex;
padding: 2px 12px;
align-items: center;
gap: 6px;
border-radius: 8.5px;
background: var(--foundation-purple-purple-50, #efe6fd);
color: var(--foundation-purple-purple-300, #9654f4);
text-align: center;
font-family: Mulish;
font-size: 12px;
font-weight: 400;
`;