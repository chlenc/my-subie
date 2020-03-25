import React from 'react'
import styled from '@emotion/styled'
import IconBox from '../../icons/4Reasons/IconBox.svg'
import IconDollar from '../../icons/4Reasons/IconDollar.svg'
import IconHeart from '../../icons/4Reasons/IconHeart.svg'
import IconStar from '../../icons/4Reasons/IconStar.svg'
import ReasonsContent from './ReasonsContent'

export default class Reasons extends React.Component {
    render() {
        return <Root>
            <Four>4</Four>
            <Title>Reasons</Title>
            <SubTitle>Why people love to have a business with MySubie</SubTitle>
            <RootContent>
                <ReasonsContent imageURL={IconStar} header='Customer service' text={<>You’ll get what you expect.<br /><br />Our credo is to be honest with you and ourselfs. We provide tons of pictures and video about the condition of the items to give you as much info as possible.</>} tags="#partswithlove" />
                <ReasonsContent imageURL={IconBox} header='Safely packed goodies' text={<>Nobody would love to get a damaged stuff right?<br /><br />We’ve sent a tons of parcels and got some really nice experience how to pack your lovely goodies to keep them safe and beautiful!</>} tags="#fragile" />
                <ReasonsContent imageURL={IconHeart} header='Passion' text={<>We love those cars and we would like to give you the opportunity to see how beautiful they could be with right parts from the motherland!</>} tags="#savethe2ndgens" />
                <ReasonsContent imageURL={IconDollar} header='Pricing' text={<>You’ll save a few tens of dollars dealing with us instead eBay sellers! Plus you will save hundreds on bumper shipping vs japan auctions as well.</>} tags="Feel free to contact us to get your package deal!" />
            </RootContent>
        </Root>
    }
}

const Root = styled.div`
width: 1070px;
height: 813px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
@media screen and (max-width: 768px){
    width: 375px;
    height: auto;
}
`

const Four = styled.div`
width: 320px;
height: 199px;
margin-top: 30px;
font-family: 'GothamPro-Bold';
font-weight: bold;
font-size: 220px;
line-height: 211px;
text-align: center;
@media screen and (max-width: 768px){
    width: auto;
    height: auto;
    line-height: 172px;
    font-size: 180px;
}
`
const Title = styled.div`
width: 440px;
height: 96px;
font-family: 'GothamPro-Medium', sans-serif;
font-weight: bold;
font-size: 100px;
line-height: 96px;
text-align: center;
color: #000000;
@media screen and (max-width: 768px){
width: auto;
    margin-top: -25px;
    font-size: 30px;
    line-height: 29px;
}
`

const SubTitle = styled.div`
width: 440px;
height: 15px;
font-family: 'GothamPro-Medium', sans-serif;
font-weight: bold;
font-size: 16px;
line-height: 15px;
text-align: center;
color: #9D998E;
@media screen and (max-width: 768px){
    width: auto;
    height: auto;
    font-size: 14px;
    line-height: 13px;
    margin-top: -60px;
}
`

const RootContent = styled.div`
width: 731px;
height: 362px;
margin-top: 48px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width: 768px){
    width: auto;
    height: auto;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
`