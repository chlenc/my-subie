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
import { inject, observer } from 'mobx-react'
import ReactLoaderSpinner from 'react-loader-spinner'
import { animateScroll as scroll } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'
import { SelectorsStore } from '../../stores/SelectorsStore'

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
    selectorsStore?: SelectorsStore
    searchValue?: string
}

@inject('dataStore', 'selectorsStore')
@observer
export default class MainPage extends React.Component<IProps, {}> {
    scrollToTop() { scroll.scrollToTop() }

    render() {
        const goods = Object.entries(this.props.dataStore!.goods)
            .reduce((acc: IItem[], [key, value]) => ([...acc, { ...value, id: key }]), [])

        let selectedTags: string[] = this.props.selectorsStore!.selectedTags
        let selectedModel: string = this.props.selectorsStore!.selectedModel
        let selectedGen: string = this.props.selectorsStore!.selectedGen
        return goods && goods.length
            ? <Root>
                <FilteredByTags />
                <FilterHandler />
                <div css={css`display: flex; justify-content: space-between;`}>
                    <div css={css`display: flex; flex-direction: column; justify-content: flex-start;`}>
                        <SortByModel />
                        <SortByTag />
                        <SortByMerch />
                    </div>
                    <FilteredGoods goods={filter(goods, selectedTags, selectedModel, selectedGen)} />
                </div>
                <GoTopButton src={GOHEADERBUTTON} onClick={this.scrollToTop} />
            </Root>
            : <Loader />
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

function filter(goods: IItem[], selectedTags: string[], selectedModel: string = '', selectedGen: string = '') {
    let filteredGoods: IItem[] = goods
    const N = selectedTags.length
    selectedModel = selectedModel.toUpperCase()
    selectedGen = selectedGen.toUpperCase()

    selectedModel === '' && selectedGen === ''
        ? filteredGoods = goods
        : selectedGen === '' && selectedModel !== ''
            ? filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1))
            : filteredGoods = goods.filter(item => (item.model.toUpperCase().indexOf(selectedModel) !== -1)
                && (item.gen.toUpperCase().indexOf(selectedGen) !== -1))


    filteredGoods = filteredGoods.filter(item => {
        let count = 0
        for (let i = 0; i < N; i++) {
            if (item.tags.indexOf(`#${selectedTags[i]}`) !== -1) {
                count += 1
            }
        }
        return (count === N)
    })

    return filteredGoods
}
