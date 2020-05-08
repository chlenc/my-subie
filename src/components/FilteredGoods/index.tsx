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
                <div css={css`width: 21%; margin-left: 30px !important;`}>
                    <Product good={good} />
                </div>
            )
            }
        </Root>
    }
}


const Root = styled.div`
position: relative;
margin-top: 40px;
width: 850px;
height: auto;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
`
