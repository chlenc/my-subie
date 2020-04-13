import React from 'react'
import styled from '@emotion/styled'

interface IProps {

}
interface IState {

}

export default class FilteredByTags extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <p>FILTERED BY #TAGS :</p>
        </Root>
    }
}

const Root = styled.div`
width: 1070px;
height: 50px;
border-radius: 10px;
border: 2px solid #9D998E;
text-align: left;
p{
    font-family: 'GothamPro-Medium';
    font-weight: bold;
    font-size: 20px;
    color: #9D998E;
}
`