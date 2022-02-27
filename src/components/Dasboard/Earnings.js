import { QueryStatsOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { hoverEffect, themeColor } from '../../Utlis';

const EarningCard = styled.div`
    width:14rem;
    height:115%;
    background-color:${themeColor};
    padding:1rem;
    border-radius:1rem;
    color:white;
    box-shadow:${hoverEffect};
    @media screen and (min-width:320px) and (max-width:1080px){
        width:80%;
    }
`;
const CardContent = styled.div`
    margin:1rem;
`;
const Chart = styled.div`
    display:flex;
    justify-content:center;
    svg{
        height:3rem;
        width:3rem;
    }
`;
const EarningsText = styled.h3`
    text-align:center;
    font-weight:normal;
    padding:0.4rem;
`;
const Earning = styled.h4`
    text-align:center;
`;
const EarningsIncrease = styled.h6`
    text-align:center;
    font-weight:normal;
    background-color:rgba(0,0,0,0.2);
    padding:0.5rem;
    border-radius:2rem;
`;

const Earnings = () => {
    return (
        <EarningCard>
            <CardContent>
                <Chart>
                    <QueryStatsOutlined/>
                </Chart>
                <EarningsText>Earnings</EarningsText>
                <Earning>$7, 890</Earning>
                <EarningsIncrease>= 10% since last month</EarningsIncrease>
            </CardContent>
        </EarningCard>
    );
};

export default Earnings;