import styled from "styled-components";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(
    -45deg,
    #71b7e6,
    #69a6ce,
    #b98acc,
    #ee8176,
    #b98acc,
    #69a6ce,
    #9b59b6
  );
  height: 100vh;
  background-size: 400%;
`;

const PageContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 17%;
  right: 17%;
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.5);
`;

const Content = styled.div`
  max-width: 600px;
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 16vw;
  line-height: 1em;
`;

const SubtitleText = styled.h4`
  font-size: 2em;
  text-transform: uppercase;
  color: #000;
  max-width: 600px;
`;

const DescriptionText = styled.p`
  font-size: 1.2em;
  color: #0d0d0d;
`;

const ButtonsContainer = styled.div`
  margin: 25px 0;
  display: inline-flex;
`;

const PageButton = styled.button`
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #69a6ce;
  color: #69a6ce;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  transition: background 0.5s;

  &:hover {
    color: #fff;
    background: #69a6ce;
  }
`;

export {
  Body,
  PageContainer,
  Content,
  TitleText,
  SubtitleText,
  DescriptionText,
  ButtonsContainer,
  PageButton,
};
