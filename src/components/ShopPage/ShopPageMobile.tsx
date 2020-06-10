/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import SortByModel from './SortByModel'
import FilteredGoods from './FilteredGoods'
import FilterHandler from './FilterHandler'
import { IItem, DataStore } from '../../stores/DataStore'
import { inject, observer } from 'mobx-react'
import ReactLoaderSpinner from 'react-loader-spinner'
import { animateScroll as scroll } from 'react-scroll'
import { SelectorsStore } from '../../stores/SelectorsStore'
import SortByTagMobile from './SortByTag/SortByTagMobile'

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
    selectorsStore?: SelectorsStore
    filteredGoods: IItem[]
}

@inject('dataStore', 'selectorsStore')
@observer
export default class MainPage extends React.Component<IProps, {}> {
    scrollToTop() { scroll.scrollToTop() }
    
    render() {
        const goods = this.props.filteredGoods
        return goods && goods.length
            ? <Root>
                <Selectors>
                    <SortByModel />
                    <SortByTagMobile />
                </Selectors>
                <FilterHandler />
                <FilteredGoods goods={this.props.filteredGoods}/>
            </Root>
            : <Loader />
    }
}

const Root = styled.div`
width: 92vw;
`
const Selectors = styled.div`
display: flex;
justify-content: space-between;
`

