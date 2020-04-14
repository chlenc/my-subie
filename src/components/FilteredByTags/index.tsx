/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import deleteIcon from '../../icons/DELETETAGICON.svg'
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS, FRONT, INTERIOR, SEDAN, SIDE, WAGON, REAR, DISCOUNTED } from '../HotGoods/icons'

interface IProps {
    tags: string[]
    handleDeleteTag: (tag: string, tagsArray: string[]) => void
}
interface IState {

}


export default class FilteredByTags extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <p>FILTERED BY #TAGS :</p>
            {this.props.tags.map(tag => <Tag tag={tag} handleDeleteTag={this.props.handleDeleteTag} tagsArray={this.props.tags}/>)}
        </Root>
    }
}

const Root = styled.div`
width: 1070px;
height: 50px;
display: flex;
align-items: center;
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

interface ITagProps {
    tag: string
    handleDeleteTag: (tag: string, tagsArray: string[]) => void
    tagsArray: string[]
}
class Tag extends React.Component<ITagProps, {}> {
    render() {
        const tag = this.props.tag
        return <TagRoot>
            <TagIcon tag={tag} />
            <TagTitle>{`#${this.props.tag}`}</TagTitle>
            <TagDeleteBtn onClick={() => this.props.handleDeleteTag(tag, this.props.tagsArray)} />
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