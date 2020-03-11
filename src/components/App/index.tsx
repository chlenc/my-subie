import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import ContentBox from '../ContentBox'
import Menu from '../Menu'
import HotGoods from '../HotGoods'
import Reasons from '../Reasons';

const Root = styled.div`
display: flex;
font-family: GothamPro_Black;
flex-direction: row;
justify-content: center;
align-items: center;
`
const SubRoot = styled.div`
display: flex;
flex-direction: column;
flex: 0.443;
`

const Div = styled.div`
max-height: 500px;
width: 100%;
z-index: 0;
`
interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <SubRoot>
        <Navbar />
        <ContentBox />
        <Menu />
        <Div>
          <HotGoods />
        </Div>
        <Reasons/>
      </SubRoot>
    </Root>
  }
};
