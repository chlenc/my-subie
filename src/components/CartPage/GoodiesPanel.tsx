import React from 'react'
import styled from '@emotion/styled'
import { inject, observer } from 'mobx-react'
import { BasketStore } from '../../stores/BasketStore'
import { IItem, DataStore } from '../../stores/DataStore'
import ItemCard from './ItemCard'

interface IProps {
    basketStore?: BasketStore
    dataStore?: DataStore
    items: IItem[]
}

@inject('dataStore','basketStore')
@observer
export default class GoodiesPanel extends React.Component<IProps, {}> {
    handleDelete = (id: string) => this.props.basketStore!.deleteItem(id)
    render() {
        return <Root>
            <Wrapper>
                <Title>GOODIES</Title>
                <Title>PRICE</Title>
            </Wrapper>
            {this.props.items.map((item, key) => <ItemCard key={key} item={item} handleDelete = {this.handleDelete}/>)}
        </Root>
    }
}

const Root = styled.div`
width: 504px;
margin-right: 111px;
display: flex;
flex-direction: column;
font-family: 'GothamPro-Medium';
@media(max-width: 1279px){
    width: 301px;
    margin-right: 44px;
}
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #9D998E;
`
const Title = styled.div`
margin-left: 10px;
margin-right: 30px;
font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #9D998E;
@media(max-width: 1279px){
    margin-right: 20px;
}
`