import React from 'react'
import styled from '@emotion/styled'

export default class SubFooter extends React.Component {
    render() {
        return <Root>
            <Body>
                <Description>We’re bringing you <b>#partswithlove</b> since 2017</Description>
                <Link>WWW.MYSUBIE-PARTS.COM © 2020</Link>
            </Body>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #FAFAFA;
@media (max-width: 768px){
    flex-direction: column;
}
`
const Body = styled.div`
width: 1070px;
height: 78px;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 768px){
    width: 375px;
    height: auto;
    flex-direction: column;
}
`
const Description = styled.div`
font-family: 'GothamPro-Medium';
font-size: 12px;
line-height: 138.2%;
color: #9D998E;
b{
font-weight: bold;
}
@media (max-width: 768px){
    margin-top: 20px;
    font-size: 14px;
    b{
    font-weight: bold;
    }
}
`

const Link = styled.div `
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 138.2%;
color: #9D998E;
@media (max-width: 768px){
    margin-top: 9px;
    margin-bottom: 13px;
}
`