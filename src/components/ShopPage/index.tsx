import React from 'react'
import styled from '@emotion/styled'
import Navbar from '../Navbar'

interface IProps {

}
interface IState {

}
export default class ShopPage extends React.Component<IProps, IState> {
    render () {
        return <Root>
            <Navbar/>
        </Root>
    }
}

const Root = styled.div `
`