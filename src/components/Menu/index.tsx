import React from 'react'
import styled from '@emotion/styled'
import car1 from '../../images/car1.png'
import car2 from '../../images/car2.png'
import car3 from '../../images/car3.png'
import car4 from '../../images/car4.png'
import car5 from '../../images/car5.png'
import car6 from '../../images/car6.png'

const Root = styled.div`
width: 100%;
height: 253px;
margin-top: 80px;
display: flex;
flex-direction: row;
font-family: 'GothamPro-Black';
font-weight: bold;
-webkit-text-stroke-width: 1.5px;
-webkit-text-stroke-color: #424242;
backdrop-filter: blur(10px);
font-size: 21px;
`

const Content1 = styled.div`
width: 410px;
height: 253px;
background-image: url(${car1});
background-size: cover;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Text1 = styled.div `
color: #FFFFFF;
text-align: center;
`
const Content2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 630px;
height: 253px;
margin-left: 30px;
`

const Content3 = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`

const Car2 = styled.div`
width: 190px;
height: 117px;
background-image: url(${car2});
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Car3 = styled.div`
width: 190px;
height: 117px;
background-image: url(${car3});
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Car4 = styled.div`
width: 190px;
height: 117px;
background-image: url(${car4});
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Content4 = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
`
const Car5 = styled.div`
width: 300px;
height: 115px;
background-image: url(${car5});display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
const Car6 = styled.div`
width: 300px;
height: 115px;
background-image: url(${car6});display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
export default class Menu extends React.Component {
    render() {
        return <Root>
            <Content1>
                <Text1>SHOW ALL PARTS</Text1>
            </Content1>
            <Content2>
                <Content3>
                    <Car2><Text1>FRONT END <br/> PARTS</Text1></Car2>
                    <Car3><Text1>REAR END <br/> PARTS</Text1></Car3>
                    <Car4><Text1>MERCH</Text1></Car4>
                </Content3>
                <Content4>
                    <Car5><Text1>INTERIOR PARTS</Text1></Car5>
                    <Car6><Text1>SIDE PARTS</Text1></Car6>
                </Content4>
            </Content2>
        </Root>
    }

}