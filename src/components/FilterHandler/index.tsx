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
}

export default class FilterHandler extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <Link href='/'>HOME >&nbsp;</Link>
            <Text onClick={() => this.props.selectorsStore.selectModelAndGen('', '')}>ALL PARTS</Text>
            <Text onClick={() => this.props.selectorsStore.selectModelAndGen(this.props.selectorsStore.selectedModel, '')}>
                {this.props.selectorsStore.selectedModel.length != 0
                    ? ` > ${this.props.selectorsStore.selectedModel}> `
                    : null}
            </Text>
            <Text>&nbsp;{this.props.selectorsStore.selectedGen}</Text>
        </Root>
    }
}


const Root = styled.div`
margin-top: 32px;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Text = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 16px;
line-height: 15px;
color: #9D998E;
cursor: pointer;
`
const Link = styled.a`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 16px;
line-height: 15px;
color: #9D998E;
text-decoration: none;
`