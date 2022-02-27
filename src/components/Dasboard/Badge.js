import React from "react";
import styled from "styled-components";
import { themeColor } from "../../Utlis";
        
const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;

  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
        color:#2f233d;
        background-color: rgba(109,134,245,0.192);
    `}
  ${({ clean }) =>
    clean &&
    `
      color:${themeColor};
      border:0.05rem solid ${themeColor}; 
      background-color: transparent;
    `}

    ${({paid})=>paid &&`
      background-color:#70e00041;
      color:#70e4000;
    `}
    ${({late})=>late &&`
      background-color:#ff595e41;
      color:#ff595e
    `}
`;

const Badge = ({ content, glow = false, paid = false, clean=false, late = false }) => {
  return (
    <Div>
      {content}
    </Div>
  );
};

export default Badge;
