/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { inject, observer } from 'mobx-react'
import { BasketStore, DataStore } from '../../../stores'
import { IItem } from '../../../stores/DataStore'
import { IBasketItems } from '../../../stores/BasketStore'
import StepsPanel from './StepsPanel'
import Calculator from './Calculator'
import ReactLoaderSpinner from 'react-loader-spinner'
import Form from './Form'
import { observable } from 'mobx'

interface IProps {
    basketStore?: BasketStore
    dataStore?: DataStore
}

@inject('dataStore', 'basketStore')
@observer
export default class OrderDetails extends React.Component<IProps> {
    @observable selectedCountry: string = ''
    setCountry = (country: string) => this.selectedCountry = country
    render() {
        const goods = Object.entries(this.props.dataStore!.goods)
            .reduce((acc: IItem[], [key, value]) => ([...acc, { ...value, id: key }]), [])
        const goodsInCart: IBasketItems[] = this.props.basketStore?.basketItems!
        const filteredGoods: IItem[] = goodsInCart.reduce(
            (acc: IItem[], item: IBasketItems) => {
                acc.push(goods.find(good => good.id === item.id)!)
                return acc
            }
            , [])
        return goods && goods.length
            ? <Root>
                <StepsPanel />
                <Wrapper>
                    <Form setCountry={this.setCountry} />
                    <Calculator goods={filteredGoods} country={this.selectedCountry} />
                </Wrapper>
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
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media (max-width: 700px){
    max-width: 301px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
`
