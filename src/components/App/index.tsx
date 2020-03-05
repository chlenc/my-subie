import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
const Root = styled.div`
`

interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <Navbar/>
    </Root>
  }
};
