import React from 'react'
import styled from '@emotion/styled'

interface IProps {
    imageURL: string
    nickname: string
    login: string
}

export default class CustomCar extends React.Component<IProps> {
    render() {
        return <Root>
            <Image style={{ backgroundImage: `url(${this.props.imageURL})` }} />
            <Nickname>{this.props.nickname}</Nickname>
            <Login>{this.props.login}</Login>
        </Root>
    }
}

const Root = styled.div`
width: 190px;
height: 200px;
margin-top: 26px;
display: flex;
flex-direction: column;
align-items: flex-end;
`
const Image = styled.div`
background-size: cover;
width: 190px;
height: 158px;
`
const Nickname = styled.div`
margin-top: 11px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
`
const Login = styled.div`
margin-top: 8px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
`