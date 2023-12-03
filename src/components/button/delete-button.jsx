import CryptoJS from "crypto-js";
import styled from "styled-components";
import deleteIcon from "../../icons/trash.svg";
import axios from "axios";

export const DeleteButton = ({ id, setToast, setError }) => {
  const Button = styled.div`
    display: flex;
    padding: 8px;
    margin-bottom: 2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px 6px 6px 0px;
    background: var(--foundation-orange-orange-500, #FF4D4F);
    box-shadow: 0px 6px 32px 0px rgba(21, 21, 21, 0.48);
    cursor: pointer;
  `;

  const handleDelete = async () => {
    const key = sessionStorage.getItem('key')
    const secret = sessionStorage.getItem('secret')

    const signstr = `DELETE/books/${id}${secret}`
    const sign = CryptoJS.MD5(signstr).toString();

    axios.delete(`${process.env.REACT_APP_URL}/books/${id}`,
      { headers: { "Key": key, "Sign": sign }}
    ).then((res) => setToast(true))
    .catch(err => setError(true))
  }

  return (
    <Button onClick={() => handleDelete()}>
      <img src={deleteIcon} alt="delete" />
    </Button>
  );
};
