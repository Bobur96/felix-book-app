import styled from "styled-components";

const Input = () => {
  const Inputs = styled.input`
    height: 47px;
    font-size: 16px;
    font-weight: 400;
    width: 320px;
    padding: 14px 16px;
    font-family: Mulish;
    border-radius: 6px;
    outline: none;
    border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
    background: var(--foundation-white-white-50, #fefefe);
    ::placeholder {
      color: var(--foundation-grey-grey-900, #151515);
      opacity: 0.28;
    }
  `;

  return <Inputs placeholder="Enter your name" />;
};

export default Input;
