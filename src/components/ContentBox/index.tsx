import React from 'react'
import styled from '@emotion/styled'
import bg from '../../images/Slider01.png'
import buttonbg from '../../icons/BUTTONSHOPNOW.svg'

const Root = styled.div `
width: 100%;
max-width: 1070px;
height: 320px;
/* border: 1px solid green; */
background-image: url(${bg});
background-size: cover;
display: flex;
flex-direction: row;
justify-content: left;

`
const Content = styled.div `
height: auto;
width: 375px;
margin-left: 134px;
display: flex;
flex-direction: column;
align-items: center;
`
const Text1 = styled.div `
margin-top: 95px;
font-size: 20px;
font-family: sans-serif;
font-weight: bold;
color: white;
`
const Text2 = styled.div `
margin-top: 8px;
font-size: 32px;
font-family: sans-serif;
font-weight: bold;
line-height: 45px;
color: white;
`

const Button = styled.div `
width: 172px;
height: 44px;
background-image: url(${buttonbg});
background-size: cover;
margin-left: 200px;
`
export default class ContentBox extends React.Component {
    render () {
        return <Root>
            <Content>
                <Text1>WELCOME TO MYSUBIE-PARTS.COM</Text1>
                <Text2>WE SHIP JDM PARTS<br/> AROUND THE WORLD.</Text2>
                <Button></Button>
            </Content>
        </Root>
    }
}