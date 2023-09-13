import React from 'react';
import { S } from './Title_Styles';

type StyledTitlePropsType = {
    textTitle: string
}

export const Title: React.FC<StyledTitlePropsType> = (props: StyledTitlePropsType) => {
    return (
        <>
            <S.Title>
                {props.textTitle}
            </S.Title>
        </>
    );
};

