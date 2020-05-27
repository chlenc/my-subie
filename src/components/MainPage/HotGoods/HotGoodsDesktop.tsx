import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import leftArrow from '../../../icons/LEFTARROW.svg'
import rightArrow from '../../../icons/RIGHTARROW.svg'
import Product from './Product'
import { useWindowDimensions } from '../../../utils/dimensions'
import { IItem } from '../../../stores/DataStore'

interface IProps {
    goods: IItem[]
}


const HotGoods: React.FC<IProps> = (props) => {
    const { width } = useWindowDimensions();
    let amount: number = 5;
    width > 1279 ? amount = 5 : amount = 3;
    return <Root>
        <Body>
            <Title>Featured parts</Title>
            <Slider
                centerMode={false}
                dots={false}
                slidesToShow={amount}
                slidesToScroll={amount}
                infinite
                arrows
            >
                {props.goods.map(good => <Product good={good} />)}
            </Slider>
            <Button>SHOW ME MORE</Button>
        </Body>
    </Root>
}
export default HotGoods

const Root = styled.div`
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
justify-content: space-between;
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
    background-image: url(${rightArrow});
    background-size: cover;
}
@media (max-width: 1279px){
    width: 768px;
    height: auto;
    .slick-slider {
    width: 630px;
    display: flex;
    .slick-prev {
        top: 95px;
        left: -40px;
        width: 46px;
        height: 46px;
    }   
    .slick-next {
        top: 95px;
        right: -40px;
        width: 46px;
        height: 46px;
        background-image: url(${rightArrow});
        background-size: cover;
    }
}
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
margin-bottom: 44px;
padding-top: 4px;
background: #FFAE00;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 17px;
text-align: center;
border-radius: 20px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
cursor: pointer;
`

