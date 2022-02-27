import React from "react";
import styled from "styled-components";
import avataImage from "../../images/avatarImg.jpg";
import Badge from "./Badge";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { darkThemeColor } from "../../Utlis";
import { HomeOutlined, PieChartOutline } from "@mui/icons-material";

const Container = styled.div`
    width:20%;
    height:100%rem;
    border-radius:2rem;
    margin-left:10px;
    background-color:#091322;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:3rem;
    @media screen and (min-width:320px) and (max-width:1080px){
        width:100%;
        height:max-content !important;
    }
`;
const ProfileContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const Avatar = styled.img`
    height:7rem;
    border-radius:6rem;
    margin-top:20%;
`;
const Name = styled.h1`
    color:white;
    font:1.5rem;
    font-weight:400;
    margin:0.8rem 0 0.5rem 0;
`;

const LinkContainer = styled.div`
    background-color:${darkThemeColor};
    height:100%;
    width:100%;
    border-radius:2rem;
`;
const Links = styled.ul`
    list-style-type:none;
    display:flex;
    flex-direction:column;
    padding-top:2rem;
    height:60%;
`;
const Link = styled.li`
    margin-left:5%;
    margin-bottom:2rem;
    display:flex;
    gap:1rem;
    color:#e4e4e4;
    cursor:pointer;
    h3{
        font-weight:300;
    }
    svg{
        font-size:1.1rem;
        margin-top:3%;
    }
`;
const ContactContainer = styled.div`
    width:60%;
    background-color:#091322;
    color:#c4c4c4;
    margin:auto auto;
    border-radius:1rem;
    display:flex;
    flex-direction:column;
    padding:1rem;
    a{
        color:white;
        text-decoration:none;
    }
    @media screen and (min-width:320px) and (max-width:1080px){
        margin-bottom:2rem;
    }
`;


const SideBar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={avataImage} />
        <Name>Awlad</Name>
        <Badge content="Mid Level" />
      </ProfileContainer>
      <LinkContainer>
        <Links>
            <Link>
                <HomeOutlined/>
                <h3>Dashboard</h3>
            </Link>
            <Link>
                <FileCopyIcon/>
                <h3>Projects</h3>
            </Link>
            <Link>
                <PieChartOutline/>
                <h3>Reports</h3>
            </Link>
        </Links>
        <ContactContainer>
            <span>Having troubles</span>
            <a href="">Contact us</a>
        </ContactContainer>
      </LinkContainer>
    </Container>
  );
};

export default SideBar;
