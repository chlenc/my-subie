import React from 'react'
import styled from '@emotion/styled'
import { IItem } from '../../../stores/DataStore'
import Product from '../../MainPage/HotGoods/Product'

interface IProps {
    items: IItem[]
}

export default class RecommendedProducts extends React.Component<IProps, {}> {
    goods = randomGoods(this.props.items)
    render() {
        return <Root>
            <Title>You may also be interested in...</Title>
            <Products>
                {this.goods.map(item => <Product good={item} />)}
            </Products>
        </Root>
    }
}

function randomGoods(goods: IItem[]) {
    const hotGoods: IItem[] = []
    const filterGoods = goods.filter(item => item.tags.indexOf('#DISCOUNTED' || '#UNDER100') === -1 && item.tags[item.tags.length - 1] !== undefined)
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
@media (max-width: 520px){
    display: none;
}
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
@media (max-width: 1070px){
> div:nth-child(1) {
 display: none;
}
> div:nth-child(5) {
 display: none;
}
}
`