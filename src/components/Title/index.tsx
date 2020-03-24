import React from 'react'
import styled from '@emotion/styled'
import bg from '../../images/Slider01.png'
import buttonbg from '../../icons/BUTTONSHOPNOW.svg'


export default class ContentBox extends React.Component {
    render() {
        return <Root>
            <Body>
                <Content>
                    <Text1>WELCOME TO MYSUBIE-PARTS.COM</Text1>
                    <Text2>WE SHIP JDM PARTS<br /> AROUND THE WORLD.</Text2>
                    <Button></Button>
                </Content>
            </Body>
        </Root>
    }
}

const Root = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
background: #FAFAFA;
width: 100%;
`

const Body = styled.div`
width: 1070px;
height: 320px;
background-image: url(${bg});
background-size: cover;
display: flex;
flex-direction: row;
justify-content: left;
font-family: 'GothamPro-Black';
font-weight: normal;
color: white;
@media  screen and (max-width: 1024px) {
    width: 690px;
    height: 206px;
}
@media  screen and (max-width: 768px) {
    width: 375px;
    height: 159px;
    justify-content: center;
}
`
const Content = styled.div`
height: auto;
width: 380px;
margin-left: 134px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
@media  screen and (max-width: 1024px) {
    width: 315px;
    align-items: flex-start;
    margin-left: 30px;
    text-align: left;
}
@media  screen and (max-width: 768px) {
    width: 343px;
    align-items: center;
    margin-left: 0px;
    text-align: left;
}
`
const Text1 = styled.div`
margin-top: 95px;
font-size: 20px;
@media  screen and (max-width: 1024px) {
    margin-top: 30px;
    font-size: 14px;
}
@media  screen and (max-width: 1024px) {
    margin-top: 16px;
    font-size: 18px;
}
`
const Text2 = styled.div`
margin-top: 8px;
font-size: 32px;
font-weight: bold;
line-height: 42px;
font-weight: 900;
color: white;
@media  screen and (max-width: 1024px) {
    margin-top: 15px;
    font-size: 24px;
    line-height: 33px;
}
@media  screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 24px;
    line-height: 23px;
    text-align: center;
}
`

const Button = styled.div`
width: 172px;
height: 44px;
background-image: url(${buttonbg});
background-size: cover;
margin-left: 200px;
@media  screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 23px;
    margin-left: -10px;
    margin-top: 7px;
}
@media  screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 23px;
    margin-left: -10px;
    margin-top: 0px;
}
`