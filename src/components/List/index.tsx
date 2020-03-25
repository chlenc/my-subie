/** @jsx jsx */
import React from 'react';
import {Avatar, Button, notification, Table, Tag, Typography, Badge} from 'antd';
import {DeleteOutlined, EditOutlined, PictureOutlined, SearchOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {DataStore, IItem} from '../../stores/DataStore';
import {inject, observer} from 'mobx-react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import {ImageList} from '../InputForm';
import HistoryStore from '../../stores/HistoryStore';
import SearchDropdown from './SearchDropdown';
import {gens, models, tags} from '../../vars';
import {css, jsx} from "@emotion/core";

const {Text} = Typography;

interface IProps {
    dataStore?: DataStore
    historyStore?: HistoryStore
}

type TFilter = {
    tags: string[] | null
    gen: string[] | null
    model: string[] | null
}

interface IState {
    searchText?: string
    filteredInfo: TFilter
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
     transform: scale(1.7);
  }
}
`;

const root = css`
.ant-table-row-expand-icon{
  transform: scale(1.5);
}

.anticon-edit, .anticon-delete, .anticon-plus-circle{
  transform: scale(1.5);
  margin: 0 15px;
} 
`

@inject('dataStore', 'historyStore')
@observer
export default class List extends React.Component<IProps, IState> {

    state: IState = {
        filteredInfo: {tags: null, gen: null, model: null}
    };

    renderActions = (_: any, record: IItem) => <ActionsRoot>
        <PlusCircleOutlined onClick={this.handleDouble(record)}/>
        <EditOutlined onClick={this.handleEdit(record)}/>
        <DeleteOutlined onClick={this.handleRemove(record)}/>
    </ActionsRoot>;

    handleEdit = (record: IItem) => () => this.props.historyStore!.history.push(`/change/${record.key}`);

    handleDouble = (record: IItem) => () => {
        const key = `open${Date.now()}`;
        const doDouble = async () => {
            delete record.key
            const res = (await this.props.dataStore!.addItem(record)) === null
            notification.close(key);
            const type = res ? 'success' : 'error'
            const description = res ? 'Все круто!' : 'Что-то пошло не так'
            notification[type]({message: type, description})
        };
        notification.open({
            message: 'Подтвердите действие',
            description: `Вы уверены что хотите дублировать товар "${record.title}"`,
            btn: <Button type="primary" size="small" onClick={doDouble}>Дублировать</Button>,
            key,
        });
    };

    handleRemove = (record: IItem) => () => {
        const key = `open${Date.now()}`;
        const doDelete = () => {
            record.key && this.props.dataStore!.removeItem(record.key);
            notification.close(key);
        };
        notification.open({
            message: 'Подтвердите действие',
            description: `Вы уверены что хотите удалить товар "${record.title}"`,
            btn: <Button type="danger" size="small" onClick={doDelete}>Удалить</Button>,
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

    handleChange = (_: any, filters: TFilter) => this.setState({filteredInfo: filters})

    render() {
        const {searchText, filteredInfo} = this.state;
        const data = Object.entries(this.props.dataStore!.goods)
            .map(([key, v]) => ({...v, key}))
            .filter(({title}: IItem) => !searchText || title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            .filter(({tags}: IItem) => !filteredInfo.tags || filteredInfo.tags.every(t => tags!.includes(t)))
            .filter(({gen}: IItem) => !filteredInfo.gen || filteredInfo.gen.includes(gen))
            .filter(({model}: IItem) => !filteredInfo.model || filteredInfo.model.includes(model))
            .sort((a, b) => a.title > b.title ? 1 : -1);

        return <Table
            css={root}
            dataSource={data}
            expandable={{expandedRowRender}}
            onChange={this.handleChange as any}
            columns={[
                {title: 'Фото', dataIndex: 'attachments', key: 'attachments', render: renderPhoto},
                {title: 'Название', dataIndex: 'title', key: 'title', ...this.titleProps},
                {
                    title: 'Модель', dataIndex: 'model', key: 'model',
                    filters: models.map(v => ({value: v, text: v})),
                },
                {
                    title: 'Поколение', dataIndex: 'gen', key: 'gen',
                    filters: gens.map(v => ({value: v, text: v})),
                },
                {
                    title: 'Теги', dataIndex: 'tags', key: 'tags', render: renderTags,
                    filters: tags.map(v => ({value: v, text: v})),
                },
                {title: 'Вес', dataIndex: 'weight', key: 'weight'},
                {title: 'Цена', dataIndex: 'price', key: 'price', render: renderPrice},
                {title: 'Действия', key: 'action', render: this.renderActions}
            ]}
        />;
    }
}


const renderPhoto = (attachments: string[], {stock}: IItem) =>
    <Badge color={stock ? "green" : "red"} >
        <Avatar
            size={64}
            icon={(!attachments || !attachments[0]) && <PictureOutlined/>}
            src={attachments && attachments[0]}
        />
    </Badge>;

const renderTags = (tags: string[]) => <span>{tags.map((tag: any) => (<Tag color="blue" key={tag}>{tag}</Tag>))}</span>;


const renderPrice = (price: number, {oldPrice}: IItem) =>
    <span>{oldPrice && <Text delete>{oldPrice}<br/></Text>}{price}</span>;

const expandedRowRender = ({description, attachments}: IItem) => <ExpandedRowRoot>
    <ReactMarkdown source={description}/>
    <ImageList attachments={attachments}/>
</ExpandedRowRoot>;
