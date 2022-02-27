import React from "react";
import styled from "styled-components";
import { hoverEffect, themeColor } from "../../Utlis";
import Badge from './Badge';


const InfoCard = styled.div`
    height:115%;
    width:17rem;
    background-color:white;
    border-radius:1rem;
    padding:1rem;
    color:white;
    box-shadow:${hoverEffect};
    @media screen and (min-width:320px) and (max-width:1080px){
      width:80%;
  }
`;
const Card = styled.div`
    background-color:rgba(183,194,234,0.3);
    border-radius:1rem;
    margin-bottom:1rem;
`;
const CardContent = styled.div`
    padding:0%.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:0%.4rem;
    ${({justify})=>justify && `
        justify-content:space-around;
        width:90%;
    `}
`;
const Digit = styled.div`
    background-color:${themeColor};
    padding:0%.8rem 1rem;
    font-size:1.3rem;
    border-radius:1rem;

`;
const InfoContainer = styled.div`
    margin-left:0%.7rem;
`;
const Title = styled.h3`
    color:black;
`;
const Subtitle = styled.h5`
    color:#333333;
    font-weight:normal;
`;

const Info = () => {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <Subtitle>In Top 2%</Subtitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <Subtitle>8 this month</Subtitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="mobile app" glow />
            <Badge content="branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
};

export default Info;
