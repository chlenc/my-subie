/** @jsx jsx */
import React from "react";
import {Form, Select, InputNumber, Switch, Button, Input, notification} from 'antd';
import ReactMarkdown from 'react-markdown';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {css, jsx} from "@emotion/core";
import {inject, observer} from "mobx-react";
import {DataStore} from "../../stores";
import styled from "@emotion/styled";
import { FormInstance } from "antd/lib/form";
import {gens, models, tags} from "../../vars";

const {Option} = Select;


interface IProps {
    dataStore: DataStore
}

interface IState {
    description?: string
    attachments?: string[]
    test?: any
}

const numStyle = css`
.ant-input-number{
width: 100%;
}
`

@inject('dataStore')
@observer
class AddForm extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    formRef: React.RefObject<FormInstance> = React.createRef();


    onFinish = async (data: any) => {
        data.attachments = this.state.attachments
        Object.keys(data).forEach(key => data[key] === undefined && delete data[key])
        const res = await this.props.dataStore!.addItem(data) === null
        const type = res ? 'success' : 'error'
        const description = res ? 'Success' : JSON.stringify(res)
        notification[type]({message: type, description})
        type === 'success' && this.resetForm();
    };

    resetForm = () => {
        this.formRef.current!.resetFields();
        this.setState({})
    }

    handleChangeDescription = ({target: {value: description}}: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({description});

    handleChangeAttachments = ({target: {value: attachments}}: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({attachments: attachments.split('\n').filter(v => validURL(v))});

    handleClickMDInfo = () => window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet')

    handleClickUploadInfo = () => window.open('https://imgbb.com/')

    render() {
        const {description, attachments} = this.state;
        return <Form {...formItemLayout} ref={this.formRef} onFinish={this.onFinish}>

            <Form.Item label="Название" name="title" rules={inputRules}>
                <Input placeholder="Название детали"/>
            </Form.Item>

            <Form.Item label="Модель" name="model" rules={inputRules}>
                <Select placeholder="Модель">
                    {models.map((model, i) => <Option key={i} value={model}>{model}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Gen" name="gen" rules={inputRules}>
                <Select placeholder="Поколение">
                    {gens.map((gen, i) => <Option key={i} value={gen}>{gen}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Теги" name="tags" rules={[...inputRules, {type: 'array'}]}>
                <Select mode="multiple" placeholder="Теги">
                    {tags.map((tag, i) => <Option key={i} value={tag}>{tag}</Option>)}
                </Select>
            </Form.Item
            >

            <Form.Item label="Вес" name="weight" rules={[...inputRules, {type: 'number', min: 0}]} css={numStyle}>
                <InputNumber placeholder="Вес"/>
            </Form.Item>

            <Form.Item label="Цена" name="price" rules={[...inputRules, {type: 'number', min: 0}]} css={numStyle}>
                <InputNumber placeholder="Цена"/>
            </Form.Item>

            <Form.Item label="Старая цена" name="oldPrice" rules={[{type: 'number', min: 0}]} css={numStyle}>
                <InputNumber placeholder="Старая Цена"/>
            </Form.Item>

            <Form.Item label="Есть на складе" name="stock">
                <Switch defaultChecked/>
            </Form.Item>

            <Form.Item
                label={<span>Описание&nbsp;<QuestionCircleOutlined onClick={this.handleClickMDInfo}/></span>}
                name="description"
                rules={inputRules}
            >
                <Input.TextArea onChange={this.handleChangeDescription}/>
            </Form.Item>
            <ItemLayout> <ReactMarkdown source={description}/></ItemLayout>

            <Form.Item
                label={<span>Загрузка&nbsp;<QuestionCircleOutlined onClick={this.handleClickUploadInfo}/></span>}
                name="attachments"
            >
                <Input.TextArea
                    onChange={this.handleChangeAttachments}
                />
            </Form.Item>
            <ItemLayout>
                {(attachments || [])!.map((url, key) =>
                    <ImgWrapper key={key}>
                        <Image css={css`background-image: url(${url})`}/>{url}
                    </ImgWrapper>) as any
                }
            </ItemLayout>
            <ItemLayout >
                <Button type="primary" htmlType="submit">Добавить</Button>&nbsp;
                <Button onClick={() => this.resetForm()}>Сбросить</Button>
            </ItemLayout>

        </Form>

    }

};
export default AddForm

const ItemLayout: React.FC = ({children}) =>
    <div css={css`display: flex`}>
        <div css={css`flex: 1`}/>
        <div css={css`flex: 3`}>{children}</div>
    </div>

const ImgWrapper = styled.div`
display: flex;
align-items: center;
`

const Image = styled.div`
height: 50px;
min-width: 50px;
margin: 10px 30px 10px 0;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`

function validURL(str: string) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 14},
};

const inputRules = [{required: true, message: 'Обязательное поле!'}]
