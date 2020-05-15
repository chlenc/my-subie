/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import CustomCar from './CustomCar'
import { car1, car2, car3 } from './images'
import { useWindowDimensions } from '../../utils/dimensions'

interface IProps {

}

export default class CustomCars extends React.Component<{}, {}> {
    render() {
        return <Root>
            <Title>CUSTOMER’S PROJECT CARS</Title>
            <Wrapper css={css`width: 100%; display: flex; flex-direction: row; justify-content: center;`}>
                <CustomCar imageURL={car1} nickname='Jona’s BP (USA)' login='@legacygt_bp5' />
                <CustomCar imageURL={car1} nickname='Jona’s BP (USA)' login='@legacygt_bp5' />
                <CustomCar imageURL={car2} nickname='Jona’s BP (USA)' login='@legacygt_bp5' />
                <CustomCar imageURL={car3} nickname='Jona’s BP (USA)' login='@legacygt_bp5' />
                <CustomCar imageURL={car3} nickname='Jona’s BP (USA)' login='@legacygt_bp5' />
            </Wrapper>
            <Button>SHOP NOW</Button>
        </Root>
    }
}



const Root = styled.div`
width: 1070px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'GothamPro-Medium';
@media (max-width: 1069px){
    width: 92vw;
}
@media (max-width: 767px){
    display: none;
}
`
const Title = styled.div`
width: 440px;
height: 17px;
margin-top: 26px;
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
`
const Wrapper = styled.div`
@media (max-width: 1069px){
    > div:nth-child(1) {
    display: none;
    }
    > div:nth-child(5) {
        display: none;
    }
}

`
const Button = styled.div`
width: 118px;
height: 29px;
display: flex;
justify-content: center;
align-items: center;
padding-top: 2px;
margin-top: 17px;

font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 13px;

background: #FFAE00;
border-radius: 10px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
cursor: pointer;
`