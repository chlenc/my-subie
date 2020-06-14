import React from 'react'
import styled from '@emotion/styled'
import FinalInvoice from './FinalInvoice'
import { IItem } from '../../../../stores/DataStore'
import ItemCard from '../../Step1/ItemCard'

interface IProps {
    goods: IItem[]
    country: string
}

interface IState {
    country: string
}

export default class Calculator extends React.Component<IProps, IState> {
    handleChangeCountry = (country: string) => this.setState({ country });
    render() {

        const { country } = this.props;
        return <Root>
                <Title>YOUR ORDER</Title>
                {this.props.goods.map((item, key) => <ItemCard key={key} item={item} />)}
                <FinalInvoice country={country}/>
        </Root>
    }
}

const Root = styled.div`
width: 410px;
padding: 19px 25px 24px 25px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: #FAFAFA;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 20px;
font-family: 'GothamPro-Medium';
@media (max-width: 1279px){
    width: 345px;
}
`
const Title = styled.div`
display: flex;
justify-content: flex-start;
font-weight: bold;
font-size: 24px;
color: #000000;
`
