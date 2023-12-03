import { BLeft, Badge, Bottom, Content, Main, Text, Title } from "./card.styled";
import { DeleteButton } from "../button/delete-button";
import EditModal from "../modal/editModal";
import React from "@mui/material";

const Card = (props) => {
  const { data, err, tst, get } = props;

  return (
    <Content id="action_card">
      <div id="action_btn">
        <DeleteButton setError={err} id={data?.id}/>
        <EditModal setToast={tst} get={get} setError={err} data={data}/>
      </div>
      <Main>
        <Title>{data?.title ? data?.title : "Yulduzli tunlar"}</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
          vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
        </Text>
      </Main>
      <Bottom>
        <BLeft>{data?.author ? data?.author : "Bobur"}: {data?.published ? data?.published : '2023'}-year</BLeft>
        <Badge>{data?.page ? data?.page : '777'} pages</Badge>
      </Bottom>
    </Content>
  );
};

export default Card;
