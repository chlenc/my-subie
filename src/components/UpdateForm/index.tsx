import React from "react";
import {DataStore, IItem} from "../../stores/DataStore";
import {inject, observer} from "mobx-react";
import InputForm from "../InputForm";
import HistoryStore from "../../stores/HistoryStore";
import Spin from "antd/lib/spin";
import styled from "@emotion/styled";

interface IProps {
    dataStore?: DataStore
    historyStore?: HistoryStore
}


@inject('dataStore', 'historyStore')
@observer
export default class UpdateForm extends React.Component<IProps> {

    handleFinish = async (data: IItem) => {
        const id = this.itemId;

        return Object.keys(this.props.dataStore!.goods).includes(id)
            ? await this.props.dataStore!.updateItem(id, data) === null
            : false;
    }

    get itemId() {
        return this.props.historyStore!.currentPath.replace('change/', '');
    }

    redirectToHome = () => this.props.historyStore!.history.push('/')

    render() {
        const defaultValue = this.props.dataStore?.goods[this.itemId];
        return defaultValue
            ? <InputForm defaultValue={defaultValue} onFinish={this.handleFinish} onSuccess={this.redirectToHome}/>
            : <SpinRoot><Spin size="large"/></SpinRoot>;
    }
}

const SpinRoot = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
min-height: 400px;
`
