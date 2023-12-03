import { Grid, Label } from "../../page-components/auth-page-component/auth.styles";
import { ButtonE, Buttons, Head, Img, Main, style } from "./modal.styled";
import { initialBook, validationBook } from "../../config/constant";
import { TextField } from "formik-material-ui";
import { Field, Form, Formik } from "formik";
import cencel from "../../icons/cencel.svg"
import Modal from "@mui/material/Modal";
import edit from "../../icons/edit.svg";
import Button from "../button/button";
import Box from "@mui/material/Box";
import CryptoJS from "crypto-js";
import * as React from "react";
import axios from "axios";


export default function EditModal(props) {
  const { get, data, setToast, setError } = props;
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submit = (values) => {
    setLoading(true)
    values.id = undefined;
    values.cover = undefined;
    const body = { book: values, status: 1 }
    const key = sessionStorage.getItem('key')
    const secret = sessionStorage.getItem('secret')
    const signstr = `PATCH/books/${data.id+body+secret}`
    console.log(signstr)
    const sign = CryptoJS.MD5(signstr).toString();
    console.log(sign)

    axios.patch(`${process.env.REACT_APP_URL}/books/${data.id}`, body,
      { headers: { "Key": key, "Sign": sign }}
    ).then((res) => { setToast(true); get(); handleClose(); setLoading(false) })
    .catch(err => { setError(true); setLoading(false) })
  }

  return (
    <div>
      <ButtonE onClick={() => handleOpen()}>
        <img src={edit} alt="edit" />
      </ButtonE>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          { loading ? <div className="css-overlay"></div> : null }
          <Formik initialValues={data} validationSchema={validationBook}
            onSubmit={(values) => submit(values)}>
            <Form>
              <Head>
                <span>Update a book</span>
                <Img onClick={handleClose} src={cencel} alt="cencel"/>
              </Head>
              <Main>
                <Grid>
                  <Label>Title</Label>
                  <Field fullWidth name="title" disabled={loading} component={TextField} />
                </Grid>
                <Grid>
                  <Label>Author</Label>
                  <Field fullWidth disabled={loading} name="author" component={TextField} />
                </Grid>
                <Grid>
                  <Label>Cover</Label>
                  <Field fullWidth disabled={loading} name="cover" component={TextField} />
                </Grid>
                <Grid>
                  <Label>Published</Label>
                  <Field fullWidth disabled={loading} type="number" name="published" component={TextField} />
                </Grid>
                <Grid>
                  <Label>Pages</Label>
                  <Field fullWidth disabled={loading} type="number" name="pages" component={TextField} />
                </Grid>
              </Main>
              <Buttons>
                <Button loading={loading} text="Close" loa bg="#fff" event={handleClose} color="#6200EE" w="181px"/>
                <Button loading={loading} type="submit" text="Update" w="181px"/>
              </Buttons>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
