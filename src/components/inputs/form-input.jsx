import styled from "@emotion/styled";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { useForm } from "react-hook-form";

const FormInput = (props) => {

  const { name, reg, err, lbl, type, loading } = props;
  const { register, formState: { errors }} = useForm();
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  `;
  const Label = styled.label`
    align-self: stretch;
    color: var(--foundation-grey-grey-900, #151515);
    font-feature-settings: "clig" off, "liga" off;
    font-size: 15px;
    font-weight: 500;
    line-height: 120%;
  `;
  const Input = styled.input`
    display: flex;
    height: 47px;
    padding: 14px 16px;
    align-items: center;
    gap: 16px;
    font-size: 13pt;
    align-self: stretch;

    border-radius: 6px;
    border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
    background: var(--foundation-white-white-50, #fefefe);

    ::placeholder {
      flex: 1 0 0;
      align-self: stretch;
      color: var(--foundation-grey-grey-900, #151515);
      font-feature-settings: "clig" off, "liga" off;
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      opacity: 0.3;
    }
  `;

  return (
    <Content>
      <Label>{lbl}</Label>
      <Field
        fullWidth
        name={name}
        // disabled={load}
        component={TextField}
        type={type ? type : "text"}
        placeholder={`Enter ${lbl}`}
      />
    </Content>
  );
};

export default FormInput;
