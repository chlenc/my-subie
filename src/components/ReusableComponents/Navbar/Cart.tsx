/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import cart from '../../../icons/Navbar/CART.svg'
import { BasketStore, IBasketItems } from '../../../stores/BasketStore'
import { inject, observer } from 'mobx-react'

interface IProps {
    basketStore?: BasketStore
}

@inject('basketStore')
@observer
export default class Cart extends React.Component<IProps> {
    render() {
        const count = this.props.basketStore?.basketItems
            .reduce((acc: number, item: IBasketItems) => acc += item.count, 0)
        return <Root>
            <Link to='/cart' css={css`text-decoration: none;`}>
                <Wrapper>
                    <Counter>
                        {count}
                    </Counter>
                </Wrapper>
            </Link>
        </Root>
    }
}

const Root = styled.div`

`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 72px;
height: 40px;
/* margin-left: 21px; */
margin-top: -5px;
background-image: url(${cart});
background-size: cover;
z-index: 2;
cursor: pointer;
@media (max-width: 1069px) {
    margin-left: 13px;
    height: 40px;
    width: 72px;
}
@media (max-width: 767px) {
    margin-top: 5px;
    margin-left: 0;
    margin-right: 0;
}
`
const Counter = styled.div`
margin-top: -15px;
padding: 1.5px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 17px;
color: #CF4B4B;
background-color: white;
border-radius: 50% 50% 50% 50%;
`