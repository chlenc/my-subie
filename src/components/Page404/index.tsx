import React from 'react'
import styled from '@emotion/styled'

export default class Page404 extends React.Component <{},{}> {
    render(){
        return <Root>
            <Ooops>OOOPS</Ooops>
            <Text>#404 <br/> PAGE NOT FOUND</Text>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
display: flex;
flex-direction: column;
font-family: 'GothamPro-Medium';
`
const Ooops = styled.div`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #FAFAFA;
font-weight: bold;
font-size: 3vw;
line-height: 138.2%;
color: #9D998E;
`
const Text = styled.div`
width: 100%;
height: 35vh;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 6vw;
line-height: 138.2%;
text-align: center;
color: #000000;
`