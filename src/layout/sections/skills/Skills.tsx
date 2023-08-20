import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper content={'end'} gap={'20px'}>
                <FlexWrapper direction={'column'}>
                    <SkillIconBox>
                        <Icon iconId={'Ps'} viewBox={'3 3 27 27'} preserveAspectRatio={'none'}/>
                    </SkillIconBox>
                    <SkillName>Photoshop</SkillName>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <SkillIconBox>
                        <Icon iconId={'Ae'} viewBox={'3 3 27 27'}/>
                    </SkillIconBox>
                    <SkillName>After Effects</SkillName>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <SkillIconBox>
                        <Icon iconId={'Ai'} viewBox={'3 3 26 26'}/>
                    </SkillIconBox>
                    <SkillName>Illustrator</SkillName>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <SkillIconBox>
                        <Icon iconId={'figma'} viewBox={'3 3 26 26'}/>
                    </SkillIconBox>
                    <SkillName>Figma</SkillName>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background: #222;
  color: white;
`
const SkillIconBox = styled.div`

  
  svg {
    border: 10px solid #c02e2e;
    border-radius: 50%;
  }
`
const SkillName = styled.span`

`