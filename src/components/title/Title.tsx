import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type StyledTitlePropsType = {
    textTitle: string
}

export const Title = (props: StyledTitlePropsType) => {
    return (
        <>
            <StyledTitle>
                {props.textTitle}
            </StyledTitle>
            <Icon iconId={'dot'}/>
        </>
    );
};

const StyledTitle = styled.h2`

`