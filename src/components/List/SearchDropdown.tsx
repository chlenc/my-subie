import React from 'react';
import { Button, Input } from 'antd';

interface IProps {
    onChangeSearchText: (s: string) => void,
    searchText?: string
    handleReset: () => void
}

export default class SearchDropdown extends React.Component<IProps> {

    render() {
        const {searchText, onChangeSearchText, handleReset} = this.props;
        return <div style={{padding: 8}}>
            <Input
                placeholder={`Поиск по названию`}
                value={searchText}
                onChange={({target: {value}}) => onChangeSearchText(value)}
                style={{width: 188, marginBottom: 8, display: 'block'}}
            />
            <Button onClick={handleReset} size="small" style={{width: 90}}>Reset</Button>
        </div>;
    }
}
