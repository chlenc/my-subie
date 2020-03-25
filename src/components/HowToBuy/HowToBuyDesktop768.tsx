/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import steps from '../../icons/HowToBuy/steps768.svg'
import fifthIcon from '../../icons/HowToBuy/step5.svg'
export default class HowToBuyDesktop extends React.Component {
    render() {
        return <Root>
            <Body>
                <Title>HOW TO BUY A GOODIES?
                <SubTitle>It’s simple;)</SubTitle>
                </Title>
                <StepsIcon />
                <Description>
                    <Point css={css`width: 105px; margin-left: 69px;`}> Choose an item <br />you like the most</Point>
                    <Point css={css`width:130px; margin-left: 50px;`}>Check the details,<br />accept the condition</Point>
                    <Point css={css`width: 190px; margin-left: 32px;`}>Enter your delivery info<br /> and check a shipping quote</Point>
                    <Point css={css`width: 125px; margin-left: 2px;`}> Pay for the goodies<br /> via PayPal</Point>
                </Description>
                <FifthPoint>
                    <FifthIcon />
                    <Point css={css`margin-top: 19px;`}>Get your tracking #<br />and await for a parcel;) </Point>
                </FifthPoint>
                <Footer>Click here for a detailed instruction</Footer>
            </Body>
        </Root>
    }
}
const Root = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background: #FAFAFA;
width: 100%;
`
const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
text-align: center;
`
const Title = styled.div`
width: 260px;
height: 37px;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 47px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
`
const SubTitle = styled.div`
width: 125px;
height: 13px;
margin-top: 7px;
font-family: 'GothamPro-Medium';
font-weight: normal;
font-size: 14px;
line-height: 13px;
text-align: right;
`
const StepsIcon = styled.div`
width: 559px;
height: 42px;
margin-top: 42px;
background-image: url(${steps});
background-size: cover;
`
const Description = styled.div`
width: 768px;
margin-top: 20px;
display: flex;
flex-direction: row;

`
const Point = styled.div`
text-align: center;
`
const FifthPoint = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

`
const FifthIcon = styled.div`
width: 42px;
height: 42px;
background-image: url(${fifthIcon});
background-size: cover;
`
const Footer = styled.div`
width: 440px;
height: 17px;
margin-top: 25px;
padding-bottom: 44px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #000000;
`