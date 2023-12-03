import styled from "styled-components";
import edit from "../../icons/edit.svg";

export const EditButton = ({ id }) => {
  const Button = styled.div`
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

  const handleEdit = async () => {
    console.log('first')
  }
  
  return (
    <Button onClick={() => handleEdit()}>
      <img src={edit} alt="edit" />
    </Button>
  );
};
