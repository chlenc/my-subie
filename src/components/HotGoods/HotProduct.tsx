/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { IItem } from '../../stores/DataStore'
import NOPICYET from '../../icons/HotGoods/NOPICYET.svg'
import { RARE, EXTRARARE, HOT, BRANDED, BRANDNEW, NEWARRIVALS } from './icons'

interface IProps {
    good: IItem
}

export default class HotProduct extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Image good={this.props.good} />
            <TagsIcon tags={this.props.good.tags} />
            <Gen>{this.props.good.gen}</Gen>
            <Cost cost={this.props.good.price} lastCost={this.props.good.oldPrice} />
            <AddButton>Add to cart</AddButton>
            <Title>{this.props.good.title}</Title>

        </Root>
    }
}


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
}

const Image: React.FC<IImageProps> = (props) => {
    const Root = styled.div`
    width: 190px;
    height: 190px;
    background-size: cover;
    @media screen and (max-width: 768px){
        width: 162px;
        height: 162px;
    }`
    const imageURLs = props.good.attachments
    return (imageURLs === undefined)
        ? <Root css={css` background-image: url(${NOPICYET}); background-size: cover;`} />
        : <Root css={css` background-image: url(${props.good.attachments![0]}); background-size: contain; background-repeat: no-repeat; background-position: center;`} />
}

interface ITagsProps {
    tags: string[]
}

const TagsIcon: React.FC<ITagsProps> = (props) => {
    const tags = props.tags
    const Root = styled.div`
    width: 26px;
    height: 26px;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    right: 12px;
    top: 12px;
    `
    // console.log(typeof(tags))
    if (tags.toString().includes('EXTRARARE')) {
        return <Root css={css`background-image: url(${EXTRARARE});`} />
    } else if (tags.toString().includes('RARE')) {
        console.log('RARE')
        return <Root css={css`background-image: url(${RARE});`} />
    } else if (tags.toString().includes('HOT')) {
        return <Root css={css`background-image: url(${HOT});`} />
    } else if (tags.toString().includes('BRANDED')) {
        return <Root css={css`background-image: url(${BRANDED});`} />
    } else if (tags.toString().includes('NEWARRIVALS')) {
        return <Root css={css`background-image: url(${NEWARRIVALS});`} />
    } else if (tags.toString().includes('BRANDNEW')) {
        return <Root css={css`background-image: url(${BRANDNEW});`} />
    } else return <Root css={css`background-image: url(${RARE});`} />
}
const Root = styled.div`
position: relative;
width: 190px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 40px;
@media screen and (max-width: 768px){
    width: 50%;
}
`

const Gen = styled.div`
width: 190px;
height: 10px;
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
`