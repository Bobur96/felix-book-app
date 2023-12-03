import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
`;
export const AuthorGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const Img = styled.div`
  width: 32px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #cf58b7;
  cursor: pointer;
`;
export const Titles = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const TitleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const Title = styled.div`
  color: #6200ee;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.576px;
`;
export const Span = styled.span`
  color: #fff;
`;
export const Bell = styled.div`
  position: relative;
`;
export const Badge = styled.div`
  display: flex;
  width: 6px;
  height: 6px;
  gap: 10px;
  position: absolute;
  right: 3px;
  top: 0px;
  border-radius: 8px;
  border: 1px solid var(--foundation-white-white-50, #fefefe);
  background: var(--foundation-orange-orange-500, #ff4d4f);
`;

export const SearchContent = styled.div`
  height: 48px;
  min-width: 380px;
  position: relative;
  border-radius: 6px;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  color: black;
  border: none;
  outline: none;
  font-size: 13.5pt;
  background: transparent;
`;
