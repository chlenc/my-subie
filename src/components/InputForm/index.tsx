/** @jsx jsx */
import React from "react";
import {Form, Select, InputNumber, Switch, Button, Input, notification, Tooltip} from 'antd';
import ReactMarkdown from 'react-markdown';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {FormInstance} from "antd/lib/form";
import {gens, models, tags} from "../../vars";
import {IItem} from "../../stores/DataStore";

const {Option} = Select;


interface IProps {
    onFinish: (data: any) => Promise<boolean>
    onSuccess?: () => void
    defaultValue?: IItem
}

interface IState {
    description?: string
    attachments?: string[]
}

const numStyle = css`
.ant-input-number{
width: 100%;
}
`

class InputForm extends React.Component<IProps, IState> {

    state: IState = {};

    formRef: React.RefObject<FormInstance> = React.createRef();

    componentDidMount(): void {
        const {defaultValue} = this.props
        if (defaultValue) {
            this.formRef.current!.setFieldsValue(defaultValue);
            this.setState({
                attachments: defaultValue.attachments,
                description: defaultValue.description
            })
        }
    }

    handleFinish = async (data: any) => {
        data.attachments = this.state.attachments
        Object.keys(data).forEach(key => data[key] === undefined && delete data[key])

        const res = await this.props.onFinish(data)

        const type = res ? 'success' : 'error'
        const description = res ? 'Все круто!' : 'Что-то пошло не так'
        notification[type]({message: type, description})
        if (type === 'success') {
            this.resetForm();
            this.props.onSuccess && this.props.onSuccess()
        }

    };

    resetForm = () => {
        this.formRef.current!.resetFields();
        this.setState({description: undefined, attachments: undefined})
    }

    handleChangeDescription = ({target: {value: description}}: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({description});

    handleChangeAttachments = ({target: {value: attachments}}: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({attachments: attachments.split('\n').filter(v => validURL(v))});

    handleClickMDInfo = () => window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet')

    handleClickUploadInfo = () => window.open('https://imgbb.com/')

    render() {
        const {description, attachments} = this.state;
        return <Form {...formItemLayout} ref={this.formRef} onFinish={this.handleFinish}>

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

            <Form.Item
                label={<span>Теги&nbsp;
                    <Tooltip title="Последний тэг - главный для картинки">
                        <QuestionCircleOutlined onClick={this.handleClickMDInfo}/>
                    </Tooltip>
                </span>}
                name="tags" rules={[...inputRules, {type: 'array'}]}>
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
                <Input.TextArea onChange={this.handleChangeDescription} rows={22}/>
            </Form.Item>

            <ItemLayout> <ReactMarkdown source={description}/></ItemLayout>

            <Form.Item
                label={<span>Загрузка&nbsp;<QuestionCircleOutlined onClick={this.handleClickUploadInfo}/></span>}
                name="attachments"
            >
                <Input.TextArea onChange={this.handleChangeAttachments}/>
            </Form.Item>

            <ItemLayout><ImageList attachments={attachments}/></ItemLayout>

            <ItemLayout>
                <Button type="primary" htmlType="submit">
                    {this.props.defaultValue ? 'Изменить' : 'Добавить'}
                </Button>&nbsp;
                <Button onClick={() => this.resetForm()}>Сбросить</Button>
            </ItemLayout>

        </Form>

    }

};
export default InputForm

const ItemLayout: React.FC = ({children}) =>
    <div css={css`display: flex`}>
        <div css={css`flex: 1`}/>
        <div css={css`flex: 3`}>{children}</div>
    </div>

export const ImageList: React.FunctionComponent<{ attachments?: string[] }> = ({attachments}) =>
    (attachments || [])!.map((url, key) => <ImgWrapper key={key}>
        <Image css={css`background-image: url(${url})`}/>{url}
    </ImgWrapper>) as any

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
