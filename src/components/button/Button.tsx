import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const Button = () => {
    return (
        <Link href="">
            See Projects
            <Icon iconId={'arrow-right'}
                  viewBox={'-14 -12 50 50'}/>
        </Link>
    );
};

const Link = styled.a`

`