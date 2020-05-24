/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../stores/DataStore'
import Product from '../HotGoods/Product'

interface IProps {
    goods: IItem[]
}

export default class FilteredGoods extends React.Component<IProps, {}> {
    handleChangePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, page: number) => this.setState({ page })
    render() {
        return <Root>
            {this.props.goods.map(good =>
                <Wrapper>
                    <Product good={good} />
                </Wrapper>)}
        </Root>
    }
}


const Root = styled.div`
position: relative;
margin-top: 40px;
margin-left: 30px;
width: 850px;
height: auto;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
@media (max-width: 1279px) {
    width: calc(92vw + 30px);
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
}
`
const Wrapper = styled.div`
@media (min-width: 1280px){
    width: 21%;
    /* margin-left: 30px; */
}
margin-left: 15px;
margin-right: 15px;
width: 190px;
`
