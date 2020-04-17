import React from 'react'
import styled from '@emotion/styled'
import goShopButton from '../../icons/HotGoods/goShopButton.svg'
import Product from './Product'
import { IItem } from '../../stores/DataStore'

interface IProps {
    goods: Array<IItem>
}

export default class HotGoods extends React.Component<IProps, {}>{
    render() {
        return <Root>
            <Body>
                <Title>Featured parts</Title>
                {this.props.goods.map(good => <Product good={good}/>)}
            </Body>
        </Root>
    }
}



const Root = styled.div`
width: 100%;
z-index: 0;
display: flex;
flex-direction: row;
justify-content: space-around;
background: #FAFAFA;
@media screen and (max-width: 768px){
    background: #FAFAFA;
}
`
const Body = styled.div`
flex-wrap: wrap;
justify-content: center;
margin-top: 93px; 
width: 1070px;
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 768px){
    margin-top: 26px; 
    width: 375px;
}
`
const Title = styled.div`
width: 250px;
height: 35px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
@media screen and (max-width: 768px){
    height: 23px;
    margin-bottom: 22px;
    font-weight: normal;
    font-size: 24px;
}
`
const Button = styled.div`
width: 190px;
height: 64px;
background-image: url(${goShopButton});
background-size: cover;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
color: #000000;
padding: 0;
margin-bottom: 44px;
border-radius: 20px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`