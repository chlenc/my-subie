/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import logoMain from '../../../icons/Navbar/logoMain.svg'
import SearchIcon from '../../../icons/Navbar/SearchIcon.svg'
import IG from '../../../icons/Footer/IG.svg'
import FB from '../../../icons/Footer/FB.svg'
import { inject, observer } from 'mobx-react'
import { useWindowDimensions } from '../../../utils/dimensions'
import Cart from './Cart'

interface IProps {
    searchValue: string
    onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Navbar: React.FC<IProps> = inject('basketStore')(observer(
    ({ searchValue, onChangeSearchValue }) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [searchIsOpen, setSearchIsOpen] = React.useState(false);

        const handleOpenMenu = () => setIsOpen(true)
        const handleCloseMenu = () => setIsOpen(false)
        const handleOpenSearch = () => setSearchIsOpen(true)
        const handleCloseSearch = (event: any) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (searchIsOpen && !(path.some((element: any) => element.dataset && element.dataset.owner === 'search'))) {
                setSearchIsOpen(false)
            }
        };
        React.useEffect(() => {
            document.addEventListener('mousedown', handleCloseSearch)
            return () => document.removeEventListener('mousedown', handleCloseSearch);
        })

        const { width } = useWindowDimensions();
        let searchClass: string = 'closeSearchPanel';
        searchClass = searchIsOpen ? 'openSearchPanel' : 'closeSearchPanel';

        return <Root>
            <Body >
                <WrapperOpenMenuButton>
                    <OpenMenuBtn onClick={handleOpenMenu} />
                </WrapperOpenMenuButton>
                <Logo href='/' />
                {(width > 767 || isOpen) && <Layout>
                    <CloseBtn onClick={handleCloseMenu} />
                    <Menu onClick={handleCloseSearch}>
                        <Text css={css`@media (max-width: 767px) { border-top: 2px solid #9D998E;}`} href='/products'>PARTS</Text>
                        <Text href='/'>SHIPPING</Text>
                        <Text href='/'>JDM GUIDE</Text>
                        <Text href='/'>FEEDBACK</Text>
                        <Text href='/'>CONTACT US</Text>
                        <SocialNetworks>
                            <NetworkIcon style={{ backgroundImage: `url(${IG})` }} />
                            <NetworkIcon style={{ backgroundImage: `url(${FB})` }} />
                        </SocialNetworks>
                    </Menu>
                </Layout>}
                <LittleCrutch />
                <Search className={searchClass} onClick={handleOpenSearch} data-owner='search'>
                    <img src={SearchIcon} alt="" />
                    <SearchInput value={searchValue} onChange={onChangeSearchValue} type='text' placeholder='Search' />
                </Search>
            </Body>
            <Cart />
        </Root>
    }))

export default Navbar


const OpenMenuBtnRoot = styled.svg`
@media (min-width: 768px) {
    display: none;
}
cursor: pointer;
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
background: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Body = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media (min-width: 1070px){
    height: 140px;
    width: 998px;
    justify-content: center !important;
}
@media (max-width: 1069px) {
    height: 100px;
    width: 605px;
    justify-content: center;
}
@media (max-width: 767px) {
    height: 82px;
    width: calc(92vw - 72px);;
    justify-content: space-between;
}
.openSearchPanel{
    width: 770px;
    > input {
        ::placeholder{
            font-size: 17px;
        }
    }
    @media (max-width: 1069px) {
        width: 520px;
        border-radius: 20px;
        display: flex;
        justify-content: flex-start;
        > img {
            width: 10%;
            height: 60%;
        }
    }
    @media (max-width: 767px){
        width: 200px;
    }
    > input {
        ::placeholder{
            font-size: 17px;
            color: #9D998E;
        }
    }
}
.closeSearchPanel{
    @media(max-width: 1069px){
        > input {
            display: none;
        }
    }
}
`

const CloseBtn: React.FunctionComponent<{ onClick?: () => void }> = ({ onClick }) =>
    <RootCloseBtn>
        <svg onClick={onClick} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="33.2341" width="2" height="47" transform="rotate(45 33.2341 0)" fill="white" />
            <rect x="34.6482" y="33.2354" width="2" height="47" transform="rotate(135 34.6482 33.2354)" fill="white" />
        </svg>
    </RootCloseBtn>

const RootCloseBtn = styled.div`
display: none; 
@media (max-width: 767px){
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    margin-right: 15.35px;
}`

const WrapperOpenMenuButton = styled.div`
@media (max-width: 767px){
    margin-left: 0px;
    margin-top: 15px;
}
`

const Layout = styled.div`
height: 100%;
@media (max-width: 767px) {
    position: fixed;
    left: 0; top:0; bottom: 0;right: 0;
    background-color: rgba(0,0,0,.6);
    z-index:5;
}
`

const Logo = styled.a`
width: 165px;
height: 81px;
background-image: url(${logoMain});
background-size: cover;
margin-top: -1.4%;
margin-left: -50px;
@media (max-width: 1069px) {
    height: 40px;
    width: 81px;
    margin-left: -20px;
}
@media (max-width: 767px){
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
height: 100%;
margin-left: 55px;
@media (max-width: 1069px) {
    width: 455px;
    margin-left: 15px;
}
@media (max-width: 767px) {
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
    z-index:6;
}
`

const Text = styled.a`
display: flex;
flex-direction: row;
align-items: center;
width: auto;
font-family: 'GothamPro-Black';
font-weight: bold;
font-size: 18px;
line-height: 17px;
cursor: pointer;
user-select: none;
text-decoration: none;
color: black;
@media (max-width: 1069px){
    font-size: 14px;
    line-height: 13px;
}
@media (max-width: 767px){
    width: calc(100% - 15px);
    height: 44px;
    border-bottom: 2px solid #9D998E;
    padding-left: 15px;
}
`

const LittleCrutch = styled.div`
width: 85px;
@media(max-width: 1069px){
    width: 36px;
}
`

const Search = styled.div`
position: absolute;
display: flex;
align-items: center;
transition: 0.3s;
z-index: 4;
background: #FFFFFF;
cursor: pointer;
transition: all 500ms;
@media(min-width: 1070px){
    right: 20px;
    top: 52px;
    width: 85px;
    height: 32px;
    padding-left: 7px;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 20px;
}
@media (max-width: 1069px){
    top: 30px;
    right: 0px;
    width: 36px;
    height: 36px;
    justify-content: center;
    margin-left: 16px;
    background: #FAFAFA;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
    > img {
        width: 60%;
        height: 60%;
    }
}
@media (max-width: 767px){
    top: 25px;
    width: 36px;
    height: 36px;
    margin-left: 0px;
    right: 6vw;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 50%;
}
`

const SearchInput = styled.input`
width: 63.94117647%;
height: 80%;
margin-top: -1px;
border: none;
font-weight: normal;
font-size: 14px;
line-height: 13px;
background: #FAFAFA;
font-size: 17px;
text-overflow:ellipsis;
::placeholder{
    border: none;
    font-size: 15px;
    color: #9D998E;
}
`

const SocialNetworks = styled.div`
width: 100%;
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
