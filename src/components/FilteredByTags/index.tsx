/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import deleteIcon from '../../icons/DELETETAGICON.svg'
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS, FRONT, INTERIOR, SEDAN, SIDE, WAGON, REAR, DISCOUNTED } from '../HotGoods/icons'
import { inject, observer } from 'mobx-react'
import { TagsStore } from '../../stores/TagsStore'


interface IProps {
    tagsStore: TagsStore
}

// @inject('tagsStore')
// @observer
export default class FilteredByTags extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Wrapper>
                <p>FILTERED BY #TAGS :</p>
                {this.props.tagsStore.selectedTags.map(tag => <Tag tag={tag} handleDeleteTag={this.props.tagsStore.deleteTag} selectedTags={this.props.tagsStore.selectedTags} />)}
            </Wrapper>
            <DeleteAllTags>
                <TextClearAll>CLEAR ALL</TextClearAll>
                <TagDeleteBtn onClick={() => this.props.tagsStore.deleteAllTags}/>
            </DeleteAllTags>
        </Root>
    }
}

const Root = styled.div`
position: relative;
width: 1070px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 10px;
border: 2px solid #9D998E;
text-align: left;
p{
    margin-left: 16px;
    padding-top: 2px;
    font-family: 'GothamPro-Medium';
    font-weight: bold;
    font-size: 20px;
    color: #9D998E;
}
`
const Wrapper = styled.div`
display: flex;
`
interface ITagProps {
    tag: string
    handleDeleteTag: (tag: string) => void
    selectedTags: string[]
}
class Tag extends React.Component<ITagProps, {}> {
    render() {
        const tag = this.props.tag
        return <TagRoot >
            <TagIcon tag={tag} />
            <TagTitle>{`#${this.props.tag}`}</TagTitle>
            <TagDeleteBtn onClick={() => this.props.handleDeleteTag(tag)} />
        </TagRoot>
    }
}

const TagRoot = styled.div`
display: flex;
align-items: center;
width: auto;
height: auto;
margin-left: 30px;
`
interface ITagIconProps {
    tag: string
}
const TagIcon: React.FC<ITagIconProps> = props => {
    const tag = props.tag
    return <IconWrapper src={tagIconsMap[tag]} />
}

const IconWrapper = styled.img`
width: 26px;
height: 26px;
`

const TagTitle = styled.div`
margin-left: 4px;
margin-top: 2px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
color: #000000;
`
const TagDeleteBtn = styled.div`
width: 14px;
height: 14px;
margin-left: 10px;
background-image: url(${deleteIcon});
cursor: pointer;
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
const tagIconsMap: { [key: string]: string } = {
    RARE: RARE,
    EXTRARARE: EXTRARARE,
    HOT: HOT,
    BRANDED: BRANDED,
    BRANDNEW: BRANDNEW,
    NEWARRIVALS: NEWARRIVALS,
    FRONT: FRONT,
    INTERIOR: INTERIOR,
    SEDAN: SEDAN,
    SIDE: SIDE,
    WAGON: WAGON,
    REAR: REAR,
    DISCOUNTED: DISCOUNTED
}