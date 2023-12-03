import { Already, Content, Enter, Forms, Grid, H1, Inputs, Label, Line, LineCenter, Lines, Social, Span } from "./auth.styles";
import { sing_up, validation_up } from "../../config/constant";
import ErrorToast from "../../components/toast/error";
import Button from "../../components/button/button";
import google from "../../icons/google.svg";
import facebook from "../../icons/facebook.svg";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useState } from "react";
import axios from "axios";
import Toast from "../../components/toast/toast";

const SignUp = ({ set }) => {

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = ({values, resetForm}) => {
    setLoading(true)
    axios.post(`${process.env.REACT_APP_URL}/signup`, values,
      { headers: { "Content-Type": "application/json" } }
    ).then((res) => {
      if(res.data.isOk){
        setSuccess(true)
        setTimeout(() => { set(true) }, 1000);
      } else resetForm()
    })
    .catch(err => { setLoading(false); setErrorMsg(err.response?.data?.message); setError(true); resetForm() })
  };

  return (
    <Content>
      { loading ? <div className="css-overlay"></div> : null }
      <Formik initialValues={sing_up} validationSchema={validation_up} 
        onSubmit={async (values, { resetForm }) => {submit({values, resetForm})}}>
          <Form>
          <Forms>
            <H1>Sign up</H1>
            <Social>
              <Button w="374px" bg="#fff" color="#151515" icon={google} text="Continue with Google"/>
              <Button w="374px" bg="#fff" color="#151515" icon={facebook} text="Continue with Facebook"/>
            </Social>
            <Lines>
              <Line />
              <LineCenter>OR</LineCenter>
            </Lines>
            <Inputs>
              <Grid>
                <Label>Your name</Label>
                <Field fullWidth name="name" component={TextField} placeholder="Enter name"/>
              </Grid>
              <Grid>
                <Label>Your email</Label>
                <Field fullWidth type="email" name="email" component={TextField} placeholder="Enter email"/>
              </Grid>
              <Grid>
                <Label>Your key</Label>
                <Field fullWidth name="key" component={TextField} placeholder="Enter key"/>
              </Grid>
              <Grid>
                <Label>Your password</Label>
                <Field fullWidth type="password" name="secret" component={TextField} placeholder="Enter password"/>
              </Grid>
            </Inputs>
            <Enter>
              <Button type="submit" w="374px" text="Button"/>
              <Already onClick={()=>set(true)}>
                Already signed up? <Span>Go to sign in.</Span>
              </Already>
            </Enter>
          </Forms>
          <ErrorToast title={errorMsg} setError={setError} error={error}/>
          <Toast title='Successfully signed up!' setToast={setSuccess} toast={success}/>
        </Form>
      </Formik>
    </Content>
  );
};

export default SignUp;
