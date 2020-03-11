import React from 'react'
import styled from '@emotion/styled'

interface IProps {
    imageURL: string
    header: string
    text: JSX.Element
    tags: string
}

interface IState {
}


export default class ReasonsContent extends React.Component<IProps, IState> {
    render() {
        const Image = styled.div`
        width: 110px;
        height: 110px;
        background-image: url(${this.props.imageURL});
        background-size: cover;
        `
        return <Root>
            <Image />
            <TextContainer>
                <Header>{this.props.header}</Header>
                <Text> <br/> {this.props.text}</Text>
                <Tags> <br/> {this.props.tags} </Tags>
            </TextContainer>
        </Root>
    }
}

const Root = styled.div`
width: 50%;
height: 50%;
display: flex;
flex-direction: row;
justify-content: flex-start;
`
const TextContainer = styled.div`
width: 234px;
margin-left: 21px;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Header = styled.div`
height: 17px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 17px;
text-align: center;
color: #000000;
`
const Text = styled.div`
width: 219px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 11px;
color: #000000;
`
const Tags = styled.div`
width: 219px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 11px;
color: #000000;
`