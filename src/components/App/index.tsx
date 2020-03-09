import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import ContentBox from '../ContentBox'
import Menu from '../Menu'
const Root = styled.div`
display: flex;
font-family: sans-serif;
flex-direction: row;
justify-content: center;
align-items: center;
`
const SubRoot = styled.div`
display: flex;
flex-direction: column;
flex: 0.443;

`
interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <SubRoot>
        <Navbar/>
        <ContentBox/>
        <Menu/>
      </SubRoot>
    </Root>
  }
};
