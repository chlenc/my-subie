/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../stores/DataStore'
import Product from '../MainPage/HotGoods/Product'

interface IProps {
    items: IItem[]
}

export default class MerchProducts extends React.Component<IProps, {}> {
    goods = merchGoods(this.props.items)
    render() {
        return <Root>
            <Title>Support us #designedwithlove</Title>
            <Products>
                {this.goods.map(item => <Product good={item} />)}
            </Products>
        </Root>
    }
}

function merchGoods(goods: IItem[]) {
    const hotGoods: IItem[] = []
    const filterGoods = goods.filter(item => item.model.toUpperCase() === 'MERCH')
    const N = filterGoods.length
    let rand: number = 0
    while (hotGoods.length < 5) {
        rand = Math.floor(Math.random() * N)
        hotGoods.push(filterGoods[rand])
    }
    return hotGoods
}
const Root = styled.div`
width: 100%;
margin-top: 47px;
display: flex;
flex-direction: column;
transition: all 500ms;
`
const Title = styled.div`
margin-bottom: 27px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 24px;
line-height: 23px;
color: #000000;
`
const Products = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 1074px){
> div:nth-child(1) {
 display: none;
}
> div:nth-child(5) {
 display: none;
}
}
`