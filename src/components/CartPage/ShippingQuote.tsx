import React from 'react'
import styled from '@emotion/styled'
// import { css, jsx } from '@emotion/core'

interface IProps {
    country: string
}

export default class ShippingQuote extends React.Component<IProps> {
    render() {
        return <Root>
            <Title>SHIPPING QUOTE:</Title>
            <Wrapper>
                <Cost>{`$${cost(this.props.country).cost}`}</Cost>
                <DeliveryTime>{`Air delivery(${cost(this.props.country).deliveryTime})`}</DeliveryTime>
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
padding-top: 17px;
padding-bottom: 12px;
flex-direction: column;
display: flex;
align-items: flex-start;
border-top: 2px solid #9D998E;
border-bottom: 2px solid #9D998E;
`
const Wrapper = styled.div`
margin-top: 3px;
display: flex;
align-items: center;
`
const Title = styled.div`
display: flex;
justify-content: flex-start;
font-weight: bold;
font-size: 24px;
color: #000000;
`
const Cost = styled.div`
margin-right: 20px;
font-size: 20px;
line-height: 138.2%;
color: #214C73;
`
const DeliveryTime = styled.div`
font-family: 'GothamPro-Light';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 138.2%;
@media (max-width: 1279px) {
    font-size: 14px;
}
`
const cost = (country: string) => {
    let shipQuote: { cost: number, deliveryTime: string } = { cost: 0, deliveryTime: '' }
    switch (country) {
        case 'USA': shipQuote = { cost: 150, deliveryTime: '2-3 weeks' }; break;
        case 'CANADA': shipQuote = { cost: 200, deliveryTime: '2-3 weeks' }; break;
        case 'AUSTRALIA': shipQuote = { cost: 250, deliveryTime: '2-3 weeks' }; break;
        case 'NEW ZEALAND': shipQuote = { cost: 300, deliveryTime: '2-3 weeks' }; break;
        default: shipQuote = { cost: 300, deliveryTime: '2-3 weeks' }
    }
    return shipQuote
}