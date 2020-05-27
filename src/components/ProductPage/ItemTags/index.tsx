import React from 'react';
import styled from '@emotion/styled'
import { IItem } from '../../../stores/DataStore';
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS, FRONT, INTERIOR, SEDAN, SIDE, WAGON, REAR, DISCOUNTED } from '../../MainPage/HotGoods/icons'

interface IProps {
    tags: string[];
}

export default class ItemTags extends React.Component<IProps, {}> {
    render() {
        const tags = this.props.tags
        let index = tags.indexOf('#UNDER100');
        if (index > -1) {
            tags.splice(index, 1);
        }
        index = tags.indexOf('#BYMYSUBIE');
        if (index > -1) {
            tags.splice(index, 1);
        }
        console.log(this.props.tags)
        return <Root>
            <Title>ITEM TAGS:</Title>
            <Tags>
                {tags.map(tag => <TagIcon src={tagIconsMap[tag]} />)}
            </Tags>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Title = styled.div`
width: auto;
text-align: left;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #9D998E;
`
const Tags = styled.div`
margin-top: 4px;
display: flex;
justify-content: flex-start;
`
const TagIcon = styled.img`
margin-right: 10px;
width: 26px;
height: 26px;
`
const tagIconsMap: { [key: string]: string } = {
    '#RARE': RARE,
    '#EXTRARARE': EXTRARARE,
    '#HOT': HOT,
    '#BRANDED': BRANDED,
    '#BRANDNEW': BRANDNEW,
    '#NEWARRIVALS': NEWARRIVALS,
    '#FRONT': FRONT,
    '#INTERIOR': INTERIOR,
    '#SEDAN': SEDAN,
    '#SIDE': SIDE,
    '#WAGON': WAGON,
    '#REAR': REAR,
    '#DISCOUNTED': DISCOUNTED
}