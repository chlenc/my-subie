/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import NOPICYET from '../../icons/HotGoods/NOPICYET.svg'
import HistoryStore from '../../stores/HistoryStore'
import { IItem } from '../../stores/DataStore'
import { Link } from 'react-router-dom'
import DELETE from '../../icons/CartPage/DELETE.svg'

interface IItemProps {
    item: IItem
    handleDelete: (id: string) => void
}

const ItemCard: React.FC<IItemProps> = props => {
    return <Root>
        <Image good={props.item} />
        <Text>{props.item.title}</Text>
        <Cost cost={props.item.price} lastCost={props.item.oldPrice} />
        <DeleteIcon src={DELETE} onClick={() => props.handleDelete(props.item.id!)} />
    </Root>
}


const Root = styled.div`
width: 100%;
display: flex;
align-items: center;
margin-top: 16px;
margin-bottom: 16px;
`

const Text = styled.div`
width: 190px;
margin-right: 30px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 13px;
display: flex;
align-items: center;
color: #000000;

@media(max-width: 1279px){
    width: 122px;
    margin-right: 0;
}
`

interface IImageProps {
    good: IItem
    historyStore?: HistoryStore
}

const Image = ({ good: { id, attachments } }: IImageProps) => <Link to={`/product/${id}`}>
    <RootImage
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

const RootImage = styled.div`
width: 100px;
height: 100px;
margin-right: 75px;
@media(max-width: 1279px){
    width: 87.3px;
    height: 87.3px;
    margin-right: 10px;
}
background-size: cover;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`

const imageStyle = css`
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

interface ICostProps {
    cost: number
    lastCost?: number
}

const Cost: React.FC<ICostProps> = (props) => {
    const { cost, lastCost } = props
    return (lastCost !== undefined)
        ? <CostWrapper>
            <p className='lastCost'>{`$${lastCost}`}</p>
            <p className='newCost'>{`$${cost}`}</p>
        </CostWrapper>
        : <CostWrapper>
            <p className='cost'>{`$${cost}`}</p>
        </CostWrapper>
}

const CostWrapper = styled.div`
width: 190px;
display: flex;
flex-direction: row;
justify-content: center;
font-family: 'GothamPro-Light';
font-weight: 100;
font-size: 18px;
line-height: 17px;
width: 95px;
@media(max-width: 1279px){
    width: 80px;
}
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

const DeleteIcon = styled.img`
width: 12.22px;
height: 12.22px;
cursor: pointer;
`
export default ItemCard