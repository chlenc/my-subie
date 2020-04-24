/**@jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

interface IProps {

}
export default class SortByMerch extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <Title>MERCH</Title>
            <Line />
            <VarietiesOfMerch>
                <Label css={css`margin-top: 18px;`}>STICKERS</Label>
                <Label>SHIRTS</Label>
                <Label>POSTERS</Label>
            </VarietiesOfMerch>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
height: 178px;
margin-top: 32px;
border: 2px solid #9D998E;
box-sizing: border-box;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
const Title = styled.div `
margin-top: 17px;
margin-bottom: 10px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #9D998E;
text-align: center;
cursor: pointer;
`
const Line = styled.div`
width: 169px;
height: 0px;
border: 1px solid #9D998E;
`
const VarietiesOfMerch = styled.div`
width: 169px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
`
const Label = styled.div`
display: flex;
margin-bottom: 18px;
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 20px;
line-height: 19px;
color: #000000;
cursor: pointer;
`