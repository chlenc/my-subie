import React from 'react'
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import SortByTag from '../SortByTag'
import FilteredByTags from '../FilteredByTags';
import { observable } from 'mobx';

interface IProps {

}
interface IState {
    selectedTags: string[]
}

export default class MainPage extends React.Component<IProps, IState> {
    state = {
        selectedTags: ['RARE', 'HOT', 'WAGON']
    }
    handleDeleteTag = (tag: string) => this.setState({ selectedTags: deleteTag(tag, this.state.selectedTags) })
    handleDeleteAllTags = () => this.setState({ selectedTags: [] })
    handleAddTag = (tag: string) => {
        if (this.state.selectedTags.indexOf(tag) == -1) {
            this.setState({ selectedTags: this.state.selectedTags.concat(tag) })
        }
    }

    render() {
        return <Root>
            <FilteredByTags selectedTags={this.state.selectedTags} handleDeleteTag={this.handleDeleteTag} handleDeleteAllTags={this.handleDeleteAllTags} />
            <SortByTag selectedTags={this.state.selectedTags} handleAddTag={this.handleAddTag} handleDeleteTag={this.handleDeleteTag} handleDeleteAllTags={this.handleDeleteAllTags} />
        </Root>
    }
}

const Root = styled.div`
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