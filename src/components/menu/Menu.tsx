import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuPropsType = {
    itemsMenu: Array<string>
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.itemsMenu.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: end;
  padding-right: 64px;

  ul {
    display: flex;
    gap: 58px;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  z-index: 0;
  position: relative;

  &:hover {
    &::before {
      content: '';
      height: 130%;
      width: 150%;
      background-color: ${theme.colors.dark.accent};
      border-radius: 12px;

      position: absolute;
      top: -2px;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
`