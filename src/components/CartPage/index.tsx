/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import StepsPanel from './StepsPanel'

interface IProps {

}

export default class CartPage extends React.Component <IProps, {}> {
    render () {
        return <Root>
            <StepsPanel/>
        </Root>
    }
}

const Root = styled.div`
width: 100%;

`