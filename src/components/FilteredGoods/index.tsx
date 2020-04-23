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
    handleChangePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, page: number) => this.setState({ page })
    render() {
        const N = this.props.goods.length
        const numberPages = Math.ceil(N / 20)
        const renderGoods: IItem[] = this.props.goods.slice(this.state.page, this.state.page + 20)
        const pagesArray = []
        for (let i = 1; i <= numberPages; i++) pagesArray.push(i)
        return <Root>
            {renderGoods.map(good =>
                <div css={css`width: 21%; margin-left: 30px !important;`}>
                    <Product good={good} />
                </div>
            )
            }
            <PageRoot>
                {pagesArray.map((page, key) => <PageButton onClick={() => {
                    this.setState({ page });
                }} key={key} href={`${page}`}>{page}</PageButton>)}
            </PageRoot>
        </Root>
    }
}


const Root = styled.div`
position: relative;
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
const PageRoot = styled.div`
position: relative;
width: calc(100% + 205px);
display: flex;
justify-content: center;
`
