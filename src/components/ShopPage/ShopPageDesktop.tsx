/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import SortByModel from './SortByModel'
import SortByTag from './SortByTag'
import SortByMerch from './SortByMerch'
import FilteredByTags from './FilteredByTags'
import FilteredGoods from './FilteredGoods'
import FilterHandler from './FilterHandler'
import { IItem, DataStore } from '../../stores/DataStore'
import { animateScroll as scroll } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'


interface IProps {
    dataStore?: DataStore
    filteredGoods: IItem[]
}

// @inject('dataStore')
// @observer
export default class MainPage extends React.Component<IProps, {}> {
    scrollToTop() { scroll.scrollToTop() }

    render() {
        const filteredGoods = this.props.filteredGoods

        return <Root>
            <FilteredByTags />
            <FilterHandler />
            <div css={css`display: flex; justify-content: space-between;`}>
                <div css={css`display: flex; flex-direction: column; justify-content: flex-start;`}>
                    <SortByModel />
                    <SortByTag />
                    <SortByMerch />
                </div>
                <FilteredGoods goods={filteredGoods} />
            </div>
            <GoTopButton src={GOHEADERBUTTON} onClick={this.scrollToTop} />
        </Root>
            // : <Loader />
    }
}

const Root = styled.div`
`
const GoTopButton = styled.img`
position: fixed;
left: 5%;
bottom: 50px;
width: 56px;
height: 56px;
border-radius: 50%;
cursor: pointer;
`