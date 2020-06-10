import React from 'react'
import styled from '@emotion/styled'
import Select from '../Select'
import { Option } from 'rc-select'
import ShippingQuote from './ShippingQuote'
import FinalInvoice from './FinalInvoice'

export const CountryContext = React.createContext('')

interface IProps {

}

interface IState {
    country: string
}

export default class Calculator extends React.Component<IProps, IState> {
    state: IState = {
        country: '',
    }

    handleChangeCountry = (country: string) => this.setState({ country });
    render() {
        const { country } = this.state;
        return <Root>
            <CountryContext.Provider value={country}>
                <Title>SHIP TO</Title>
                <Select value={country} onChange={this.handleChangeCountry} placeholder="Select your country">
                    <Option value="USA">USA</Option>
                    <Option value="CANADA">CANADA</Option>
                    <Option value="AUSTRALIA">AUSTRALIA</Option>
                    <Option value="NEW ZEALAND">NEW ZEALAND</Option>
                </Select>
                <ShippingQuote country={this.state.country!} />
                <FinalInvoice />
            </CountryContext.Provider>
        </Root>
    }
}

const Root = styled.div`
width: 410px;
max-height: 414px;
padding: 19px 25px 24px 25px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: #FAFAFA;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 20px;
font-family: 'GothamPro-Medium';
@media (max-width: 1279px){
    width: 345px;
}
`
const Title = styled.div`
display: flex;
justify-content: flex-start;
font-weight: bold;
font-size: 24px;
color: #000000;
`
