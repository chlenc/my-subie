import React from 'react'
import styled from '@emotion/styled'
import Navbar from '../Navbar'
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
    handleDeleteTag = (tag: string, tagsArray: string[]) => this.setState({selectedTags: deleteTag(tag, tagsArray)})
    render () {
        return <Root>
            <FilteredByTags tags={this.state.selectedTags} handleDeleteTag={this.handleDeleteTag}/>
        </Root>
    }
}

const Root = styled.div `
`
function deleteTag(word: string, wordsArr: string[]){
    const N = wordsArr.length
    const newArr: string[]  = []
    for(let i=0; i<=(N - 1); i++){
        if (wordsArr[i] !== word) {
            newArr.push(wordsArr[i])
        }
    }
    return newArr
}