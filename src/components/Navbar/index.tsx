import React from 'react'
import styled from '@emotion/styled'
import logoMain from '../../icons/logoMain.svg'
import search from '../../icons/search.svg'
import cart from '../../icons/CART.svg'
import { mainPadding } from '../../vars'

interface IProps {
}
interface IState {
}

const Root = styled.div`
min-height: 140px;
width: 100%;
min-width: 1070px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: 1px solid red;
`

const Logo = styled.div`
width: 165px;
height: 81px;
background-image: url(${logoMain});
background-size: cover;
margin-top: -1.4%;
`

const Menu = styled.div`
width: 59.5%;
min-width: 637px;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-left: 5.14%;
margin-top: 4px;
`

const Text = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: auto;
margin-left: 3.644%;
/* font-family: 'GothamProBlack'; */
font-weight: bold;
`

const Search = styled.div`
width: 85px;
height: 28px;
margin-left: 2.03125vw;
background-image: url(${search});
background-size: cover;
`

const Cart = styled.div`
position: sticky;
width: 72px;
height: 40px;
left: 92%;
top: 50px;
background-image: url(${cart});
z-index: 2;
`
export default class Navbar extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <Logo />
            <Menu>
                <Text>PARTS</Text>
                <Text>SHIPPING</Text>
                <Text>JDM GUIDE</Text>
                <Text>FEEDBACK</Text>
                <Text>CONTACT US</Text>
            </Menu>
            <Search />
            <Cart />
        </Root>
    }
}