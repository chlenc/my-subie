import React from 'react'
import styled from '@emotion/styled'
import Select from './Select'
import { Option } from 'rc-select'


interface IProps {
    setCountry: (country: string) => string
}

interface IState {
    country?: string
}


export default class Form extends React.Component<IProps, IState> {
    state: IState = {}
    handleChangeCountry = (country: string) => this.setState({ country });
    render() {
        const { country } = this.state
        return <Root>
            <Title>PLEASE FILL IN YOUR SHIPPING INFO</Title>
            <Input placeholder='Full name*' />
            <Select
                value={country}
                onChange={(country) => {
                    this.props.setCountry(country)
                    this.setState({ country: country })
                }
                }
                placeholder="Choose your country"
            >
                <Option value="USA">USA</Option>
                <Option value="CANADA">CANADA</Option>
                <Option value="AUSTRALIA">AUSTRALIA</Option>
                <Option value="NEW ZEALAND">NEW ZEALAND</Option>
            </Select>
            <Input placeholder='City*' />
            <Input placeholder='Street, house/ apt.' />
            <Input placeholder='Postal code (ZIP)' />
            <Input placeholder='State (or province) if exist' />
            <Input placeholder='E-mail' />
            <Comment placeholder={`Your IG, FB, or other social media to let us contact you faster :)   Plus you can leave a comment for an order / special notes for delivery...`} />
            <FooterText>Check the info twice please;)</FooterText>
        </Root >
    }
}

const Root = styled.div`
max-width: 504px;
/* margin-right: 111px; */
display: flex;
flex-direction: column;
font-family: 'GothamPro-Medium';
@media(max-width: 1279px){
    max-width: 301px;
}
@media (max-width: 768px){
    margin-right: 0px;
}
`
const Title = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
line-height: 138.2%;
text-align: right;
color: #82CA9C;
text-align: right;
`
const Input = styled.input`
width: 100%;
height: 40px;
margin-bottom: 11px;
padding-left: 14px;
background: #FFFFFF;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 10px;
::placeholder{
    font-size: 14px;
    color: #9D998E;
    opacity: .76;
}
`


const Comment = styled.textarea`
width: 100%;
height: 200px;
padding: 15px;
margin-bottom: 11px;
font-family: 'GothamPro-Medium';
font-size: 14px;
line-height: 138.2%;
border: 0px;
color: #9D998E;
resize: none;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 10px;
::placeholder{
    color: #9D998E;
    opacity: .76;
}`

const FooterText = styled.div`

font-weight: bold;
font-size: 14px;
line-height: 138.2%;
text-align: right;
color: #82CA9C;
`
