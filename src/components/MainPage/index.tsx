import React from 'react';
import styled from '@emotion/styled'
import Title from '../Title'
import Menu from '../Menu'
import HotGoods from '../HotGoods'
import Reasons from '../Reasons';
import HowToBuy from '../HowToBuy'
import CustomCars from '../CustomCars'
import ReplyForm from '../ReplyForm'
import '../../vars'

const Root = styled.div`
display: flex;
width: 100vw;
flex-direction: column;
align-items: center;
`


interface IProps {
}

interface IState {
}


export default class ShopPage extends React.Component<IProps, IState> {
  render() {
    return <Root>
      <Title />
      <Menu />
      <HotGoods />
      <Reasons />
      <HowToBuy />
      <CustomCars />
      <ReplyForm />
    </Root>
  }
};
