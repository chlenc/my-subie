/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import deleteIcon from '../../icons/DELETETAGICONBLACK.svg'
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS, FRONT, INTERIOR, SEDAN, SIDE, WAGON, REAR, DISCOUNTED } from '../HotGoods/icons'


interface ITagProps {
    tag: string
    handleDeleteTag: (tag: string) => void
    handleAddTag: (tag: string) => void
    selectedTags: string[]
}

export default class Tag extends React.Component<ITagProps, {}> {
    render() {
        let classNameTagRoot: string = '';
        let classNameDltBtn: string = '';
        if (this.props.selectedTags.indexOf(this.props.tag) != -1) {
            classNameTagRoot += 'tagSelected'
            classNameDltBtn = classNameDltBtn
        } else {
            classNameTagRoot = classNameTagRoot
            classNameDltBtn += 'tagNotSelected'
        }

        return <Wrapper>
            <TagRoot className={classNameTagRoot}>
                <TagSubRoot>
                    <TagIcon tag={this.props.tag} />
                    <TagTitle onClick={() => this.props.handleAddTag(this.props.tag)}>
                        {`#${this.props.tag}`}
                    </TagTitle>
                </TagSubRoot>
                <TagDeleteBtn className={classNameDltBtn} onClick={() => this.props.handleDeleteTag(this.props.tag)} />
            </TagRoot>
        </Wrapper>
    }
}

const Wrapper = styled.div`
margin-top: 10px;
.tagSelected{
    height: 22px;
    border: 2px solid black;
    border-start-start-radius: 12.5px;
    border-end-start-radius: 12.5px;
}
.tagNotSelected{
    display: none;
}
`
const TagRoot = styled.div`
width: calc(100% - 19px);
height: 26px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px 0;
margin-left: 17px;
@media (max-width: 1023px){
    margin-left: 0px;
}
`
const TagSubRoot = styled.div`
display: flex;
align-items: center;
`
interface ITagIconProps {
    tag: string
}
const TagIcon: React.FC<ITagIconProps> = props => {
    const tag = props.tag
    return <IconWrapper src={tagIconsMap[tag]} />
}
const IconWrapper = styled.img`
width: 26.5px;
height: 26.5px;
margin-left: -2px;
border-radius: 50%;
cursor: pointer;
z-index: 1000;
`


const TagTitle = styled.div`
margin-left: 5px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 13px;
color: #000000;
cursor: pointer;
user-select: none;
`

const TagDeleteBtn = styled.div`
width: 14px;
height: 14px;
margin-left: 10px;
margin-top: -2px;
margin-right: 5px;
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