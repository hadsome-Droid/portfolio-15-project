import React from 'react';
import styled from "styled-components";


type MenuPropsType = {
    itemsMenu: Array<string>
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
                {props.itemsMenu.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
        </StyledMenu>
    );
};

const StyledMenu = styled.ul`

`

const ListItem = styled.li`

`

const Link = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  
`