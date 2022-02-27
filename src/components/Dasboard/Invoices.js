import React from 'react';
import styled from 'styled-components';
import avatarImg from '../../images/avatarImg.jpg';
import { hoverEffect } from '../../Utlis';


const InvoicesContainer = styled.div`
    width:35rem;
    border-radius:1rem;
    margin-top:1rem;
    background-color:white;
    box-shadow:${hoverEffect};
    @media screen and (min-width:320px) and (max-width:1080px){
        width:80%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;
const CardContent = styled.div`
    @media screen and (min-width:320px) and (max-width:1080px){
        margin:2rem 0;
    }
`;
const Invoice = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0.4rem;
    padding:0.6rem;
    @media screen and (min-width:320px) and (max-width:1080px){
        flex-direction:column;
        gap:1rem;
    }
`;
const Info = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    @media screen and (min-width:320px) and (max-width:1080px){
        flex-direction:column;
        width:100%;
        text-align:center;
    }
`;
const Avatar = styled.image`
    img{
        height:3.5rem;
        width:3.5rem;
        border-radius:3.5rem;
    }
`;
const TextContainer = styled.div`
    margin-left:1rem;
`;
const Title = styled.div``;
const Subtitle = styled.h5`
    font-weight:400;
`;
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    width:30%;
    align-items:center;
    @media screen and (min-width:320px) and (max-width:1080px){
        width:100%;
        flex-direction:column;
        gap:0.6rem;
    }
`;
const Badge = styled.div``;
const Price = styled.div``;

const Invoices = () => {
    return (
        <InvoicesContainer>
            <CardContent>
                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={avatarImg} alt=""/>
                        </Avatar>
                        <TextContainer>
                            <Title>Alexander williams</Title>
                            <Subtitle>ABC Hooldings</Subtitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="paid" paid />
                        <Price>$234242</Price>
                    </Container>
                </Invoice>
                <Invoice>
                    <Info>
                        <Avatar>
                            <img src={avatarImg} alt=""/>
                        </Avatar>
                        <TextContainer>
                            <Title>John Phillips</Title>
                            <Subtitle>Inchor Associates</Subtitle>
                        </TextContainer>
                    </Info>
                    <Container>
                        <Badge content="late" late />
                        <Price>$43535</Price>
                    </Container>
                </Invoice>
            </CardContent>
        </InvoicesContainer>
    );
};

export default Invoices;