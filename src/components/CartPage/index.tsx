/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import StepsPanel from './StepsPanel'
import { BasketStore } from '../../stores'
import { DataStore } from '../../stores'
import { inject, observer } from 'mobx-react'
import { IItem } from '../../stores/DataStore'
import GoodiesPanel from './GoodiesPanel'
import ReactLoaderSpinner from 'react-loader-spinner'
import Calculator from './Calculator/Calculator'

interface IProps {
    basketStore?: BasketStore
    dataStore?: DataStore
}

@inject('dataStore', 'basketStore')
@observer
export default class CartPage extends React.Component<IProps, {}> {
    render() {
        const goods = Object.entries(this.props.dataStore!.goods).reduce((acc: IItem[], [key, value]) => ([...acc, { ...value, id: key }]), [])

        const goodsInCart = goods.filter(item => this.props.basketStore!.basketItems.map(basketItem => basketItem.id).indexOf(item.id) !== -1)
        return goods && goods.length
            ? <Root>
                <StepsPanel />
                {this.props.basketStore?.basketItems.length
                    ? <Wrapper>
                        <GoodiesPanel items={goodsInCart} />
                        <Calculator />
                    </Wrapper>
                    : <Wrapper>
                        <Text>YOUR CART IS EMPTY</Text>
                    </Wrapper>}
            </Root>
            : <Loader />
    }
}

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

const Root = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
margin-top: 40px;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 700px){
    max-width: 301px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
`

const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
@media (min-width: 1070px){
    font-size: 70px;
    margin-bottom: 50px;
}
@media (max-width: 1070px){
    font-size: 30px;
    height: 25vh;
}
`