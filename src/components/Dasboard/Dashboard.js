import React from 'react';
import MainContent from './MainContent';
import SideBar from './SideBar';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  height:97vh;
  background-color:linear-gradient(to bottom right,white 0%, #e6e4ff 70%);
  @media screen and (min-width:320px) and (max-width:1080px){
    flex-direction:column;
  }
`;

const Dashboard = () => {
    return (
        <Container>
            <SideBar/>
            <MainContent/>
        </Container>
    );
};

export default Dashboard;