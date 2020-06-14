import React from 'react'
import styled from '@emotion/styled'
import SortByModel from './SortByModel'
import FilteredGoods from './FilteredGoods'
import FilterHandler from './FilterHandler'
import { IItem } from '../../stores/DataStore'
import { animateScroll as scroll } from 'react-scroll'
import SortByTagMobile from './SortByTag/SortByTagMobile'

interface IProps {
    filteredGoods: IItem[]
}

export default class MainPage extends React.Component<IProps> {
    scrollToTop() { scroll.scrollToTop() }

    render() {
        const filteredGoods = this.props.filteredGoods
        return <Root>
            <Selectors>
                <SortByModel />
                <SortByTagMobile />
            </Selectors>
            <FilterHandler />
            <FilteredGoods goods={filteredGoods} />
        </Root>
    }
}

const Root = styled.div`
width: 92vw;
`
const Selectors = styled.div`
display: flex;
justify-content: space-between;
`

