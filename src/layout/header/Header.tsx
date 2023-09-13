import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

const items = ['Home', 'Projects', 'About', 'Content']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper content={'space-between'} items={'center'}>
                    <Logo/>
                    <HeaderMenu>
                        <Menu itemsMenu={items}/>
                    </HeaderMenu>
                    <button>
                        <Icon iconId={'moon'} viewBox={'0 -5 33 33'}/>
                    </button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    //background-color: ${theme.colors.dark.primaryBg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  button {

  }
`
const HeaderMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: end;
  padding-right: 64px;

  ul {
    display: flex;
    gap: 58px;
  }
  li {

    a {

    }
    &:hover{
      
    }

  }
`