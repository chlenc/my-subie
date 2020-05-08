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
    isOpenLegacy: boolean
    isOpenImpreza: boolean
    isOpenForester: boolean
}

@inject('selectorsStore')
@observer
export default class SortByModelDesktop extends React.Component<IProps, IState> {
    state = {
        isOpenLegacy: false,
        isOpenImpreza: false,
        isOpenForester: false
    }
    toggleIsOpenLegacy() {
        this.state.isOpenImpreza && this.setState({ isOpenImpreza: false })
        this.state.isOpenForester && this.setState({ isOpenForester: false })
        const currentState = this.state.isOpenLegacy;
        this.setState({ isOpenLegacy: !currentState });
    }
    toggleIsOpenImpreza() {
        this.state.isOpenLegacy && this.setState({ isOpenLegacy: false })
        this.state.isOpenForester && this.setState({ isOpenForester: false })
        const currentState = this.state.isOpenImpreza;
        this.setState({ isOpenImpreza: !currentState });
    }
    toggleIsOpenForester() {
        this.state.isOpenLegacy && this.setState({ isOpenLegacy: false })
        this.state.isOpenImpreza && this.setState({ isOpenImpreza: false })
        const currentState = this.state.isOpenForester;
        this.setState({ isOpenForester: !currentState });
    }
    render() {

        return <Root>
            <Title onClick={() => this.props.selectorsStore!!.selectModelAndGen('', '')}>MODEL</Title>

            <Line />

            <Model>
                <Wrapper onClick={() => this.toggleIsOpenLegacy()}>
                    <ModelName>{'LEGACY'} <br /> {'& OUTBACK'}</ModelName>
                    <Arrow src={ARROW} className={this.state.isOpenLegacy ? 'activeArrow' : ''} />
                </Wrapper>
                <LegacyList isOpen={this.state.isOpenLegacy} selectModelAndGen={this.props.selectorsStore!!.selectModelAndGen} />
            </Model>

            <Model>
                <Wrapper onClick={() => this.toggleIsOpenImpreza()}>
                    <ModelName>IMPREZA</ModelName>
                    <Arrow src={ARROW} className={this.state.isOpenImpreza ? 'activeArrow' : ''} />
                </Wrapper>
                <ImprezaList isOpen={this.state.isOpenImpreza} selectModelAndGen={this.props.selectorsStore!!.selectModelAndGen} />
            </Model>

            <Model>
                <Wrapper onClick={() => this.toggleIsOpenForester()}>
                    <ModelName>FORESTER</ModelName>
                    <Arrow src={ARROW} className={this.state.isOpenForester ? 'activeArrow' : ''} />
                </Wrapper>
                <ForesterList isOpen={this.state.isOpenForester} selectModelAndGen={this.props.selectorsStore!!.selectModelAndGen} />
            </Model>

            <Model >
                <ModelName
                    css={css`width: 100%;`}
                    onClick={() => this.props.selectorsStore!!.selectModelAndGen('MISC', '')}
                >
                    MISC
                </ModelName>
            </Model>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
margin-top: 32px;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
.activeArrow{
    transform: rotate(180deg);
    transition: 0.5s;
}
.activeSelector{
    font-style: bold;
}
.inactiveModel{
    margin-top: 0px;
    max-height:0px;
    overflow:hidden;
    color: white;
    transition: all 500ms ease;
}
.activeModel{
    max-height: 300px;
    transition: all 350ms ease-in;
}
`
const Title = styled.div`
margin-top: 17px;
margin-bottom: 10px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #9D998E;
text-align: center;
cursor: pointer;
`
const Line = styled.div`
width: 169px;
margin-bottom: 20px;
height: 0px;
border: 1px solid #9D998E;
`
const Model = styled.div`
position: relative;
width: 81%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const ModelName = styled.div`
width: 90%;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #000000;
cursor: pointer;
`
const Arrow = styled.img`
cursor: pointer;
`
interface IListProps {
    isOpen: boolean
    selectModelAndGen: (model: string, gen: string) => null
}

const LegacyList: React.FC<IListProps> = props => {
    let styles = ''
    props.isOpen ? styles = 'activeModel' : styles = 'inactiveModel'
    return <RootList className={styles}>
        <Text onClick={() => props.selectModelAndGen('LEGACY', '2GEN (BG/BD/BK) 1993-1999')}>{'2GEN (BK BG BD)'}<br />{'1993-1999'}</Text>
        <Text onClick={() => props.selectModelAndGen('LEGACY', '3GEN (BH/BE) 1999-2004')}>{'3GEN (BH BE)'}<br />{'1999-2004'}</Text>
        <Text onClick={() => props.selectModelAndGen('LEGACY', '4GEN (BP/BL) 2003-2009')}>{'4GEN (BP BL)'}<br />{'2003-2009'}</Text>
        <Text onClick={() => props.selectModelAndGen('LEGACY', 'OTHER LEGACY & OB')} css={css`margin-bottom: 0px;`}>{'OTHER LEGACY & OB'}</Text>
    </RootList>
}

const ImprezaList: React.FC<IListProps> = props => {
    let styles = ''
    props.isOpen ? styles = 'activeModel' : styles = 'inactiveModel'
    return <RootList className={styles}>
        <Text onClick={() => props.selectModelAndGen('IMPREZA', 'MEANEYE (GC/GF/GM) 1992-2000')}>{'MEANEYE (GC GF GM)'}<br />{'1992-2000'}</Text>
        <Text onClick={() => props.selectModelAndGen('IMPREZA', 'BUGEYE (GD/GG) 2000-2004')}>{'BUGEYE (GD GG)'}<br />{'2000-2004'}</Text>
        <Text onClick={() => props.selectModelAndGen('IMPREZA', 'BLOBEYE (GD/GG) 2003-2005')}>{'BLOBEYE (GD GG)'}<br />{'2003-2005'}</Text>
        <Text onClick={() => props.selectModelAndGen('IMPREZA', 'OTHER IMPREZA')} css={css`margin-bottom: 0px;`}>{'OTHER IMPREZA'}</Text>
    </RootList>
}

const ForesterList: React.FC<IListProps> = props => {
    let styles = ''
    props.isOpen ? styles = 'activeModel' : styles = 'inactiveModel'
    return <RootList className={styles}>
        <Text onClick={() => props.selectModelAndGen('FORESTER', 'SF 1997-2002')} >{'SF'}<br />{'1997-2002'}</Text>
        <Text onClick={() => props.selectModelAndGen('FORESTER', 'SG 2002-2007')}>{'SG'}<br />{'2002-2007'}</Text>
        <Text onClick={() => props.selectModelAndGen('FORESTER', 'OTHER FORESTER')} css={css`margin-bottom: 0px;`}>{'OTHER FORESTER'}</Text>
    </RootList>
}

const RootList = styled.div`
margin-top: 20px;
border-left: 2px solid #9D998E;
color: #9D998E;
`
const Text = styled.div`
margin-left: 10px;
margin-bottom: 17px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 13px;
cursor: pointer;
`