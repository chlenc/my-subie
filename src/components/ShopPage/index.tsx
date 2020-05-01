/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import SortByModel from '../SortByModel'
import SortByTag from '../SortByTag'
import SortByMerch from '../SortByMerch'
import FilteredByTags from '../FilteredByTags'
import FilteredGoods from '../FilteredGoods'
import FilterHandler from '../FilterHandler'
import { IItem, DataStore } from '../../stores/DataStore'
import { inject, observer } from 'mobx-react'
import ReactLoaderSpinner from 'react-loader-spinner'
import { animateScroll as scroll } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'
import { SelectorsStore } from '../../stores/SelectorsStore'
import { keys } from 'mobx'

const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
    selectorsStore: SelectorsStore
}

@inject('dataStore', 'selectorsStore')
@observer
export default class MainPage extends React.Component<IProps, {}> {
    handleDeleteTag = (tag: string) => this.props.selectorsStore.deleteTag(tag)

    handleDeleteAllTags = () => this.props.selectorsStore.deleteAllTags()

    handleAddTag = (tag: string) => this.props.selectorsStore.addTag(tag)

    scrollToTop() { scroll.scrollToTop() }

    render() {
        let goodsWithKeys = this.props.dataStore!.goods
        Object.entries(goodsWithKeys).reduce((acc:IItem[], [key, value]) => ([...acc, {...value, id: key} ]), [])
        let goods = Object.values(this.props.dataStore!.goods)
        
        let selectedTags: string[] = this.props.selectorsStore.selectedTags
        let selectedModel: string = this.props.selectorsStore.selectedModel
        let selectedGen: string = this.props.selectorsStore.selectedGen
        return goods && goods.length
            ? <Root>
                <FilteredByTags selectorsStore={this.props.selectorsStore} />
                <FilterHandler selectorsStore={this.props.selectorsStore} />
                <div css={css`display: flex; justify-content: space-between;`}>
                    <div css={css`display: flex; flex-direction: column; justify-content: flex-start;`}>
                        <SortByModel selectorsStore={this.props.selectorsStore} />
                        <SortByTag selectorsStore={this.props.selectorsStore} />
                        <SortByMerch selectorsStore={this.props.selectorsStore} />
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
    let filteredGoods: IItem[] = []
    const N = selectedTags.length
    selectedModel = selectedModel.toUpperCase()
    selectedGen = selectedGen.toUpperCase()

    selectedModel === '' && selectedGen === ''
        ? filteredGoods = goods
        : selectedGen === '' && selectedModel !== ''
            ? goods.forEach(item => {
                if (item.model.toUpperCase().indexOf(selectedModel) !== -1)
                    filteredGoods.push(item)
            })
            : goods.forEach(item => {
                if (item.model.toUpperCase().indexOf(selectedModel) !== -1 &&
                    item.gen.toUpperCase().indexOf(selectedGen) !== -1)
                    filteredGoods.push(item)
            })

    filteredGoods.forEach(item => {
        let count = 0
        for (let i = 0; i < N; i++) {
            if (item.tags.indexOf(`#${selectedTags[i]}`) !== -1) {
                count += 1
            }
        }
        if (count === N) {
            filteredGoods.push(item)
        }
    })
    filteredGoods.forEach(item => {
    })
    return filteredGoods
}