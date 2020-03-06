import React from 'react'
import styled from '@emotion/styled'
import bg from '../../images/Slider01.png'

const Root = styled.div `
width: 100%;
max-width: 1070px;
display: flex;
justify-content: center;
`
const Content = styled.div `
/* width: 55.729vw; */
/* height: 16.667vw; */
background-image: url(${bg});
background-size: cover;
`

export default class ContentBox extends React.Component {
    render () {
        return <Root>
            <Content/>
        </Root>
    }
}