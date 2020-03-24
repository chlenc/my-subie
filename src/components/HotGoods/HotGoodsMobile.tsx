import React from 'react'
import styled from '@emotion/styled'
import { prod1, prod2, prod3, prod4, prod5 } from './goods'
import ButtonShowMeMore from '../../icons/ShowMeMoreButton.svg'
import HotProduct from './HotProduct'

export default class HotGoods extends React.Component {
    render() {
        return <Root>
            <Body>
                <HotProduct imageURL={prod1} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod2} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod3} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod4} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod5} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod1} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod2} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod3} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod4} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
                <HotProduct imageURL={prod5} title="3GEN BH BE (99-04)" cost="$75" label="JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)" />
            </Body>
                <Button>SHOW ME MORE</Button>
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
`
const Button = styled.div`
width: 190px;
height: 32px;
background-image: url(${ButtonShowMeMore});
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
box-shadow: 5px;
`