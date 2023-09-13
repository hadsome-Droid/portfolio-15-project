import styled from "styled-components";

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%), #D9D9D9;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
  }
`
export const S = {
    Title
}