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
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import GOHEADERBUTTON from '../../icons/GOHEADERBUTTON.svg'
const Loader = () => <div css={css` margin: 17% auto; `}>
    <ReactLoaderSpinner type="TailSpin" color="#00BFFF" height={100} width={100} />
</div>

interface IProps {
    dataStore?: DataStore
}
interface IState {
    selectedTags: string[]
}

@inject('dataStore')
@observer
export default class MainPage extends React.Component<IProps, IState> {
    state: IState = { selectedTags: [] }

    handleDeleteTag = (tag: string) => this.setState({ selectedTags: deleteTag(tag, this.state.selectedTags) })

    handleDeleteAllTags = () => this.setState({ selectedTags: [] })

    handleAddTag = (tag: string) => this.state.selectedTags.indexOf(tag) == -1 &&
        this.setState({ selectedTags: this.state.selectedTags.concat(tag) })

    scrollToTop() {
        scroll.scrollToTop();
    }
    render() {
        const goods = Object.values(this.props.dataStore!.goods);
        const { selectedTags } = this.state

        return goods && goods.length
            ? <Root>
                <FilteredByTags selectedTags={selectedTags}
                    handleDeleteTag={this.handleDeleteTag}
                    handleDeleteAllTags={this.handleDeleteAllTags}
                />
                <div css={css`display: flex; justify-content: space-between;`}>
                    <SortByTag selectedTags={selectedTags}
                        handleAddTag={this.handleAddTag}
                        handleDeleteTag={this.handleDeleteTag}
                        handleDeleteAllTags={this.handleDeleteAllTags}
                    />
                    <FilteredGoods goods={filter(goods, selectedTags)} />
                </div>
                <GoTopButton src={GOHEADERBUTTON} onClick={this.scrollToTop}/>
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
function deleteTag(word: string, wordsArr: string[]) {
    const N = wordsArr.length
    const newArr: string[] = []
    for (let i = 0; i <= (N - 1); i++) {
        if (wordsArr[i] !== word) {
            newArr.push(wordsArr[i])
        }
    }
    return newArr
}

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