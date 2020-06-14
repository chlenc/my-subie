import React from "react";
import styled from "@emotion/styled";
import RCSelect from 'rc-select';
import 'rc-select/assets/index.css'


const Root = styled.div`
margin-bottom: 11px;
.rc-select{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-family: 'GothamPro-Medium';
    font-size: 14px;
    line-height: 138.2%;
    border: 2px solid #9D998E;
    border-radius: 10px;
    box-sizing: border-box;
    >div {
        box-shadow: none;
        border-color: #FAFAFA;
    }
    }
}
.rc-select-selection{
    background: #FAFAFA;
    box-sizing: border-box;
}
.rc-select-selection__rendered{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: none;
}
.rc-select-enabled .rc-select-selection:hover {
    border-color: white;
    box-shadow: none;
}
.rc-select-selection.rc-select-selection--single {
    width: 100%;
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
                    placeholder={placeholder}
                    showArrow={true}
                >
                    {children}
                </RCSelect>
            </Root >
        );
    }
}

// const Placeholder = styled.div`
// margin-top: 3.5px;
// font-family: 'GothamPro-Medium';
// font-weight: normal;
// font-size: 14px;
// line-height: 138.2%;
// color: #9D998E;
// `

