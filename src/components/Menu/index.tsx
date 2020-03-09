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
font-size: 18px;
line-height: 17px;
color: #FFFFFF;
font-weight: bolder;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: #424242;
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
`
const Car3 = styled.div`
width: 190px;
height: 117px;
background-image: url(${car3});
`
const Car4 = styled.div`
width: 190px;
height: 117px;
background-image: url(${car4});
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
background-image: url(${car5});
`
const Car6 = styled.div`
width: 300px;
height: 115px;
background-image: url(${car6});
`
export default class Menu extends React.Component {
    render() {
        return <Root>
            <Content1>
                <Text1>SHOW ALL PARTS</Text1>
            </Content1>
            <Content2>
                <Content3>
                    <Car2 />
                    <Car3 />
                    <Car4 />
                </Content3>
                <Content4>
                    <Car5 />
                    <Car6 />
                </Content4>
            </Content2>
        </Root>
    }

}