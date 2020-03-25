/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import front from '../../icons/MenuMobile/front.svg'
import side from '../../icons/MenuMobile/side.svg'
import allparts from '../../icons/MenuMobile/allparts.svg'
import rearparts from '../../icons/MenuMobile/rearparts.svg'
import interior from '../../icons/MenuMobile/interior.svg'
import merch from '../../icons/MenuMobile/merch.svg'

export default class MenuMobile extends React.Component {
    render() {
        return <Root>
            <Body>
            <Title>SHOW ME</Title>
            <Menu>
                <MenuColumn css={css`padding-left: 16px;`}>
                    <MenuElement css={css`margin-top: 13px;`}>
                        <Icon css={css`background-image: url(${front});`} />
                        #FRONTPARTS
                    </MenuElement>
                    <MenuElement>
                        <Icon css={css`background-image: url(${side});`} />
                        #SIDEPARTS
                    </MenuElement>
                    <MenuElement>
                        <Icon css={css`background-image: url(${allparts});`} />
                        #ALLPARTS
                    </MenuElement>
                </MenuColumn>
                <MenuColumn >
                    <MenuElement css={css`margin-top: 13px;`}>
                        <Icon css={css`background-image: url(${rearparts});`} />
                        #REARPARTS
                    </MenuElement>
                    <MenuElement>
                        <Icon css={css`background-image: url(${interior});`} />
                        #INTERIORPARTS
                    </MenuElement>
                    <MenuElement>
                        <Icon css={css`background-image: url(${merch});`} />
                        #MERCH
                    </MenuElement>
                </MenuColumn>
            </Menu>
            </Body>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
display: flex;
justify-content: center;
background: #FAFAFA;
`
const Body = styled.div `
width: 375px;
margin-top: 13px;
justify-content: center;
align-items: center;
`
const Title = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 13px;
text-align: center;
`
const Menu = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`
const MenuColumn = styled.div`
display: flex;
width: 50%;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`
const MenuElement = styled.div`
margin-top: 26px;
height: 26px;
text-align: left;
display: flex;
flex-direction: row;
align-items: center;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 13px;
`
const Icon = styled.div`
width: 26px;
height: 26px;
margin-right: 5px;
background-size: cover;
`