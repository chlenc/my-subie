/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import ARROW from '../../icons/ARROW.svg'
import { SelectorsStore } from '../../stores/SelectorsStore'

interface IProps {
    selectorsStore: SelectorsStore
}
interface IState {
    isOpenLegacy: boolean
    isOpenImpreza: boolean
    isOpenForester: boolean
}


export default class SortByModel extends React.Component<IProps, IState> {
    state = {
        isOpenLegacy: false,
        isOpenImpreza: false,
        isOpenForester: false
    }
    toggleIsOpenLegacy() {
        const currentState = this.state.isOpenLegacy;
        this.setState({ isOpenLegacy: !currentState });
    }
    toggleIsOpenImpreza() {
        const currentState = this.state.isOpenImpreza;
        this.setState({ isOpenImpreza: !currentState });
    }
    toggleIsOpenForester() {
        const currentState = this.state.isOpenForester;
        this.setState({ isOpenForester: !currentState });
    }
    render() {
        return <Root>
            <Title onClick={() => this.props.selectorsStore.selectModelAndGen('', '')}>MODEL</Title>
            <Line />
            <Legacy>
                <Wrapper>
                    <ModelName>{'LEGACY'} <br /> {'& OUTBACK'}</ModelName>
                    <Arrow src={ARROW} onClick={() => this.toggleIsOpenLegacy()} />
                </Wrapper>
                <LegacyList isOpen={this.state.isOpenLegacy} selectModelAndGen={this.props.selectorsStore.selectModelAndGen} />
            </Legacy>

            <Impreza>
                <Wrapper>
                    <ModelName>IMPREZA</ModelName>
                    <Arrow src={ARROW} onClick={() => this.toggleIsOpenImpreza()} />
                </Wrapper>
                <ImprezaList isOpen={this.state.isOpenImpreza} selectModelAndGen={this.props.selectorsStore.selectModelAndGen} />
            </Impreza>

            <Forester>
                <Wrapper>
                    <ModelName>FORESTER</ModelName>
                    <Arrow src={ARROW} onClick={() => this.toggleIsOpenForester()} />
                </Wrapper>
                <ForesterList isOpen={this.state.isOpenForester} selectModelAndGen={this.props.selectorsStore.selectModelAndGen} />
            </Forester>
            <Forester>
                <ModelName>MISC</ModelName>
            </Forester>
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
const Legacy = styled.div`
width: 81%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`

const Impreza = styled.div`
width: 81%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`
const Forester = styled.div`
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
:hover {
    transform: rotate(180deg);
    transition: 0.5s;
}
`
interface IListProps {
    isOpen: boolean
    selectModelAndGen: (model: string, gen: string) => null
}

const LegacyList: React.FC<IListProps> = props => {
    return props.isOpen
        ? <RootList>
            <Text onClick={() => props.selectModelAndGen('LEGACY', '2GEN')}>{'2GEN (BK BG BD)'}<br />{'1993-1999'}</Text>
            <Text onClick={() => props.selectModelAndGen('LEGACY', '3GEN')}>{'3GEN (BH BE)'}<br />{'1999-2004'}</Text>
            <Text onClick={() => props.selectModelAndGen('LEGACY', '4GEN')}>{'4GEN (BP BL)'}<br />{'2003-2009'}</Text>
            <Text onClick={() => props.selectModelAndGen('LEGACY', 'OTHER')} css={css`margin-bottom: 0px;`}>{'OTHER LEGACY & OB'}</Text>
        </RootList>
        : null
}

const ImprezaList: React.FC<IListProps> = props => {
    return props.isOpen
        ? <RootList>
            <Text>{'2GEN (BK BG BD)'}<br />{'1993-1999'}</Text>
            <Text>{'3GEN (BH BE)'}<br />{'1999-2004'}</Text>
            <Text>{'4GEN (BP BL)'}<br />{'2003-2009'}</Text>
            <Text css={css`margin-bottom: 0px;`}>{'OTHER LEGACY & OB'}</Text>
        </RootList>
        : null
}

const ForesterList: React.FC<IListProps> = props => {
    //  classes = ''
    return props.isOpen
        ? <RootList>
            <Text >{'2GEN (BK BG BD)'}<br />{'1993-1999'}</Text>
            <Text>{'3GEN (BH BE)'}<br />{'1999-2004'}</Text>
            <Text>{'4GEN (BP BL)'}<br />{'2003-2009'}</Text>
            <Text css={css`margin-bottom: 0px;`}>{'OTHER LEGACY & OB'}</Text>
        </RootList>
        : null
}

const RootList = styled.div`
margin-top: 20px;
border-left: 2px solid #9D998E;
`
const Text = styled.div`
margin-left: 10px;
margin-bottom: 17px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 13px;
color: #9D998E;
cursor: pointer;
`