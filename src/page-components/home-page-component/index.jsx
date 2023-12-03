import { Buttons, Grids, Nav, NavBottom, NavHead, Span, Title } from "./home.styled";
import Header from "../../components/header/header";
import Input from "../../components/inputs/input";
import Toast from "../../components/toast/toast";
import Modal from "../../components/modal/modal";
import Error from "../../components/toast/error";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import CryptoJS from "crypto-js";
import axios from "axios";

const Index = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchBook, setSearchBook] = useState(null)
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);
  const [isbn, setIsbn] = useState(0);

  const getData = () => {
    setLoading(true)
    const key = sessionStorage.getItem('key')
    const secret = sessionStorage.getItem('secret')

    const signstr = "GET/books"+secret
    const sign = CryptoJS.MD5(signstr).toString();

    axios(`${process.env.REACT_APP_URL}/books`,
      { headers: { "Key": key, "Sign": sign }}
    ).then((res) => { setLoading(false); setBooks(res.data.data) })
    .catch(err => { setLoading(false); console.log(err) })
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <div className="bg">
      <div className="container">
        <Grids>
          <Header setSearch={setSearchBook} setLoad={setLoading}/>
          <Nav>
            <NavHead>
              <Title>
                You’ve got <Span>7 book</Span>
              </Title>
              <Buttons>
                <Input />
                <Modal get={getData} setToast={setToast} setError={setError} isbn={isbn} setIsbn={setIsbn}/>
              </Buttons>
            </NavHead>
            <NavBottom>Your task today</NavBottom>
          </Nav>
          <Grid item container spacing={3} xs={12}>
            {
              loading ? <div className="center ptb"><CircularProgress/></div> :
              searchBook ? 
              searchBook?.map(el => (
                <Grid key={el.id} item xs={12} sm={4}>
                  <Card data={el} get={getData} err={setError} tst={setToast}/>
                </Grid>
              )) :
              books?.map(el => (
                <Grid key={el.book.id} item xs={12} sm={4}>
                  <Card data={el.book} get={getData} err={setError} tst={setToast}/>
                </Grid>
              ))
            }
          </Grid>
        </Grids>
        <Toast title="Successfully created" toast={toast} setToast={setToast}/>
        <Error error={error} setError={setError}/>
      </div>
    </div>
  );
};

export default Index;
