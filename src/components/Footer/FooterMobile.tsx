/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import {css, jsx} from '@emotion/core'
import logo from '../../icons/Footer/logo.svg'
import IG from '../../icons/Footer/IG.svg'
import FB from '../../icons/Footer/FB.svg'
import YT from '../../icons/Footer/YT.svg'

export default class Footer extends React.Component {
    render() {
        return <Root>
            <LeftColumn>
                <Logo />
                <SocialNetworks>
                    <NetworkIcon style={{ backgroundImage: `url(${IG})` }} />
                    <NetworkIcon style={{ backgroundImage: `url(${FB})` }} />
                    <NetworkIcon style={{ backgroundImage: `url(${YT})` }} />
                </SocialNetworks>
            </LeftColumn>
            <Menu>
                <Text css={css`margin-top: 0px;`}>ABOUT US</Text>
                <Text>SHIPPING</Text>
                <Text>RETURNS</Text>
                <Text>FEEDBACK</Text>
                <Text>CONTACT US</Text>
            </Menu>
        </Root>
    }
}

const Root = styled.div`
width: 375px;
height: auto;
display: flex;
align-items: center;
margin-bottom: 24px;
`

const LeftColumn = styled.div`
flex: 2;
display: flex;
flex-direction: column;

`
const Logo = styled.div`
width: 127px;
height: 63px;
margin-top: 21px;
margin-left: 15px;
background-image: url(${logo});
`
const SocialNetworks = styled.div`
width: 187px;
height: 47px;
margin-top: 46px;
margin-left: 15px;
display: flex;
justify-content: space-between;
`
const NetworkIcon = styled.div`
width: 47px;
height: 47px;
background-size: cover;
`

const Menu = styled.div`
width: calc(100% -15px);
margin-top: 21px;
margin-right: 15px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
font-family: 'GothamPro-Medium';
font-size: 12px;
line-height: 138.2%;
color: #9D998E;
`
const Text = styled.div`
margin-top: 13px;
font-size: 16px;
`