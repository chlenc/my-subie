import React from 'react';
import { Avatar, Button, notification, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons';
import { DataStore, IItem } from '../../stores/DataStore';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { ImageList } from '../InputForm';
import HistoryStore from '../../stores/HistoryStore';
import SearchDropdown from './SearchDropdown';
import { tags } from '../../vars';
import { Key } from 'antd/lib/table/interface';

const {Column} = Table;

interface IProps {
    dataStore?: DataStore
    historyStore?: HistoryStore
}

interface IState {
    searchText?: string
    filteredInfo?:  Record<string, Key[] | null>
}

const ExpandedRowRoot = styled.div`
display: flex;
flex-direction: column;
margin: 0;
`;
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
`;

@inject('dataStore', 'historyStore')
@observer
export default class List extends React.Component<IProps, IState> {

    state: IState = {};

    renderActions = (_: any, record: IItem) => <ActionsRoot>
        <EditOutlined onClick={this.handleEdit(record)}/>
        <DeleteOutlined onClick={this.handleRemove(record)}/>
    </ActionsRoot>;

    handleEdit = (record: IItem) => () => this.props.historyStore!.history.push(`/change/${record.key}`);

    handleRemove = (record: IItem) => () => {
        const key = `open${Date.now()}`;
        const doDelete = () => {
            record.key && this.props.dataStore!.removeItem(record.key);
            notification.close(key);
        };
        notification.open({
            message: 'Подтвердите действие',
            description: `Вы уверены что хотите удалить товар "${record.title}"`,
            btn: <Button type="primary" size="small" onClick={doDelete}>Удалить</Button>,
            key,
        });
    };

    handleChangeSearchText = (searchText: string) => this.setState({searchText});

    handleReset = () => this.setState({searchText: undefined});

    titleProps = {
        filterDropdown: () =>
            <SearchDropdown
                onChangeSearchText={this.handleChangeSearchText}
                searchText={this.state.searchText}
                handleReset={this.handleReset}
            />,
        filterIcon: () => <SearchOutlined style={{color: this.state.searchText ? '#1890ff' : undefined}}/>,
    };

    handleChange = (_: any, filters:  Record<string, Key[] | null>) => this.setState({filteredInfo: filters});

    render() {
        const {searchText, filteredInfo} = this.state;
        const data = Object.entries(this.props.dataStore!.goods)
            .map(([key, v]) => ({...v, key}))
            .filter(({title}: IItem) => !searchText || title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

        return <Table
            dataSource={data}
            expandable={{expandedRowRender}}
            onChange={this.handleChange}
            columns={[
                {title: 'Фото', dataIndex: 'attachments', key: 'attachments', render: renderPhoto},
                {title: 'Название', dataIndex: 'title', key: 'title', ...this.titleProps},
                {title: 'Модель', dataIndex: 'model', key: 'model'},
                {title: 'Поколение', dataIndex: 'gen', key: 'gen'},
                {
                    title: 'Теги', dataIndex: 'tags', key: 'tags', render: renderTags,
                    filters: tags.map(v => ({value: v, text: v})),
                    onFilter: (value, record) => {
                        console.log(value)
                    return     record.tags.includes(value)
                    },
                },
                {title: 'Вес', dataIndex: 'weight', key: 'weight'},
                {title: 'Цена', dataIndex: 'price', key: 'price'},
                {title: 'Старая цена', dataIndex: 'oldPrice', key: 'oldPrice'},
                {title: 'Действия', key: 'action', render: this.renderActions}
            ]}
        />;
    }
}


const renderPhoto = (attachments: string[]) =>
    <Avatar
        size={64}
        icon={(!attachments || !attachments[0]) && <PictureOutlined/>}
        src={attachments && attachments[0]}
    />;

const renderTags = (tags: string[]) => <span>{tags.map((tag: any) => (<Tag color="blue" key={tag}>{tag}</Tag>))}</span>;

const expandedRowRender = ({description, attachments}: IItem) => <ExpandedRowRoot>
    <ReactMarkdown source={description}/>
    <ImageList attachments={attachments}/>
</ExpandedRowRoot>;
