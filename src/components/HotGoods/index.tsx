import React from 'react'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Div = styled.div` 
width: 1070px;
`

export default class HotGoods extends React.Component {
    render() {
        const settings = {
            arrows: true,
            centerMode: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <Div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>

                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    <div>
                        <h3>10</h3>
                    </div>
                </Slider>
            </Div>
        );
    }
}