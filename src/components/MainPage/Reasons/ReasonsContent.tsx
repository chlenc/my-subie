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

        return <Root>
            <Image style={{ backgroundImage: `url(${this.props.imageURL})` }} />
            <TextContainer>
                <Header>{this.props.header}</Header>
                <Text> <br /> {this.props.text}</Text>
                <Tags> <br /> {this.props.tags} </Tags>
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
@media (max-width: 767px) {
    width: 375px;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 10px;
}
`

const Image = styled.div`
width: 110px;
height: 110px;
background-size: cover;
@media (max-width: 767px) {
    width: 50px;
    height: 50px;
}
`
const TextContainer = styled.div`
width: 234px;
margin-left: 21px;
display: flex;
flex-direction: column;
align-items: flex-start;
@media (max-width: 767px) {
    width: 70%;
}
`
const Header = styled.div`
height: 17px;
font-family: 'GothamPro-Medium';
font-weight: 900;
font-size: 18px;
line-height: 17px;
text-align: center;
@media screen and (max-width: 767px) {
    width: auto;
    height: auto;
    font-size: 24px;
    line-height: 23px;
    text-align: left;
}
`
const Text = styled.div`
width: 219px;
font-family: 'GothamPro-Medium';
font-weight: normal;
font-size: 12px;
line-height: 11px;
color: #000000;
@media screen and (max-width: 767px) {
    width: auto;
    height: auto;
    font-size: 14px;
    line-height: 13px;
}

`
const Tags = styled.div`
width: 219px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
color: #000000;
`

