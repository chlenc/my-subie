/**jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { BasketStore, IBasketItems } from '../../stores/BasketStore'
import { inject, observer } from 'mobx-react'

interface IProps {
    basketStore?: BasketStore
}

@inject('basketStore')
@observer
export default class FinalInvoice extends React.Component<IProps> {
    count = this.props.basketStore!.basketItems.reduce((acc: number, item: IBasketItems) => acc += item.count, 0)
    totalCost = this.props.basketStore!.basketItems.reduce((acc: number, item: IBasketItems) => acc += item.cost * item.count, 0)
    render() {
        return <Root>
            <Title>{`TOTAL [${this.count} items]`}</Title>
            <Cost>{`$${this.totalCost}`}</Cost>
            <Description>Shipped by domestic post and packed carefully </Description>
            <NextButton href='/'>NEXT</NextButton>
        </Root>
    }
}

const Root = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
`

const Title = styled.div`
display: flex;
justify-content: flex-start;
font-weight: bold;
font-size: 24px;
color: #000000;
`

const Cost = styled.div`
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 138.2%;
color: #214C73;
`
const Description = styled.div`
font-weight: bold;
font-size: 12px;
line-height: 138.2%;
color: #9D998E;
`
const NextButton = styled.a`
width: 100%;
height: 58px;
margin-top: 17px;
display: flex;
justify-content: center;
align-items: center;
background: #82CA9C;
border-radius: 10px;
font-weight: 900;
font-size: 18px;
line-height: 138.2%;
text-align: center;
color: #FFFFFF;
text-decoration: none;
`