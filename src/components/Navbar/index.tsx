/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import logoMain from '../../icons/Navbar/logoMain.svg'
import search from '../../icons/Navbar/search.svg'
import search768 from '../../icons/Navbar/SEARCH768.svg'
import cart from '../../icons/Navbar/CART.svg'
import { useWindowDimensions } from '../../utils/dimensions'
import IG from '../../icons/Footer/IG.svg'
import FB from '../../icons/Footer/FB.svg'

interface IProps {
}
interface IState {
    isOpen: boolean
}

const Layout = styled.div`
@media (max-width: 769px) {
    position: fixed;left: 0; top:0; bottom: 0;right: 0;
    background-color: rgba(0,0,0,.6);
    z-index:4;
}
`

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleCloseMenu = () => setIsOpen(false)
    const handleOpenMenu = () => setIsOpen(true)

    const { width } = useWindowDimensions();

    return <Root>
        <Body>
            <div css={css`@media (max-width: 768px){margin-left: 15px; margin-top: 15px;}`}>
                <OpenMenuBtn onClick={handleOpenMenu} />
            </div>
            <Logo href='/'/>
            {(width > 768 || isOpen) && <Layout>
                <div css={css`display: none; @media (max-width: 768px){ display: flex; justify-content: flex-end; margin-top: 12px; margin-right: 15.35px;}`}>
                    <CloseBtn onClick={handleCloseMenu} />
                </div>
                <Menu>
                    <Text css={css`@media (max-width: 768px) { border-top: 2px solid #9D998E;}`}>PARTS</Text>
                    <Text>SHIPPING</Text>
                    <Text>JDM GUIDE</Text>
                    <Text>FEEDBACK</Text>
                    <Text>CONTACT US</Text>
                    <SocialNetworks>
                        <NetworkIcon style={{ backgroundImage: `url(${IG})` }} />
                        <NetworkIcon style={{ backgroundImage: `url(${FB})` }} />
                    </SocialNetworks>
                </Menu>
            </Layout>}
            <Search />
            <Cart />
        </Body>
    </Root>
}

export default Navbar

const CloseBtn: React.FunctionComponent<{ onClick?: () => void }> = ({ onClick }) =>
    <svg onClick={onClick} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="33.2341" width="2" height="47" transform="rotate(45 33.2341 0)" fill="white" />
        <rect x="34.6482" y="33.2354" width="2" height="47" transform="rotate(135 34.6482 33.2354)" fill="white" />
    </svg>


const OpenMenuBtnRoot = styled.svg`
    @media (min-width: 769px) {
        display: none;
    }
`

const OpenMenuBtn: React.FunctionComponent<{ onClick?: () => void }> = ({ onClick }) =>
    <OpenMenuBtnRoot onClick={onClick} width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.008 36V27.6H3L5.208 31.152L7.416 27.6H9.408V36H7.572V30.516L5.208 34.104H5.16L2.82 30.552V36H1.008ZM11.426 36V27.6H17.762V29.244H13.262V30.948H17.222V32.592H13.262V34.356H17.822V36H11.426ZM19.465 36V27.6H21.169L25.105 32.772V27.6H26.929V36H25.357L21.289 30.66V36H19.465ZM32.4495 36.132C31.3055 36.132 30.4135 35.816 29.7735 35.184C29.1335 34.544 28.8135 33.616 28.8135 32.4V27.6H30.6615V32.352C30.6615 33.024 30.8175 33.54 31.1295 33.9C31.4495 34.252 31.8975 34.428 32.4735 34.428C33.0495 34.428 33.4935 34.256 33.8055 33.912C34.1255 33.568 34.2855 33.068 34.2855 32.412V27.6H36.1335V32.34C36.1335 33.588 35.8055 34.532 35.1495 35.172C34.5015 35.812 33.6015 36.132 32.4495 36.132Z" fill="black" />
        <rect x="9" width="27" height="2" fill="black" />
        <rect x="1" width="4" height="2" fill="black" />
        <rect x="9" y="10" width="27" height="2" fill="black" />
        <rect x="1" y="10" width="4" height="2" fill="black" />
        <rect x="9" y="20" width="27" height="2" fill="black" />
        <rect x="1" y="20" width="4" height="2" fill="black" />
    </OpenMenuBtnRoot>



const Root = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const Body = styled.div`
height: 140px;
width: 1070px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width: 1280px) {
    height: 100px;
    width: 768px;
}
@media (max-width: 768px) {
    height: 82px;
    width: 375px;
    justify-content: space-between;
}
`

const Logo = styled.a`
width: 165px;
height: 81px;
background-image: url(${logoMain});
background-size: cover;
margin-top: -1.4%;
@media (max-width: 1280px) {
    height: 40px;
    width: 81px;
}
@media (max-width: 768px){
    width: 118px;
    height: 59px;
}
`

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 637px;
margin-left: 55px;
@media (max-width: 1280px) {
    width: 455px;
    margin-left: 15px;
}
@media (max-width: 768px) {
    width:50vw;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 0;
    background-color: #fff;
    z-index:5;
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
@media (max-width: 1280px){
    font-size: 14px;
    line-height: 13px;
}
@media (max-width: 768px){
    width: calc(100% - 15px);
    height: 44px;
    border-bottom: 2px solid #9D998E;
    padding-left: 15px;
}
`

const Search = styled.div`
background-size: cover;
width: 85px;
height: 28px;
margin-left: 35px;
background-image: url(${search});
@media (max-width: 1280px){
    background-image: url(${search768});
    margin-left: 13px;
    height: 36px;
    width: 36px;
}
@media (max-width: 768px){
    background-image: url(${search768});
    margin-left: 0px;
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
@media (max-width: 1280px) {
    margin-left: 18px;
    height: 40px;
    width: 72px;
}
@media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0;
    margin-right: 15px;
}
`
const SocialNetworks = styled.div`
width: 100%;;
height: 74px;
display: flex;
align-items: center;
@media (min-width: 768px){
    display: none;
}
`

const NetworkIcon = styled.div`
width: 44px;
height: 44px;
margin-left: 15px;
background-size: cover;
`