import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../../icons/LEFTARROW.svg'
import rightArrow from '../../icons/RIGHTARROW.svg'
import {prod1, prod2, prod3, prod4, prod5} from './goods'
import ButtonShowMeMore from '../../icons/ShowMeMoreButton.svg'

const Root = styled.div`
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
    /* margin-right: 60px; */
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

const Title = styled.div `
width: 250px;
height: 35px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
`

export default class HotGoods extends React.Component {
    render() {
        const settings = {
            arrows: true,
            centerMode: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <Root>
                <Title>Featured parts</Title>
                <Slider {...settings}>
                    <RootProduct>
                        <Image1/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image2/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image3/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image4/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image5/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image1/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image2/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image3/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image4/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    <RootProduct>
                        <Image5/>
                        <ProductTitle>3GEN BH BE (99-04)</ProductTitle>
                        <Cost>$75</Cost>
                        <Label>JDM L7 GRILLE LEGACY 99-02 BH BE (PREFACE)</Label>
                    </RootProduct>
                    
                </Slider>
                <Button>SHOW ME MORE</Button>
            </Root>
        );
    }
}

const RootProduct = styled.div `
width: 190px;
height: 282px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image1 = styled.div `
width: 190px;
height: 190px;
background-image: url(${prod1});
background-size: cover;
`
const Image2 = styled.div `
width: 190px;
height: 190px;
background-image: url(${prod2});
background-size: cover;
`
const Image3 = styled.div `
width: 190px;
height: 190px;
background-image: url(${prod3});
background-size: cover;
`
const Image4 = styled.div `
width: 190px;
height: 190px;
background-image: url(${prod4});
background-size: cover;
`
const Image5 = styled.div `
width: 190px;
height: 190px;
background-image: url(${prod5});
background-size: cover;
`

const ProductTitle = styled.div `
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

const Cost = styled.div `
width: 190px;
height: 16px;
margin-top: 8px;
font-family: 'GothamPro-Light';
/* font-style: normal; */
font-weight: 100;
/* поменять шрифт на light */

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
const Button= styled.div `
margin-top: 36px;
width: 190px;
height: 32px;
background-image: url(${ButtonShowMeMore});
background-size: cover;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
color: #000000;
padding: 0;
`

