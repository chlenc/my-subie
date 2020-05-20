/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

interface IProps {

}

export default class Calculator extends React.Component {
    render () {
        return <Root>
            <Title>SHIP TO</Title>
        </Root>
    }
}

const Root = styled.div`
width: 410px;
height: 447px;
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