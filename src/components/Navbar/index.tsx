import React from 'react'
import styled from '@emotion/styled'
import logoMain from '../../icons/Navbar/logoMain.svg'
import search from '../../icons/Navbar/search.svg'
import search768 from '../../icons/Navbar/SEARCH768.svg'
import cart from '../../icons/Navbar/CART.svg'
import '../../vars'

interface IProps {
}
interface IState {
}

export default class Navbar extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <Body>
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
            </Body>
        </Root>
    }
}

const Root = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Body = styled.div`
min-height: 140px;
width: 1070px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media screen and (max-width: 1024px) {
    height: 100px;
    width: 768px;
}
`

const Logo = styled.div`
width: 165px;
height: 81px;
background-image: url(${logoMain});
background-size: cover;
margin-top: -1.4%;
@media screen and (max-width: 1024px) {
    height: 40px;
    width: 81px;
}
`

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
    width: 637px;
    margin-left: 55px;
/* margin-left: 5.14%; */
/* margin-top: 4px; */
@media  screen and (max-width: 1024px) {
    margin-left: 15px;
    width: 455px;
}
`

const Text = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: auto;
font-family: 'GothamPro-Black';
font-weight: bold;
    font-size: 18px;
    line-height: 17px;
@media screen and (max-width: 1024px){
    font-size: 14px;
    line-height: 13px;
}
`

const Search = styled.div`
background-size: cover;
width: 85px;
height: 28px;
margin-left: 35px;
background-image: url(${search});
@media  screen and (max-width: 1024px){
    background-image: url(${search768});
    margin-left: 13px;
    height: 36px;
    width: 36px;
}
`

const Cart = styled.div`
width: 72px;
height: 40px;
margin-left: 21px;
margin-top: -5px;
background-image: url(${cart});
background-size: cover;
z-index: 2;
@media  screen and (max-width: 1024px) {
    margin-left: 18px;
    height: 40px;
    width: 72px;
}
`