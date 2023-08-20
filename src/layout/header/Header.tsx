import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";

const items = ['Home', 'Projects', 'About', 'Content']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu itemsMenu={items}/>
            <button>
                <Icon iconId={'moon'}/>
            </button>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
