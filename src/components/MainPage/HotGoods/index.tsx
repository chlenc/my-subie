import React from 'react'
import styled from '@emotion/styled'
import { inject, observer } from 'mobx-react'
import { IItem, DataStore } from '../../../stores/DataStore'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'
import leftArrow from '../../../icons/LEFTARROW.svg'
import rightArrow from '../../../icons/RIGHTARROW.svg'
import Product from './Product'

interface IProps {
    dataStore?: DataStore
}

@inject('dataStore')
@observer
export default class HotGoods extends React.Component<IProps> {
    render() {
        const goods = Object.values(this.props.dataStore!.goods)
        const hotGoods = randomGoods(goods)
        const screenWidth = window.innerWidth
        return goods && goods.length
            ? <Root>
                <Body>
                    <Title>Featured parts</Title>
                    {screenWidth < 768
                        ? <Wrapper>
                            {hotGoods.map(good => <Product good={good} />)}
                        </Wrapper>
                        : <Slider
                            centerMode={false}
                            dots={false}
                            slidesToShow={screenWidth < 1280 && screenWidth > 768 ? 3 : 5}
                            slidesToScroll={10}
                            infinite
                            arrows
                        >
                            {hotGoods && hotGoods.map(good => <Product good={good} />)}
                        </Slider>}
                    <Button>SHOW ME MORE</Button>
                </Body>
            </Root>
            : <WrapperLoader>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </WrapperLoader>
    }

}
function randomGoods(goods: IItem[]) {
    const hotGoods: IItem[] = []
    const filteredGoods = goods.filter(({ tags }) => tags.indexOf('#DISCOUNTED' || '#UNDER100') === -1 && !!tags[tags.length - 1])
    const N = filteredGoods.length
    let rand: number = 0
    while (hotGoods.length < 10) {
        rand = Math.floor(Math.random() * N)
        hotGoods.push(filteredGoods[rand])
    }
    return hotGoods
}
const WrapperLoader = styled.div`
margin: 17% auto;
`

const Root = styled.div`
width: 100%;
z-index: 0;
display: flex;
flex-direction: row;
justify-content: center;
background: #FAFAFA;
@media screen and (max-width: 767px){
    background: #FAFAFA;
    padding-top: 20px;
}
`

const Body = styled.div`
margin-top: 93px; 
width: 1070px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media(max-width: 767px){
    margin-top: 40px;
}
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

const Wrapper = styled.div`
flex-wrap: wrap;
justify-content: center;
margin-top: 93px; 
width: 1070px;
display: flex;
flex-direction: row;
align-items: center;
@media screen and (max-width: 767px){
    margin-top: 26px; 
    width: 92vw;
    >div{
        margin: 10px 15px;
    }
}`

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
@media(max-width: 767px){
    margin-top: 40px;
    margin-bottom: 32px;
}
`

