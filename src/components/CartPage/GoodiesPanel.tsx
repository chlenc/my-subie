/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { inject, observer } from 'mobx-react'
import { BasketStore, IBasketItems } from '../../stores/BasketStore'

interface IProps {
    basketStore?: BasketStore
}

@inject('basketStore')
@observer
export default class GoodiesPanel extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Wrapper>
                <Title>GOODIES</Title>
                <Title>PRICE</Title>
            </Wrapper>
            {this.props.basketStore!.basketItems.map((item, key) => <Item key={key} item={item}/>)}
        </Root>
    }
}

const Root = styled.div`
flex: 1;
display: flex;
flex-direction: column;
font-family: 'GothamPro-Medium';
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #9D998E;
`
const Title = styled.div`
font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #9D998E;
`
interface IItemProps {
    item: IBasketItems
}

const Item: React.FC<IItemProps> = props => {
    return <div></div>
}