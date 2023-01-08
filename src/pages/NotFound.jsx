import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../utils/constants";
import {
  Body,
  ButtonsContainer,
  Content,
  DescriptionText,
  PageButton,
  PageContainer,
  SubtitleText,
  TitleText,
} from "./styledComponents";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <PageContainer>
        <Content>
          <TitleText>404</TitleText>
          <SubtitleText>Error! Página no encontrada</SubtitleText>
          <DescriptionText>La página que buscaste no existe.</DescriptionText>
          <ButtonsContainer>
            <PageButton onClick={() => navigate(PrivateRoutes.PRIVATE)}>
              Volver
            </PageButton>
          </ButtonsContainer>
        </Content>
      </PageContainer>
    </Body>
  );
};

export default NotFound;
