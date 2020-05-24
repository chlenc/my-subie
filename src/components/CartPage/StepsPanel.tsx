/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import backArrow from '../../icons/CartPage/backArrow.svg'
import one from '../../icons/CartPage/one.svg'
import two from '../../icons/CartPage/two.svg'
import next from '../../icons/CartPage/next.svg'

interface IProps {

}

export default class StepsPanel extends React.Component {
    render() {
        return <Root>
            <Wrapper>
                <Step image={backArrow} text='CONTINUE SHOPPING' href='/products' active={false} />
                <Step image={one} text='SHIPPING QUOTE' href='/' active={true} />
                <Step image={two} text='CHECKOUT DETAILS' href='/' active={false} />
                <Step image={next} text='ORDER COMPLETE' href='/' active={false} />
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
background: #FAFAFA;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
width: 92vw;
display: flex;
height: 127px;
`
interface IStepProps {
    image: string
    text: string
    href: string
    active: boolean
}

const Step: React.FC<IStepProps> = props => {
    return props.active ?
        <RootStep href={props.href}>
            <Circle css={css`background: #82CA9C;`}>
                <Image src={props.image} />
            </Circle>
            <Text css={css`color: #000000;`}>{props.text}</Text>
        </RootStep>
        :
        <RootStep href={props.href}>
            <Circle css={css`background: #9D998E;`}>
                <Image src={props.image} />
            </Circle>
            <Text>{props.text}</Text>
        </RootStep>
}

const RootStep = styled.a`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
`
const Image = styled.img`
margin-left: -3px;
`
const Circle = styled.div`
width: 42px;
height: 42px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const Text = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
text-align: center;
color: #9D998E;
margin-top: 10px;
`