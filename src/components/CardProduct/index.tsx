/**@jsx jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../stores/DataStore';
import ItemTags from '../ItemTags';
import { BasketStore } from '../../stores/BasketStore';
import { inject, observer } from 'mobx-react';

interface IProps {
    item: IItem
    basketStore?: BasketStore
}

@inject('basketStore')
@observer
export default class CardProduct extends React.Component<IProps, {}> {
    item = this.props.item
    render() {
        const item = this.props.item
        return <Root>
            <Title>{item.title}</Title>
            <Stock>{item.stock ? 'In stock' : 'Nosock'}</Stock>
            <Line />
            <PriceBlock item={item} />
            <AddButton onClick={() => {
                console.log(this.props.item.id)
                this.props.basketStore?.increaseItem(this.props.item.id!)
            }}>
                ADD TO CART
            </AddButton>
                <Text>• Worldwide shipping available.</Text>
                <Text>• Calculate your shipping quote in a shopping cart.</Text>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
border: 2px solid #9D998E;
border-radius: 20px;
padding: 21px 25px 12px;
`
const Title = styled.div`
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #000000;
`
const Stock = styled.div`
margin-top: 7px;
font-family: 'GothamPro-Medium';
font-size: 20px;
line-height: 138.2%;
color: #82CA9C;
`
const Line = styled.div`
margin-top: 6px;
width: 100%;
height: 0px;
border: 1px solid #9D998E;
`

class PriceBlock extends React.Component<IProps, {}> {
    render() {
        return <PriceRoot>
            {this.props.item.oldPrice
                ? <div>
                    <OldPrice>{`$${this.props.item.oldPrice}`}</OldPrice>
                    <CurrentPrice css={css`text-decoration-line: line-through;`}>
                        {`$${this.props.item.price}`}
                    </CurrentPrice>
                </div>
                : <CurrentPrice css={css`color: #214C73; font-weight: normal;`}>
                    {`$${this.props.item.price}`}
                </CurrentPrice>
            }

        </PriceRoot>
    }
}

const PriceRoot = styled.div`
margin-top: 14px;
font-family: 'GothamPro-Medium';
justify-content: flex-start;
display: flex;
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
const AddButton = styled.div`
width: 100%;
height: 60px;
margin-bottom: 17px;
margin-top: 12px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #FFAE00;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

padding-top: 3px;
font-weight: bold;
font-size: 18px;
text-align: center;
color: #000000;
cursor: pointer;
`
const Text = styled.div`
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
color: #9D998E;
`