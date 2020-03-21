/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { Option } from 'rc-select'
import Select from '../Select'
import { css, jsx } from '@emotion/core'
interface IState {
    model?: string
}

export default class ReplyForm extends React.Component<{}, IState> {

    state = {
        model: undefined
    }

    handleChangeModel = (model: string) => this.setState({ model });

    render() {
        const { model } = this.state;
        return <Root>
            <Body>
                <Title>Please fill in the fields, we will contact you!</Title>
                <Item css={css`border-top: 2px solid #9D998E;`}>
                    <Number>1.</Number>
                    <Name placeholder="Your Name" />
                </Item>
                <Item>
                    <Number>2.</Number>
                    <Select value={model} onChange={this.handleChangeModel} placeholder="Your subie model">
                        <Option value="Model 1">Model 1</Option>
                        <Option value="Model 2">Model 2</Option>
                        <Option value="Model 3">Model 3</Option>
                    </Select>
                </Item>
                <Item>
                    <Number>3.</Number>
                    <Name placeholder="Making year your Subie" />
                </Item>
                <Item css={css`border-bottom: 2px solid #9D998E;`}>
                    <Number>4.</Number>
                    <Name placeholder="Your E-mail *" />
                </Item>
                <Comment css={css`margin-top: 12px;`} placeholder="Type here what parts you’re looking for..." />
            </Body >
            <ContactButton>Contact me!</ContactButton>
        </Root >
    }
}

const Root = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FAFAFA;
width: 100%;
`

const Body = styled.div`
width: 250px;
height: 338px;
margin: 37px;
background: #FAFAFA;
border-radius: 18px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
`
const Item = styled.div`
display: flex;
flex-direction: row;
align-items: center;
top: 14.5%;
bottom: 72.78%;
background: #FAFAFA;
width: 250px;
height: 43px;
border: 1px solid #9D998E;
box-sizing: border-box;
.rc-select-selection-search-input {
    position: relative;
    right: 30px;
    width: 30px;
}
.rc-select-arrow-icon{
    width: 21px;
    height: 13.44px;
}
`
const Number = styled.div`
width: 30px;
text-align: right;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
color: #9D998E;
`
const Title = styled.div`
height: 49px;
top: 1.78%;
bottom: 85.5%;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 14px;
line-height: 138.2%;
display: flex;
align-items: center;
text-align: center;
color: #73B289;
/* background: #fff; */
`
const Name = styled.input`
width: 220px;
margin-left: 13px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
border: 0px;
color: #9D998E;
background: #FAFAFA;
::placeholder{
    color: #9D998E;
    opacity: 1;
}
`
const Comment = styled.textarea`
width: 212px;
height: 92px;
margin-left: 13px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
border: 0px;
color: #9D998E;
background: #FAFAFA;
resize: none;
::placeholder{
    color: #9D998E;
    opacity: 1;
}`

const ContactButton = styled.div`
width: 250px;
height: 55px;
background: #FFAE00;
border-radius: 24px;
outline: none;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #000000;
`