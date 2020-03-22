/** @jsx jsx */
import React from "react";
import {Form, Select, InputNumber, Switch, Button, Upload, message, Input} from 'antd';
import ReactMarkdown from 'react-markdown';
import {QuestionCircleOutlined, UploadOutlined} from '@ant-design/icons';
import {css, jsx} from "@emotion/core";
import axios from 'axios'
import {inject, observer} from "mobx-react";
import {DataStore} from "../../stores";
import {log} from "util";

const {Option} = Select;

const models = [
    'LEGACY & OUTBACK',
    'IMPREZA',
    'FORESTER',
    'MERCH',
    'MISC',
]
const gens = [
    '2GEN (BG/BD/BK) 1993-1999',
    '3GEN (BE/BH) 1999-2004',
    '4GEN (BP/BL) 2003-2009',
    'OTHER LEGACY & OB)',
    'MEANEYE (GC/GF/GM) 1992-2000',
    'BUGEYE (GD/GG) 2000-2004',
    'BLOBEYE  (GD/GG) 2003-2005',
    'OTHER IMPREZA',
    'SF 1997-2002',
    'SG 2002-2007',
    'OTHER FORESTER',
    'STICKERS',
    'SHIRTS',
    'POSTERS',
    'OTHER STUFF',
]
const tags = [
    '#FRONT',
    '#REAR',
    '#SIDE',
    '#INTERIOR',
    '#SEDAN',
    '#WAGON',
    '#HOT',
    '#RARE',
    '#EXTRARARE',
    '#BRANDNEW',
    '#DISCOUNTED',
    '#NEWARRIVALS',
    '#BRANDED',
    '#BYMYSUBIE',
    '#UNDER100',
]

interface IData {
    title: string
    model: string
    gen: string
    tags: string[]
    weight: number
    price: number
    oldPrice?: number
    description: string
    attachments?: string[]
}

interface IFormData extends Omit<IData, 'attachments'> {
    attachments?: { thumbUrl: string, name: string }[]
}


interface IProps {
    dataStore: DataStore
}

interface IState {
    description?: string
    test?: any
}


const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

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
        // const [form] = Form.useForm();
        // this.form = form
    }

    onFinish = async (formData: any) => {
        const data: IData = {...formData, attachments: []}
        const {attachments} = (formData as IFormData)
        if (attachments) {
            // await Promise.all()
            attachments.map(async ({name, thumbUrl}) => {
                    this.props.dataStore!.uploadImage(name, thumbUrl)
                }
            )
        }

    };

    handleChangeDescription = ({target: {value: description}}: React.ChangeEvent<HTMLTextAreaElement>) =>
        this.setState({description});

    handleClickMDInfo = () => window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet')

    render() {
        const {description} = this.state;
        return <Form {...formItemLayout} onFinish={this.onFinish}>

            <Form.Item label="Название" name="title"
                //rules={inputRules}
            >
                <Input placeholder="Название детали"/>
            </Form.Item>

            <Form.Item label="Модель" name="model"
                //rules={inputRules}
            >
                <Select placeholder="Модель">
                    {models.map((model, i) => <Option key={i} value={model}>{model}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Gen" name="gen"
                //rules={inputRules}
            >
                <Select placeholder="Поколение">
                    {gens.map((gen, i) => <Option key={i} value={gen}>{gen}</Option>)}
                </Select>
            </Form.Item>

            <Form.Item label="Теги" name="tags"
                //           rules={[...inputRules, {type: 'array'}]}
            >
                <Select mode="multiple" placeholder="Теги">
                    {tags.map((tag, i) => <Option key={i} value={tag}>{tag}</Option>)}
                </Select>
            </Form.Item
            >

            <Form.Item label="Вес" name="weight"
                //rules={[...inputRules, {type: 'number', min: 0}]}
                       css={numStyle}>
                <InputNumber placeholder="Вес"/>
            </Form.Item>

            <Form.Item label="Цена" name="price"
                // rules={[...inputRules, {type: 'number', min: 0}]}
                       css={numStyle}>
                <InputNumber placeholder="Цена"/>
            </Form.Item>

            <Form.Item label="Старая цена" name="oldPrice"
                // rules={[{type: 'number', min: 0}]}
                       css={numStyle}>
                <InputNumber placeholder="Старая Цена"/>
            </Form.Item>

            <Form.Item label="Есть на складе" name="stock">
                <Switch/>
            </Form.Item>

            <Form.Item
                label={<span>Описание&nbsp;<QuestionCircleOutlined onClick={this.handleClickMDInfo}/></span>}
                name="description"
                // rules={inputRules}
            >
                <Input.TextArea onChange={this.handleChangeDescription}/>
                <ReactMarkdown source={description}/>
            </Form.Item>

            <Form.Item
                name="attachments"
                label="Загрузить фото"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload
                    customRequest={({onSuccess}: any) => {
                        setTimeout(() => {
                            onSuccess('ok')
                        }, 0)
                    }}
                    listType="picture" name="image">
                    <Button><UploadOutlined/> Загрузить фото</Button>
                </Upload>
            </Form.Item>

            <Button type="primary" htmlType="submit">Добавить</Button>

        </Form>

    }

};
export default AddForm

const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 14},
};

const inputRules = [{required: true, message: 'Обязательное поле!'}]
