import React from 'react'
import styled from '@emotion/styled'
import CustomCar from './CustomCar'
import {car1, car2, car3} from './images'
import button from '../../images/CustCarsImgs/ButtonShopNow.svg'
export default class CustomCars extends React.Component {
    render() {
        return <Root>
            <Title>CUSTOMER’S PROJECT CARS</Title>
            <Cars>
                <CustomCar imageURL={car1} nickname='Jona’s BP (USA)' login='@legacygt_bp5'/>
                <CustomCar imageURL={car1} nickname='Jona’s BP (USA)' login='@legacygt_bp5'/>
                <CustomCar imageURL={car2} nickname='Jona’s BP (USA)' login='@legacygt_bp5'/>
                <CustomCar imageURL={car3} nickname='Jona’s BP (USA)' login='@legacygt_bp5'/>
                <CustomCar imageURL={car3} nickname='Jona’s BP (USA)' login='@legacygt_bp5'/>
            </Cars>
            <Button/>
        </Root>
    }
}

const Root = styled.div `
width: 1070px;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div `
width: 440px;
height: 17px;
margin-top: 26px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
`
const Cars = styled.div `
width: 1070px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Button = styled.div `
width: 118px;
height: 29px;
margin-top: 17px;
background-image: url(${button});
`