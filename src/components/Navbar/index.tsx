import React from 'react'
import styled from '@emotion/styled'
import logoMain from '../../icons/logoMain.svg'
import search from '../../icons/search.svg'
import cart from '../../icons/CART.svg'

interface IProps {

}
interface IState {

}

const Root = styled.div `
width: 55.72917vw;
/* height: 7.29vw; */
margin: 0 22.135417vw;
display: flex;
flex-direction: row;
justify-content: center;
`

const Logo = styled.div `
width: 8.5937vw;
height: 4.21vw;
margin-top: calc((6.9vw - 4.21vw)/2);
background-image: url(${logoMain});
background-size: cover;
`

const Menu = styled.div `
width: auto;
height: 0.85vw;
display: flex;
flex-direction: row;
margin-left: 2.865vw;
margin-top: calc((7.29vw - 0.85vw)/2);
`

const Text = styled.div `
width: auto;
margin-left: 2.03125vw;
font-family: sans-serif;
font-weight: bold;
font-size: 0.85vw;
`

const Search = styled.div `
width: 4.427vw;
height: 1.4583vw;
margin-left: 2.03125vw;
margin-top: 2.917vw;
background-image: url(${search});
background-size: cover;
`

const Cart = styled.div `
width: 3.75vw;
height: 2.083vw;
margin-left: 1.0937vw;
margin-top: 2.5vw;
background-image: url(${cart});
`
export default class Navbar extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <Logo/>
            <Menu>
                <Text>PARTS</Text>
                <Text>SHIPPING</Text>
                <Text>JDM GUIDE</Text>
                <Text>FEEDBACK</Text>
                <Text>CONTACT US</Text>
            </Menu>
                <Search/>
                <Cart/>
        </Root>
    }
}