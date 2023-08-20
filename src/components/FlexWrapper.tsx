import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    wrap?: string
    content?: string
    items?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.content || 'flex-start'};
  align-items: ${props => props.items || 'stretch'};
`