import styled from "styled-components";
import notFound from "../../icons/not-found.svg";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Center = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 72px;
  `;
  const Btns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    align-self: stretch;
  `;

  const navigate = useNavigate();
  const goHome = () => navigate('/')

  return (
    <div className="bg">
      <Content>
        <Center>
          <img src={notFound} alt="404" />
          <Btns>
            <Button event={goHome} text="Go Home Page" w="240px"/>
            <Button text="Reload Page"  w="240px" bg="#FEFEFE" color="#6200EE"/>
          </Btns>
        </Center>
      </Content>
    </div>
  );
};

export default Index;
