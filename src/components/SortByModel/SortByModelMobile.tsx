/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import ARROW from '../../icons/ARROW.svg'
import { SelectorsStore } from '../../stores/SelectorsStore'
import { inject, observer } from 'mobx-react'

interface IProps {
    selectorsStore?: SelectorsStore
}
interface IState {
    isOpen: boolean
}

@inject('selectorsStore')
@observer
export default class SortByModelMobile extends React.Component<IProps, IState> {
    state = {
        isOpen: true,
    }
    render() {
        return <Root>
            {/* {this.state.isOpen ? <Layout /> : <Layout css={css`display: none;`} />} */}
            {/* <Button>MODEL</Button> */}
            <Menu></Menu>
        </Root>
    }
}

const Root = styled.div`

`
const Button = styled.div`
height: 44px;
width: 48%;
display: flex;
align-items: center;
justify-content: center;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
line-height: 19px;
text-align: center;
color: #000000;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 10px;
`
const Menu = styled.div`
position: fixed;
background: #FAFAFA;
z-index: 5;
@media (max-width: 1279px){
    width: 92vw;
    border-radius: 10px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.6);
    border: 2px solid #9D998E;
    top: 188px;
}
@media (max-width: 767px){
    width: 100vw;
    top: 0;
    left: 0;

}

`
const Layout = styled.div`
position: fixed;
left: 0; top:0; bottom: 0;right: 0;
background-color: rgba(0,0,0,.6);
z-index:4;
`