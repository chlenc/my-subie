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
import Calculator from './Calculator'

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
                <div css={css`display: flex; flex-direction: row; justify-content: center;`}>
                    <GoodiesPanel items={goodsInCart} />
                    <Calculator />
                </div>
                {console.log(goodsInCart.length)}
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
justify-content: center;
`