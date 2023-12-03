import { Grid, Label } from "../../page-components/auth-page-component/auth.styles";
import { initialBook, validationBook } from "../../config/constant";
import { Buttons, Head, Img, Main, style } from "./modal.styled";
import { TextField } from "formik-material-ui";
import { Field, Form, Formik } from "formik";
import cencel from "../../icons/cencel.svg"
import Modal from "@mui/material/Modal";
import plus from "../../icons/plus.svg";
import Button from "../button/button";
import Box from "@mui/material/Box";
import CryptoJS from "crypto-js";
import * as React from "react";
import axios from "axios";

const arr = ['9781118795460', '1118554248', '9781119269083', '9780815393597', '9798750556281', '9781118555538', '9781118464465']

export default function Modall(props) {
  const { get, setToast, setError, isbn, setIsbn } = props;
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submit = (values) => {
    setLoading(true)
    const key = sessionStorage.getItem('key')
    const secret = sessionStorage.getItem('secret')
    const signstr = `POST/books{"isbn":"${arr[isbn]}"}${secret}`
    const sign = CryptoJS.MD5(signstr).toString();

    axios.post(`${process.env.REACT_APP_URL}/books`, { isbn: arr[isbn] },
      { headers: { "Key": key, "Sign": sign }}
    ).then((res) => { setIsbn(prev=>prev+1); setToast(true); get(); handleClose(); setLoading(false) })
    .catch(err => { setError(true); setLoading(false) })
  }

  return (
    <div>
      <Button event={handleOpen} icon={plus} text="Create a book" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          { loading ? <div className="css-overlay"></div> : null }
          <Formik initialValues={initialBook} validationSchema={validationBook} 
            onSubmit={(values) => submit(values)}>
            <Form>
              <Head>
                <span>Create a book</span>
                <Img onClick={handleClose} src={cencel} alt="cencel"/>
              </Head>
              <Main>
                <Grid>
                  <Label>Title</Label>
                  <Field fullWidth name="title" disabled={loading} component={TextField} placeholder="Enter your title"/>
                </Grid>
                <Grid>
                  <Label>Author</Label>
                  <Field fullWidth disabled={loading} name="author" component={TextField} placeholder="Enter your author"/>
                </Grid>
                <Grid>
                  <Label>Cover</Label>
                  <Field fullWidth disabled={loading} name="cover" component={TextField} placeholder="Enter your cover"/>
                </Grid>
                <Grid>
                  <Label>Published</Label>
                  <Field fullWidth disabled={loading} type="number" name="published" component={TextField} placeholder="Enter your published"/>
                </Grid>
                <Grid>
                  <Label>Pages</Label>
                  <Field fullWidth disabled={loading} type="number" name="pages" component={TextField} placeholder="Enter your pages"/>
                </Grid>
              </Main>
              <Buttons>
                <Button loading={loading} text="Close" loa bg="#fff" event={handleClose} color="#6200EE" w="181px"/>
                <Button loading={loading} type="submit" text="Submit" w="181px"/>
              </Buttons>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
