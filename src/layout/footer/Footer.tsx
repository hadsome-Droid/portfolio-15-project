import React from 'react';
import styled from "styled-components";
import Wave from "../../assets/images/wave.svg"
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId={'wave'} width={'1440px'} height={'153px'} viewBox={'0 0 1440 153'}/>
            <h2>Coded by Alireza Kavousy nezhad</h2>
            <Copyright>All Rights Reserved 2022<span>@</span></Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 241px;
  background-image: url(${Wave});

`

const Copyright = styled.small`

`