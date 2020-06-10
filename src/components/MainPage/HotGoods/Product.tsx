/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../../stores/DataStore'
import NOPICYET from '../../../icons/HotGoods/NOPICYET.svg'
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS, FRONT, INTERIOR, SEDAN, SIDE, WAGON, REAR, DISCOUNTED } from './icons'
import { BasketStore } from '../../../stores/BasketStore'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import HistoryStore from '../../../stores/HistoryStore'

interface IProps {
    good: IItem
    basketStore?: BasketStore
}

@inject('basketStore')
@observer
export default class Product extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Image good={this.props.good} />
            <TagsIcon tags={this.props.good.tags} />
            <Gen>{this.props.good.gen}</Gen>
            <Cost cost={this.props.good.price} lastCost={this.props.good.oldPrice} />
            <AddButton onClick={() => {
                this.props.basketStore!.increaseItem(this.props.good.id!, this.props.good.price!)
            }}>
                Add to cart
            </AddButton>
            <Title>{this.props.good.title}</Title>
        </Root>
    }
}

const Root = styled.div`
position: relative;
width: 190px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 40px;
@media screen and (max-width: 767px){
    max-width: 162px;
}
`

interface ICostProps {
    cost: number
    lastCost?: number
}

const Cost: React.FC<ICostProps> = (props) => {
    const { cost, lastCost } = props
    return (lastCost !== undefined)
        ? (<CostWrapper>
            <p className='lastCost'>{`$${lastCost}`}</p>
            <p className='newCost'>{`$${cost}`}</p>
        </CostWrapper>)
        : (<CostWrapper>
            <p className='cost'>{`$${cost}`}</p>
        </CostWrapper>
        )
}

interface IImageProps {
    good: IItem
    historyStore?: HistoryStore
}

const ImageRoot = styled.div`
width: 190px;
height: 190px;
background-size: cover;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
@media screen and (max-width: 767px){
    width: 162px;
    height: 162px;
}`

const imageStyle = css`
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;


const Image = ({ good: { id, attachments } }: IImageProps) => <Link to={`/product/${id}`}>
    <ImageRoot
        css={attachments && attachments.length > 0
            ? css` 
                background-image: url(${attachments[0]});
                ${imageStyle};`
            : css` 
                background-image: url(${NOPICYET}); 
                background-size: cover;`
        }
    />
</Link>



interface ITagsProps {
    tags: string[]
}

const TagsIcon: React.FC<ITagsProps> = (props) => {

    const Root = styled.img`
    width: 26px;
    height: 26px;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    right: 12px;
    top: 12px;
    @media screen and (max-width: 767px){
        right: 9px;
        top: 9px;
    }
    `
    const tags = props.tags
    let index = tags.indexOf('#UNDER100');
    if (index > -1) {
        tags.splice(index, 1);
    }
    index = tags.indexOf('#BYMYSUBIE');
    if (index > -1) {
        tags.splice(index, 1);
    }

    const lastTag = tags[tags.length - 1]
    return lastTag && lastTag.length
        ? <Root src={tagIconsMap[lastTag!]} />
        : null
}

const Gen = styled.div`
width: 190px;
height: 10px;
margin-top: 7px;
font-family: 'GothamPro-Medium';
font-weight: 600;
font-size: 10px;
line-height: 12px;
text-align: center;
color: #9D998E;
`
const CostWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 190px;
margin-top: 8px;
font-family: 'GothamPro-Light';
font-weight: 100;
font-size: 18px;
line-height: 17px;
.cost {
    margin: 0;
    color: #214C73;
}
.lastCost {
    width: 45px;
    text-align: right;
    margin: 0;
    margin-left: -60px;
    margin-right: 7px;
    text-decoration: line-through;
    color: #214C73;
}
.newCost {
    text-align: center;
    width: 45px;
    margin: 0;
    color: #CF4B4B;
}
`
const Title = styled.div`
width: 190px;
height: 39px;
margin-top: 12px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 13px;
text-align: center;
color: #000000;
@media screen and (max-width: 767px){
    width: 162px;
}
`
const AddButton = styled.div`
width: 101.64px;
height: 25.67px;
margin-top: 5px;
margin-bottom: -5px;
background: #FFAE00;
border-radius: 54px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'GothamPro-Medium';
font-weight: 900;
font-size: 10px;
line-height: 10px;
text-align: center;
cursor: pointer;
transition: 0.2s;
:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7)
}
`

const tagIconsMap: { [key: string]: string } = {
    "#RARE": RARE,
    "#EXTRARARE": EXTRARARE,
    "#HOT": HOT,
    "#BRANDED": BRANDED,
    "#BRANDNEW": BRANDNEW,
    "#NEWARRIVALS": NEWARRIVALS,
    "#FRONT": FRONT,
    "#INTERIOR": INTERIOR,
    "#SEDAN": SEDAN,
    "#SIDE": SIDE,
    "#WAGON": WAGON,
    "#REAR": REAR,
    "#DISCOUNTED": DISCOUNTED
}