import React from 'react';
import styled from '@emotion/styled'
import { IItem } from '../../stores/DataStore';
import ItemInfo from '../../icons/ItemInfo.svg'
import Condition from '../../icons/Condition.svg'
import FitmentDetails from '../../icons/FitmentDetails.svg'
import ReactMarkdown from 'react-markdown';

interface IProps {
    item: IItem
}

export default class Description extends React.Component<IProps, {}> {
    render() {
        let InfoText = ''
        let ConditionText = ''
        let FitmentText = ''
        try {
            InfoText = this.props.item.description.split('Condition:')[0]
                .replace('Item spec:', '')
                .replace('-', '')
            ConditionText = this.props.item.description.split('Condition:')[1]
                .split('Fitment details: ')[0]
                .replace('Condition:', '')
                .replace('-', '')
            FitmentText = this.props.item.description.split('Fitment details:')[1]
                .replace('Fitment details:', '')
                .replace('-', '')
        }
        catch (err) {
            InfoText = 'Error filling in Description field.'
            ConditionText = 'Error filling in Description field.'
            FitmentText = 'Error filling in Description field.'
        }

        return <Root>
            <Title>
                <Icon src={ItemInfo} />
                ITEM INFO:
            </Title>
            <Line />
            <Text>
                <ReactMarkdown source={InfoText} />
            </Text>
            <Title>
                <Icon src={Condition} />
                CONDITION:
            </Title>
            <Line />
            <Text>
                <ReactMarkdown source={ConditionText} />
            </Text>
            <Title>
                <Icon src={FitmentDetails} />
                FITMENT DETAILS:
            </Title>
            <Line />
            <Text>
                <ReactMarkdown source={FitmentText} />
            </Text>
        </Root>
    }
}

const Root = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Title = styled.div`
font-family: 'GothamPro-Medium';
font-weight: bold;
font-size: 18px;
line-height: 25px;
display: flex;
align-items: center;
color: #9D998E;
`
const Icon = styled.img`
width: 26px;
height: 26px;
margin-right: 10px;
`
const Line = styled.div`
margin-top: 6px;
width: 60%;
height: 0px;
border: 1px solid #9D998E;
`
const Text = styled.div`
margin-bottom: 20px;
font-weight: normal;
font-size: 14px;
line-height: 165%;
color: #000000;
`