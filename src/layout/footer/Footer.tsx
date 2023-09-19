import React from 'react';
import styled from "styled-components";
import Wave from "../../assets/images/wave.svg"
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            {/*<Icon iconId={'wave'} width={'1440px'} height={'153px'} viewBox={'0 0 1440 153'}/>*/}
            <span>Coded by Alireza Kavousy nezhad</span>
            <Copyright>All Rights Reserved 2022<span>@</span></Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  //justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 242px;
  padding-bottom: 40px;
  background-color: ${theme.colors.dark.primaryBg};
  background-image: url(${Wave});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  z-index: 0;

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 70%;
    background-color: ${theme.colors.dark.secondaryBg};
    position: absolute;
    left: 0;
    bottom: 0;

    z-index: -1;
  }
  
  span{
    font-size: 16px;
    font-weight: 700;
  }
`

const Copyright = styled.small`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
`