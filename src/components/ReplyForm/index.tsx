import React from 'react'
import styled from '@emotion/styled'
import { Option } from 'rc-select'
import Select from '../Select'

export default class ReplyForm extends React.Component {
    render() {
        return <Root>
            <Title>Please fill in the fields, we will contact you!</Title>
            <Item>
                <Number>1.</Number>
                <Name placeholder="Your Name" />
            </Item>
            <Item>
                <Number>2.</Number>
                <Select>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Item>
        </Root >
    }
}

const Root = styled.div`
width: 250px;
height: 338px;
margin: 37px;
border-radius: 18px;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
/* justify-content: center; */
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
`
const Name = styled.input`
/* placeholder: 'Name'; */
width: 220px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
border: 0px;
color: #9D998E;
background: #FAFAFA;
`

