/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import SortByTag from '../SortByTag'
import FilteredByTags from '../FilteredByTags'
import FilteredGoods from '../FilteredGoods'
import { IItem, DataStore } from '../../stores/DataStore'
import { inject, observer } from 'mobx-react'
import ReactLoaderSpinner from 'react-loader-spinner'
import { animateScroll as scroll } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'
import { TagsStore } from '../../stores/TagsStore'
const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
    tagsStore: TagsStore
}


@inject('dataStore', 'tagsStore')
@observer
export default class MainPage extends React.Component<IProps, {}> {
    handleDeleteTag = (tag: string) => this.props.tagsStore.deleteTag(tag)

    handleDeleteAllTags = () => this.props.tagsStore.deleteAllTags()

    handleAddTag = (tag: string) => this.props.tagsStore.addTag(tag)

    scrollToTop() { scroll.scrollToTop() }

    render() {
        const goods = Object.values(this.props.dataStore!.goods);
        let selectedTags: string[] = this.props.tagsStore.selectedTags
        return goods && goods.length
            ? <Root>
                <FilteredByTags tagsStore={this.props.tagsStore} />
                <div css={css`display: flex; justify-content: space-between;`}>
                    <SortByTag tagsStore={this.props.tagsStore} />
                    <FilteredGoods goods={filter(goods, selectedTags)} />
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

function filter(goods: IItem[], selectedTags: string[]) {
    const filteredGoods: IItem[] = []
    const N = selectedTags.length
    console.log('N=', N)

    goods.forEach(item => {
        let count = 0
        for (let i = 0; i < N; i++) {
            if (item.tags.indexOf(`#${selectedTags[i]}`) != -1) {
                count += 1
            }
        }
        if (count == N) {
            filteredGoods.push(item)
        }
    })
    filteredGoods.forEach(item => {
        console.log('tags=', item.tags.toString())
    })
    return filteredGoods
}