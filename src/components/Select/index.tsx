import React from "react";
import styled from "@emotion/styled";
import RCSelect from 'rc-select';
import 'rc-select/assets/index.css'


const Root = styled.div`
width: 100%;

.rc-select{
width: 85%;
margin-left: 5px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
}
.rc-select-selection{
border-color: #FAFAFA;
background: #FAFAFA;
}
.rc-select-selection__rendered{
    display: flex;
    flex-direction: row;
    align-items: center;
}
`;

interface IProps {
    value?: string
    placeholder?: string
    onChange?: (e: string) => void
    css?: any
}

interface IState {
}


export default class Select extends React.Component<IProps, IState> {

    render() {
        const { css: style, children, value, onChange, placeholder } = this.props;
        return (
            <Root css={style}>
                <RCSelect
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder && <Placeholder>{placeholder}</Placeholder>}
                    showArrow={false}
                >
                    {children}
                </RCSelect>
            </Root >
        );
    }
}

const Placeholder = styled.div`
margin-top: 3.5px;
font-family: 'GothamPro-Medium';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
color: #9D998E;
`

