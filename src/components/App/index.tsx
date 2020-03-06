import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import ContentBox from '../ContentBox';

const Root = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const ContentArea = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 1070%;
`

interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <ContentArea>
        <Navbar/>
        <ContentBox/>
      </ContentArea>
    </Root>
  }
};
