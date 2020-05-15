/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { SelectorsStore } from '../../stores/SelectorsStore'
import { inject, observer } from 'mobx-react'


interface IProps {
    selectorsStore?: SelectorsStore
}
interface IState {
}

@inject('selectorsStore')
@observer
export default class FilterHandler extends React.Component<IProps, IState> {
    selectorsStore = this.props.selectorsStore!!
    render() {
        return <Root>
            <Link href='/'>HOME >&nbsp;</Link>
            <Link href='/products' onClick={() => this.selectorsStore.selectModelAndGen('', '')}>ALL PARTS</Link>
            <Text href='/products' onClick={() => this.selectorsStore.selectModelAndGen(this.selectorsStore.selectedModel, '')}>
                {this.selectorsStore.selectedModel.length != 0
                    ? ` > ${this.selectorsStore.selectedModel}> `
                    : null}
            </Text>
            <Text>&nbsp;{this.selectorsStore.selectedGen}</Text>
        </Root>
    }
}


const Root = styled.div`
margin-top: 32px;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Text = styled.a`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 16px;
line-height: 15px;
color: #9D998E;
text-decoration: none;
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