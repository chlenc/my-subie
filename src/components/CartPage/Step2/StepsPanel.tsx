/** @jsx jsx*/
import React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import one from '../../../icons/CartPage/one.svg'
import two from '../../../icons/CartPage/two.svg'
import next from '../../../icons/CartPage/next.svg'
import { inject, observer } from 'mobx-react'
import HistoryStore from '../../../stores/HistoryStore';

export default class StepsPanel extends React.Component {
    render() {
        return <Root>
            <Wrapper>
                <Step image={one} text='SHIPPING QUOTE' active={true} href='/step1'/>
                <Step image={two} text='CHECKOUT DETAILS' href='/step2' active={true} />
                <Step image={next} text='ORDER COMPLETE' href='/' active={false} />
            </Wrapper>
        </Root>
    }
}

const Root = styled.div`
width: 100vw;
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
    href?: string
    active: boolean
    historyStore?: HistoryStore
}
const Step: React.FC<IStepProps> = inject('historyStore')(observer(
    (props) => {
        const push = props.historyStore?.history.push!
        return props.active
            ? <RootStep >
                <Circle css={css`background: #82CA9C;`} >
                    <Image src={props.image} />
                </Circle>
                <Text css={css`color: #000000;`} >
                    {props.text}
                </Text>
            </RootStep>
            : <RootStep >
                <Circle css={css`background: #9D998E;`} onClick={() => push(props.href!)}>
                    <Image src={props.image} />
                </Circle>
                <Text onClick={() => push(props.href!)}>
                    {props.text}
                </Text>
            </RootStep>
    }))

const RootStep = styled.div`
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
cursor: pointer;
`
const Text = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 12px;
line-height: 11px;
text-align: center;
color: #9D998E;
margin-top: 10px;
cursor: pointer;
`