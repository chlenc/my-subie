/**@jsx jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../../stores/DataStore';
import paypal from '../../../icons/paypal.svg'

interface IProps {
    item: IItem
}


export default class PriceBlock extends React.Component<IProps, {}> {
    render() {
        const oldPrice = this.props.item.oldPrice
        const currentPrice = this.props.item.price
        const delta = oldPrice! - currentPrice
        return <PriceRoot>
            {oldPrice
                ? <Wrapper>
                    <OldPrice>{`$${oldPrice}`}</OldPrice>
                    <CurrentPrice css={css`text-decoration-line: line-through;`}>
                        {`$${currentPrice}`}
                    </CurrentPrice>
                    <SaleText>{`You save ${delta} (${Math.ceil(delta / oldPrice)})`}</SaleText>
                    <Paypal src={paypal} />
                </Wrapper>
                : <Wrapper>
                    <CurrentPrice css={css`color: #214C73; font-weight: normal;`}>
                        {`$${currentPrice}`}
                    </CurrentPrice>
                    <Paypal src={paypal} />
                </Wrapper>
            }
        </PriceRoot>
    }
}

const PriceRoot = styled.div`
margin-top: 14px;
font-family: 'GothamPro-Medium';
justify-content: space-between;
display: flex;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const OldPrice = styled.div`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 138.2%;
color: #CF4B4B;
`
const CurrentPrice = styled.div`
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 138.2%;
color: #9D998E;
`
const SaleText = styled.div`
margin-top: 4px;
display: flex;
align-items: flex-end;
font-weight: normal;
font-size: 12px;
line-height: 138.2%;
color: #214C73;
`
const Paypal = styled.img`
margin-bottom: 4px;
height: 19px;
`

