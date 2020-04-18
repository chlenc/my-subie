/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../stores/DataStore'
import Product from '../HotGoods/Product'


interface IProps {
    goods: IItem[]
}
interface IState {
    page: number
}
export default class FilteredGoods extends React.Component<IProps, {}> {
    state: IState = { page: 1 }
    render() {
        const N = this.props.goods.length
        const numberPage = Math.ceil(N/20)
        return <Root>
            {this.props.goods.map(good =>
                <div css={css`width: 21%; margin-left: 30px !important;`}>
                    {console.log(good.tags.toString())}
                    <Product good={good} />
                </div>)}
            {for (let i=1; i <= numberPage; i++) return <PageButton href='/'>i</PageButton>
            }
        </Root>
    }
}

const Root = styled.div`
margin-top: 40px;
width: 850px;
height: auto;
display: flex;
flex-wrap: wrap;
`
const PageButton = styled.a`
width: 20px;
height: 20px;
`