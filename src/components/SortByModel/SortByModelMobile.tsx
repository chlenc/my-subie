/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import ARROW from '../../icons/LEFTARROW_mini.svg'
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
        isOpen: false,
    }
    handleClose = () => this.setState({ isOpen: false })
    handleOpen = () => this.setState({ isOpen: true })

    render() {
        return <Root>
            <Button onClick={() => this.handleOpen()}>
                MODEL
            </Button>
            {this.state.isOpen
                ? <div>
                    <Layout onClick={() => this.handleClose()} />
                    <Menu handleClose={this.handleClose} />
                </div>
                : <Layout css={css`display: none;`} />}

        </Root>
    }
}

const Root = styled.div`
width: 48%;
font-family: 'GothamPro-Medium';
`
const Button = styled.div`
height: 44px;
padding-top: 3px;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 20px;
line-height: 19px;
text-align: center;
color: #000000;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 10px;
cursor: pointer;
`
const CloseButton = styled.div`
width: 91.30434783%;
height: 30px;
margin-top: 15px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
background: #FFAE00;
border-radius: 29px;
font-size: 20px;
line-height: 19px;
text-align: center;
cursor: pointer;
p {
    margin: 3px 15px 0 15px;

}
`



const Layout = styled.div`
display: flex;
justify-content: center;
position: fixed;
left: 0; top:0; bottom: 0;right: 0;
background-color: rgba(0,0,0,.6);
z-index:4;
cursor: pointer;
`

interface IPropsMenu {
    handleClose: () => void,
    selectorsStore?: SelectorsStore
}

@inject('selectorsStore')
@observer
class Menu extends React.Component<IPropsMenu, {}> {
    render() {
        return <RootMenu>
            <CloseButton onClick={() => this.props.handleClose()}>
                <img src={ARROW} />
                <p>CLOSE MODELS</p>
                <img src={ARROW} />
            </CloseButton>


            <Model>
                <ModelName onClick={() => this.props.selectorsStore!.selectModelAndGen('LEGACY', '')}>
                    {'LEGACY'} <br /> {'& OUTBACK'}
                </ModelName>
                <GensList>
                    {/* <form> */}
                        <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('LEGACY', '2GEN (BG/BD/BK) 1993-1999')}>{'2GEN (BK BG BD)'}<br />{'1993-1999'}</Gen>
                        <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('LEGACY', '3GEN (BH/BE) 1999-2004')}>{'3GEN (BH BE)'}<br />{'1999-2004'}</Gen>
                        <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('LEGACY', '4GEN (BP/BL) 2003-2009')}>{'4GEN (BP BL)'}<br />{'2003-2009'}</Gen>
                        <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('LEGACY', 'OTHER LEGACY & OB')} css={css`margin-bottom: 0px;`}>{'OTHER LEGACY & OB'}</Gen>
                        {/* <label css={css`:checked{color: red; transition: .5s;}`}>
                            <GenInput type='radio' value='value' name='name' id='id' checked/>
                            blablabla
                        </label> */}
                    {/* </form> */}
                </GensList>

            </Model>
            <Model>
                <ModelName onClick={() => this.props.selectorsStore!.selectModelAndGen('IMPREZA', '')}>
                    {'IMPREZA'}
                </ModelName>
                <GensList>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('IMPREZA', 'MEANEYE (GC/GF/GM) 1992-2000')}>{'MEANEYE (GC GF GM)'}<br />{'1992-2000'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('IMPREZA', 'BUGEYE (GD/GG) 2000-2004')}>{'BUGEYE (GD GG)'}<br />{'2000-2004'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('IMPREZA', 'BLOBEYE (GD/GG) 2003-2005')}>{'BLOBEYE (GD GG)'}<br />{'2003-2005'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('IMPREZA', 'OTHER IMPREZA')} css={css`margin-bottom: 0px;`}>{'OTHER IMPREZA'}</Gen>

                </GensList>
            </Model>
            <Model>
                <ModelName onClick={() => this.props.selectorsStore!.selectModelAndGen('FORESTER', '')}>
                    {'FORESTER'}
                </ModelName>
                <GensList>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('FORESTER', 'SF 1997-2002')} >{'SF'}<br />{'1997-2002'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('FORESTER', 'SG 2002-2007')}>{'SG'}<br />{'2002-2007'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('FORESTER', 'OTHER FORESTER')} css={css`margin-bottom: 0px;`}>{'OTHER FORESTER'}</Gen>
                </GensList>
            </Model>
            <Model css={css`margin-bottom: 50px;`}>
                <ModelName onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', '')} >
                    {'MERCH'}
                </ModelName>
                <GensList>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', 'STICKERS')}>{'STICKERS'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', 'SHIRTS')}>{'SHIRTS'}</Gen>
                    <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', 'POSTERS')}>{'POSTERS'}</Gen>
                </GensList>
            </Model>
            <Model>
                <ModelName>
                    {'MISC'}
                    <GensList onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', '')}>
                        <Gen onClick={() => this.props.selectorsStore!.selectModelAndGen('MERCH', 'OTHER STUFF')}>{' OTHER STUFF '}</Gen>
                    </GensList>
                </ModelName>
            </Model>
            <Model>
                <ModelName onClick={() => this.props.selectorsStore!.selectModelAndGen('', '')}>
                    {'SHOW ALL'}
                </ModelName>
            </Model>
        </RootMenu>
    }
}
const RootMenu = styled.div`
position: fixed;
background: #FAFAFA;
z-index: 5;
display: flex;
justify-content: center;
flex-wrap: wrap;
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

const Model = styled.div`
display: flex;
justify-content: column;
align-items: flex-start;
justify-content: flex-start;
display: flex;
flex-direction: column;
@media (max-width: 1279px){
    width: calc(33.33% - 30px);
    margin-bottom: 30px;
    padding-left: 30px;
}
@media (max-width: 767px){
    margin-bottom: 30px;
    width: calc(50% - 15px);
    padding-left: 15px;
}
`
const ModelName = styled.div`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #000000;
cursor: pointer;
`
const GensList = styled.div`
margin-top: 15px;
border-left: 2px solid #9D998E;
display: flex;
flex-direction: column;
align-items: flex-start;
> div:nth-child(1) {
    margin-top: 0;
}
`
const Gen = styled.div`
margin-left: 10px;
margin-top: 17px;
font-size: 14px;
line-height: 13px;
color: #9D998E;
cursor: pointer;
`

const GenInput = styled.input`
/* display: none; */
:checked{color: red; transition: .5s;}
`