import React from "react";
import {DataStore, IItem} from "../../stores/DataStore";
import {inject, observer} from "mobx-react";
import InputForm from "../InputForm";

interface IProps {
    dataStore?: DataStore
}


@inject('dataStore')
@observer
export default class AddForm extends React.Component<IProps> {

    handleFinish = async (data: IItem) => await this.props.dataStore!.addItem(data) === null;

    render() {
        return <InputForm onFinish={this.handleFinish}/>
    }
}
