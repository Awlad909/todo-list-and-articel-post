import { FastfoodOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { darkThemeColor, hoverEffect, themeColor } from '../../Utlis';

const JoinChannel = styled.div`
    background-color:${darkThemeColor};
    height:50%;
    border-radius:1rem;
    display:flex;
    align-items:center;
    box-shadow:${hoverEffect};
    @media screen and (min-width:320px) and (max-width:1080px){
        width:80%;
        margin-top:6rem;
        height:max-content;
    }
`;
const CardContent = styled.div`
    margin:1rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    @media screen and (min-width:320px) and (max-width:1080px){
        flex-direction:column;
        gap:1rem;
    }
`;
const Slack = styled.div`
    display:flex;
`;
const SlackLogo = styled.div`
    margin-right:0.7rem;
    display:flex;
    justify-content:center;
    align-items:center;
    svg{
        color:white;
        height:3rem;
        width:3rem;
    }
`;
const SlackText = styled.div`
    color:white;
`;
const SlackHood = styled.h2`
    font-weight:500;
`;
const SlackFood = styled.h5`
    color:e4e4e4;
    font-weight:normal;
`;
const SlackJoin = styled.button`
    background-color:${themeColor};
    border:none;
    outline:none;
    padding:1rem 2rem;
    color:white;
    cursor:pointer;
    border-radius:0.5rem;
    font-wight:bold;
`;

const JoinSlack = () => {
    return (
        <JoinChannel>
           <CardContent flex={true}>
                <Slack>
                    <SlackLogo>
                        <FastfoodOutlined/>
                    </SlackLogo>
                    <SlackText>
                        <SlackHood>Engage with clients</SlackHood>
                        <SlackFood>Join slack channel</SlackFood>
                    </SlackText>
                </Slack>
                <SlackJoin>Join Now</SlackJoin>
            </CardContent> 
        </JoinChannel>
    );
};

export default JoinSlack;