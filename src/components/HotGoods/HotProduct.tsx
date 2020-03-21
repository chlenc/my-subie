import React from 'react'
import styled from '@emotion/styled'

interface IProps {
    imageURL: string
    title: string
    cost: string
    label: string
}

export default class HotProduct extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Image style={{ backgroundImage: "url(" + this.props.imageURL + ")" }} />
            <ProductTitle>{this.props.title}</ProductTitle>
            <Cost>{this.props.cost}</Cost>
            <Label>{this.props.label}</Label>
        </Root>
    }
}

const Root = styled.div`
width: 190px;
height: 282px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image = styled.div`
width: 190px;
height: 190px;
background-size: cover;
`
const ProductTitle = styled.div`
width: 190px;
height: 10px;
font-family: Jura, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
text-align: center;
color: #9D998E;
`
const Cost = styled.div`
width: 190px;
height: 16px;
margin-top: 8px;
font-family: 'GothamPro-Light';
font-weight: 100;
font-size: 18px;
line-height: 17px;
text-align: center;
color: #214C73;
`
const Label = styled.div `
width: 190px;
height: 39px;
margin-top: 12px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 13px;
text-align: center;
color: #000000;
`
