import {
  Container,
  Button,
  ButtonBox,
  LeftContainer,
  RightContainer,
  Title,
  Image,
  SubTitle,
} from "./styles";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local da sua cidade</Title>
        <SubTitle>Encontre no comércio local tudo o que você precisa</SubTitle>
        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
