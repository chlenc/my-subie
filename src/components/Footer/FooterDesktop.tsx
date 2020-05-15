import React from 'react'
import styled from '@emotion/styled'
import logo from '../../icons/Footer/logo.svg'
import IG from '../../icons/Footer/IG.svg'
import FB from '../../icons/Footer/FB.svg'
import YT from '../../icons/Footer/YT.svg'

export default class Footer extends React.Component {
    render() {
        return <Root>
            <Body>
                <Logo/>
                <SocialNetworks>
                    <NetworkIcon style={ {backgroundImage: `url(${IG})`} }/>
                    <NetworkIcon style={ {backgroundImage: `url(${FB})`} }/>
                    <NetworkIcon style={ {backgroundImage: `url(${YT})`} }/>
                </SocialNetworks>
                <Menu>
                    <Text>ABOUT US</Text>
                    <Text>SHIPPING</Text>
                    <Text>RETURNS</Text>
                    <Text>BLOG</Text>
                    <Text>CONTACT US</Text>
                </Menu>
            </Body>
        </Root>
    }
}

const Root = styled.div `
display: flex;
align-items: center;
`

const Body = styled.div `
width: 1070px;
height: 136px;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 1074px){
    width: 92vw;
    width: 768px;
}
@media (max-width: 767px){
    width: 375px;
    height: auto;
    flex-direction: column;
}
`

const Logo = styled.div `
width: 127px;
height: 63px;
background-image: url(${logo});
`
const SocialNetworks = styled.div `
width: 120px;
height: 30px;
display: flex;
justify-content: space-between;
`
const NetworkIcon = styled.div `
width: 30px;
height: 30px;
background-size: cover;
`
const Menu = styled.div `
width: 81px;
height: 105px;
/* padding-right: 50px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
font-family: 'GothamPro-Medium';
font-size: 12px;
line-height: 138.2%;
color: #9D998E;
`
const Text = styled.div `
height: 17px;
`