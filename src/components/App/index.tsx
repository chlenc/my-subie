import React from 'react';
import styled from '@emotion/styled'
import Navbar from '../Navbar'
import ContentBox from '../ContentBox';

const Root = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
@font-face {
  font-family: 'GothamProBlack';
  src: url('../../fonts/GothamPro-Black.woff') format('woff'), /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
   url('../../fonts/GothamPro-Black.ttf') format('ttf'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}  
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
