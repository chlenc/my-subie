import React from "react";
import {Table, Tag, Button, notification} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {DataStore, IItem} from "../../stores/DataStore";
import {inject, observer} from "mobx-react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import {ImageList} from "../InputForm";
import HistoryStore from "../../stores/HistoryStore";

const {Column} = Table;

interface IProps {
    dataStore?: DataStore
    historyStore?: HistoryStore
}

const ExpandedRowRoot = styled.div`
display: flex;
flex-direction: column;
margin: 0;
`
const ActionsRoot = styled.span`
display: flex;
margin: 0 -8px;
& > * {
  margin: 0 8px;
  transition: 1s;
  &:hover{
     transform: scale(1.5);
  }
}
`

@inject('dataStore', 'historyStore')
@observer
export default class List extends React.Component<IProps> {

    renderTags = (tags: string[]) => <span>{tags.map((tag: any) => (<Tag color="blue" key={tag}>{tag}</Tag>))}</span>;

    renderExpandRow = ({description, attachments}: IItem) => <ExpandedRowRoot>
        <ReactMarkdown source={description}/>
        <ImageList attachments={attachments}/>
    </ExpandedRowRoot>

    renderActions = (_: any, record: IItem) => <ActionsRoot>
        <EditOutlined onClick={this.handleEdit(record)}/>
        <DeleteOutlined onClick={this.handleRemove(record)}/>
    </ActionsRoot>

    handleEdit = (record: IItem) => () => this.props.historyStore!.history.push(`/change/${record.key}`)

    handleRemove = (record: IItem) => () => {
        const key = `open${Date.now()}`;
        const doDelete = () => {
            record.key && this.props.dataStore!.removeItem(record.key)
            notification.close(key)
        }
        notification.open({
            message: 'Подтвердите действие',
            description: `Вы уверены что хотите удалить товар "${record.title}"`,
            btn: <Button type="primary" size="small" onClick={doDelete}>Удалить</Button>,
            key,
        });
    }

    render() {
        return <Table
            dataSource={Object.entries(this.props.dataStore!.goods).map(([key, v]) => ({...v, key}))}
            expandable={{expandedRowRender: this.renderExpandRow}}
        >
            <Column title="Название" dataIndex="title" key="title"/>
            <Column title="Модель" dataIndex="model" key="model"/>
            <Column title="Поколение" dataIndex="gen" key="gen"/>
            <Column title="Теги" dataIndex="tags" key="tags" render={this.renderTags}/>
            <Column title="Вес" dataIndex="weight" key="weight"/>
            <Column title="Цена" dataIndex="price" key="price"/>
            <Column title="Старая цена" dataIndex="oldPrice" key="oldPrice"/>
            <Column title="Действия" key="action" render={this.renderActions}/>
        </Table>
    }
}
