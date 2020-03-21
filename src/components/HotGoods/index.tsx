import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import leftArrow from '../../icons/LEFTARROW.svg'
import rightArrow from '../../icons/RIGHTARROW.svg'
import { prod1, prod2, prod3, prod4, prod5 } from './goods'
import ButtonShowMeMore from '../../icons/ShowMeMoreButton.svg'
import HotProduct from './HotProduct'

export default class HotGoods extends React.Component {
    render() {
        return <Root>
            <Body>
                <Title>Featured parts</Title>
                <Slider
                    centerMode={false}
                    dots={false}
                    slidesToShow={5}
                    slidesToScroll={5}
                    infinite
                    arrows
                >
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
                </Slider>
                <Button>SHOW ME MORE</Button>
            </Body>
        </Root>
    }
}


const Root = styled.div`
max-height: 500px;
width: 100%;
z-index: 0;
display: flex;
flex-direction: row;
justify-content: center;
background: #FAFAFA;
width: 100%;
`

const Body = styled.div`
margin-top: 93px; 
width: 1070px;
display: flex;
flex-direction: column;
align-items: center;
.slick-slider {
    width: 1070px;
    display: flex;
}
.slick-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.slick-prev {
    left: -86px;
    width: 66px;
    height: 66px;
    background-image: url(${leftArrow});
    background-size: cover;
}
.slick-next {
    right: -86px;
    width: 66px;
    height: 66px;
    background-image: url(${rightArrow})
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

