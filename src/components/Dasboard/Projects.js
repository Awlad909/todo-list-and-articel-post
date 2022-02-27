import React from 'react';
import styled from 'styled-components';
import avatarImg from '../../images/avatarImg.jpg';
import { hoverEffect, themeColor } from '../../Utlis';

const YourProjects = styled.div`
    height:85%;
    width:100%;
    background-color:white;
    margin:0;
    padding:1rem;
    border-radius:1rem;
    box-shadow:${hoverEffect};
    @media screen and (min-width:320px) and (max-width:1080px){
        height:max-content;
        margin-top:1rem;
        width:75%;
    }
`;
const Project = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:0.3rem;
`;
const Avatar = styled.image`
    img{
        height:4rem;
        width:4rem;
        border-radius:4rem;
    }
`;
const Detail = styled.div`
    margin-left:1rem;
`;
const Title = styled.h6`
    font-weight:500;
    @media screen and (min-width:320px) and (max-width:1080px){
        font-size:1rem;
    }
`;
const SubTitle = styled.h6`
    font-weight:300;
`;
const AllProjects = styled.div`
    text-align:end;
    color:${themeColor};
    cursor:pointer;
`;


const Projects = () => {
    return (
        <YourProjects>
            <Project>
                <Avatar>
                    <img src={avatarImg} alt=""/>
                </Avatar>
                <Detail>
                    <Title>Logo design for izoom </Title>
                    <SubTitle>1 day remaining</SubTitle>
                </Detail>
            </Project>
            <Project>
                <Avatar>
                    <img src={avatarImg} alt=""/>
                </Avatar>
                <Detail>
                    <Title>Personal branding projects</Title>
                    <SubTitle>5 day remaining</SubTitle>
                </Detail>
            </Project>
            <AllProjects>See all projectss</AllProjects>
        </YourProjects>
    );
};

export default Projects;