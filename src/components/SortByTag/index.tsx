import React from 'react'
import styled from '@emotion/styled'
import deleteIcon from '../../icons/DELETETAGICON.svg'
import Tag from './Tag'
import { inject, observer } from 'mobx-react'
import { SelectorsStore } from '../../stores/SelectorsStore'


interface IProps {
    selectorsStore: SelectorsStore
}

export default class SortByTag extends React.Component<IProps, {}> {
    render() {
        let selectedTags: string[] = this.props.selectorsStore.selectedTags
        return <Root>
            <Title>SORT BY #TAG</Title>
            <Line />
            <FirstSection>
                {['FRONT', 'REAR', 'SIDE', 'INTERIOR'].map((tag, key) =>
                    <Tag
                        tag={tag} key={key}
                        handleAddTag={this.props.selectorsStore.addTag}
                        handleDeleteTag={this.props.selectorsStore.deleteTag}
                        selectedTags={selectedTags}
                    />
                )}
            </FirstSection>
            <Line />
            <SecondSection>
                <Tag tag={'SEDAN'} handleAddTag={this.props.selectorsStore.addTag} handleDeleteTag={this.props.selectorsStore.deleteTag} selectedTags={this.props.selectorsStore.selectedTags} />
                <Tag tag={'WAGON'} handleAddTag={this.props.selectorsStore.addTag} handleDeleteTag={this.props.selectorsStore.deleteTag} selectedTags={this.props.selectorsStore.selectedTags} />
            </SecondSection>
            <Line />
            <ThirdSection>
                {['HOT', 'RARE', 'EXTRARARE', 'BRANDNEW', 'DISCOUNTED', 'NEWARRIVALS', 'BRANDED'].map((tag, key) =>
                    <Tag
                        tag={tag} key={key}
                        handleAddTag={this.props.selectorsStore.addTag}
                        handleDeleteTag={this.props.selectorsStore.deleteTag}
                        selectedTags={this.props.selectorsStore.selectedTags}
                    />
                )}
            </ThirdSection>
            <DeleteAllTags>
                <TextClearAll>CLEAR ALL</TextClearAll>
                <TagDeleteBtn onClick={() => this.props.selectorsStore.deleteAllTags()} />
            </DeleteAllTags>
        </Root>
    }
}

const Root = styled.div`
width: 205px;
height: 586px;
margin-top: 40px;
border: 2px solid #9D998E;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
margin-top: 12px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
text-align: center;
color: #9D998E;
`
const Line = styled.div`
width: 169px;
height: 0px;
border: 1px solid #9D998E;
`
const FirstSection = styled.div`
width: 100%;
`
const SecondSection = styled.div`
width: 100%;
`
const ThirdSection = styled.div`
width: 100%;
`

const DeleteAllTags = styled.div`
display: flex;
align-items: center;
height: 100%;
right: 10px;
`
const TextClearAll = styled.div`
font-family: inherit;
font-weight: bold;
margin-top: 2px;
font-size: 14px;
display: flex;
align-items: center;
color: #9D998E;
`
const TagDeleteBtn = styled.div`
width: 14px;
height: 14px;
margin-left: 10px;
margin-top: -2px;
background-image: url(${deleteIcon});
cursor: pointer;
`

