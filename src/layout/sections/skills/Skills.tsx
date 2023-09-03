import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const skillItem = [
    {
        iconId: 'Ps',
        skillName: 'Photoshop'
    },
    {
        iconId: 'Ae',
        skillName: 'After Effects'
    },
    {
        iconId: 'Ai',
        skillName: 'Illustrator'
    },
    {
        iconId: 'figma',
        skillName: 'Figma'
    }
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper content={'center'} gap={'20px'}>
                    {skillItem.map((s, index) => {
                        return (
                            <SkillWrapper key={index}>
                                <SkillIconBox>
                                    <Icon iconId={s.iconId} viewBox={'3 3 27 27'}/>
                                </SkillIconBox>
                                <SkillName>{s.skillName}</SkillName>
                            </SkillWrapper>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  padding: 80px 0;

  ${Container} {
    position: relative;
    padding-left: 242px;
  }
`
const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  position: relative;
  z-index: 0;

  background: ${theme.colors.dark.secondaryBg};
  border-radius: 24px;

`

const SkillIconBox = styled.div`
  position: absolute;
  top: -25px;
  z-index: -1;

  svg {
    outline: 10px solid ${theme.colors.dark.primaryBg};
    border-radius: 50%;
  }
`
const SkillName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 161px;
  min-height: 91px;
  padding-top: 10px;
  text-align: center;
`