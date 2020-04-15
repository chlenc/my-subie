import React from 'react'
import styled from '@emotion/styled'
import deleteIcon from '../../icons/DELETETAGICON.svg'
import Tag from './Tag'

interface IProps {
    selectedTags: string[]
    handleDeleteTag: (tag: string) => void
    handleDeleteAllTags: () => void
    handleAddTag: (tag: string) => void
}
interface IState {

}

export default class SortByTag extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Title>SORT BY #TAG</Title>
            <Line />
            <FirstSection>
                <Tag tag={'FRONT'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'REAR'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'SIDE'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'INTERIOR'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
            </FirstSection>
            <Line />
            <SecondSection>
                <Tag tag={'SEDAN'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'WAGON'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
            </SecondSection>
            <Line />
            <ThirdSection>
                <Tag tag={'HOT'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'RARE'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'EXTRARARE'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'BRANDNEW'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'DISCOUNTED'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'NEWARRIVALS'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
                <Tag tag={'BRANDED'} handleAddTag={this.props.handleAddTag} handleDeleteTag={this.props.handleDeleteTag} selectedTags={this.props.selectedTags} />
            </ThirdSection>
            <DeleteAllTags>
                <TextClearAll>CLEAR ALL</TextClearAll>
                <TagDeleteBtn onClick={() => this.props.handleDeleteAllTags()} />
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
margin-top: 10px;
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
position: relative;
display: flex;
align-items: center;
height: 100%;
right: 13px;
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

