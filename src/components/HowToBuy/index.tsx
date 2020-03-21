import React from 'react'
import styled from '@emotion/styled'
import steps from '../../icons/StepsRounds.svg'

export default class HowToBuy extends React.Component {
    render (){
        return <Root>
        <Body>
            <Title>HOW TO BUY A GOODIES?
                <SubTitle>It’s simple;)</SubTitle>
            </Title>
            <StepsIcon/>
            <Description>
                <Point> Choose an item <br/>you like the most</Point>
                <Point>Check the details,<br/>accept the condition</Point>
                <Point>Enter your delivery info<br/> and check a shipping quote</Point>
                <Point> Pay for the goodies<br/> via PayPal</Point>
                <Point>Get your tracking #<br/>and await for a parcel;) </Point>
            </Description>
            <Footer>Click here for a detailed instruction</Footer>
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
const Body = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 1070px;
height: 321px;
`
const Title = styled.div `
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
const SubTitle = styled.div `
width: 125px;
height: 13px;
margin-top: 7px;
font-family: 'GothamPro-Medium';
font-weight: normal;
font-size: 14px;
line-height: 13px;
text-align: right;
`
const StepsIcon = styled.div `
width: 730px;
height: 42px;
margin-top: 24px;
background-image: url(${steps});
background-size: cover;
`
const Description = styled.div `
width: 860px;
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
text-align: center;
`
const Point = styled.div `
flex: 1;
text-align: center;
`
const Footer = styled.div `
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