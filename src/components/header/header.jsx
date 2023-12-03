import { AuthorGroup, Badge, Bell, Content, Img, Input, SearchContent, Span, Title, TitleRight, Titles } from "./header.styled";
import cloud from "../../icons/cloud-check.svg";
import search from "../../icons/search.svg";
import cencel from "../../icons/cencel.svg";
import avatar from "../../icons/avatar.png";
import bell from "../../icons/bell.svg";
import CryptoJS from "crypto-js";
import { useRef } from "react";
import axios from "axios";
import AccountMenu from "./menu";

const Header = ({setSearch, setLoad}) => {

  const clear = useRef('')
  const searchBook = (e) => {
    if(!e.target.value.trim()) {
      setSearch(''); return;
    };
    if(e.target.value.length > 2){
      setLoad(true)
      const key = sessionStorage.getItem('key')
      const secret = sessionStorage.getItem('secret')
      const signstr = "GET/books/"+e.target.value+secret
      const sign = CryptoJS.MD5(signstr).toString();
  
      axios(`${process.env.REACT_APP_URL}/books/${e.target.value}`,
        { headers: { "Key": key, "Sign": sign }}
      ).then((res) => { setLoad(false); setSearch(res.data.data?.slice(0, 6)) })
      .catch(err => { setLoad(false); console.log(err)})
    } else setSearch('');
  }

  const handleClear = () => {
    clear.current.value = ''
    setSearch('')
  }

  return (
    <Content>
      <Titles>
        <TitleRight>
          <img src={cloud} alt="cloud-check" />
          <Title>Books <Span>List</Span></Title>
        </TitleRight>
        <SearchContent id="s_cont">
          <img src={search} alt="search" className="sImg"/>
          <Input ref={clear} id="inpt" type="text" placeholder="Search for any training you want" onChange={searchBook}/>
          <img src={cencel} alt="cencel" className="cImg" onClick={handleClear}/>
      </SearchContent>
      </Titles>
      <AuthorGroup>
        <Bell>
          <img src={bell} alt="bell" />
          <Badge />
        </Bell>
        {/* <Img><img style={{ borderRadius: "50%" }} src={avatar} alt="avatar" /></Img> */}
        <AccountMenu/>
      </AuthorGroup>
    </Content>
  );
};

export default Header;
