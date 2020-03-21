import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import ContentBox from '../ContentBox'
import Menu from '../Menu'
import HotGoods from '../HotGoods'
import Reasons from '../Reasons';
import HowToBuy from '../HowToBuy'
import CustomCars from '../CustomCars'
import ReplyForm from '../ReplyForm'

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <Navbar />
      <ContentBox />
      <Menu />
      <HotGoods />
      <Reasons />
      <HowToBuy />
      <CustomCars />
      <ReplyForm />
    </Root>
  }
};
