import { Already, Content, Enter, Forms, Grid, H1, Inputs, Label, Line, LineCenter, Lines, Social, Span } from "./auth.styles";
import { sing_in, validation_in } from "../../config/constant";
import ErrorToast from "../../components/toast/error";
import Button from "../../components/button/button";
import facebook from "../../icons/facebook.svg";
import { TextField } from "formik-material-ui";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import google from "../../icons/google.svg";
import CryptoJS from "crypto-js";
import { useState } from "react";
import axios from "axios";


const SignIn = ({ set }) => {

  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = ({values, resetForm}) => {
    setLoading(true)
    sessionStorage.setItem("key", values.key);
    sessionStorage.setItem("secret", values.secret);
    const signstr = "GET/myself"+values.secret
    const sign = CryptoJS.MD5(signstr).toString();
    axios(`${process.env.REACT_APP_URL}/myself`,
      { headers: { "Key": values.key, "Sign": sign }}
    ).then((res) => {
      if(res.data.isOk) {
        sessionStorage.setItem('token', "t@keNS3cR3tk3Y");
        return navigate('/');
      } else { setLoading(false); resetForm() }
    })
    .catch(err => { 
      setLoading(false); setErrorMsg(err.response?.data?.message); setError(true); resetForm();
    })
  }

  return (
    <Content>
      { loading ? <div className="css-overlay"></div> : null }
      <Formik initialValues={sing_in} validationSchema={validation_in} 
        onSubmit={(values, { resetForm }) => submit({values, resetForm})}>
        <Form>
          <Forms>
            <H1>Sign in</H1>
            <Social>
              <Button w="374px" bg="#fff" color="#151515" icon={google} text="Continue with Google"/>
              <Button w="374px" bg="#fff" color="#151515" icon={facebook} text="Continue with Facebook"/>
            </Social>
            <Lines>
              <Line/>
              <LineCenter>OR</LineCenter>
            </Lines>
            <Inputs>
              <Grid>
                <Label>Your name</Label>
                <Field fullWidth name="name" component={TextField} placeholder="Enter name"/>
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
              <Button type="submit" w="374px" text="Button" />
              <Already onClick={()=>set(false)}>
                Not sign in yet? <Span>Go to sign up.</Span>
              </Already>
            </Enter>
          </Forms>
          <ErrorToast title={errorMsg} setError={setError} error={error}/>
        </Form>
      </Formik>
    </Content>
  );
};

export default SignIn;
