import React from 'react';
import styled from '@emotion/styled';
import ARROW from '../../../icons/LEFTARROW_mini.svg'

const Root = styled.div`
width: 91.30434783%;
height: 30px;
margin-top: 15px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
background: #FFAE00;
border-radius: 29px;
font-size: 20px;
line-height: 19px;
text-align: center;
cursor: pointer;
p {
    margin: 3px 15px 0 15px;

}
`

const CloseButton: React.FunctionComponent<{ onClose: () => void }> = ({ onClose }) =>
    <Root onClick={onClose}>
        <img alt="description" src={ARROW} />
        <p>CLOSE MODELS</p>
        <img src={ARROW} alt="description" />
    </Root>

export default CloseButton;