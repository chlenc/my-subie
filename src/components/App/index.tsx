/** @jsx jsx */
import React from 'react';
import {Layout, Menu} from 'antd';
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {Route, Router, Switch} from 'react-router-dom';
import HistoryStore from "../../stores/HistoryStore";
import {inject, observer} from "mobx-react";
import logo from './logoMain.svg'
import List from "../List";
import AddForm from "../AddForm";
import UpdateForm from "../UpdateForm";

const {Header, Content, Footer} = Layout;

const Root = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const Body = styled.div`
background: #fff;
padding: 24px;
min-height: 280px;
overflow: scroll;
`

const Logo = styled.div`
  width: 120px;
  height: 50px;
  margin: 5px 24px 5px 0;
  float: left;
  background: url(${logo}) center no-repeat;
  background-size: contain;
`

const layoutStyle = css`
flex: 1;
`

interface IProps {
    historyStore?: HistoryStore
}

@inject('historyStore')
@observer
export default class App extends React.Component<IProps> {

    redirect = (path: string) => () => this.props.historyStore!.history.push(path)

    get getSelectedKeys() {
        switch (this.props.historyStore!.currentPath) {
            case 'add':
                return ['add'];
            default:
                return ['list']
        }
    }

    render() {
        return <Root>
            <Layout css={layoutStyle}>
                <Header>
                    <Logo/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{lineHeight: '64px'}}
                        selectedKeys={this.getSelectedKeys}
                    >
                        <Menu.Item onClick={this.redirect('/')} key="list">Список</Menu.Item>
                        <Menu.Item onClick={this.redirect('/add')} key="add">Добавить</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '30px 50px'}}>
                    <Body>
                        <Router history={this.props.historyStore!.history}>
                            <Switch>
                                <Route path="/add" component={AddForm}/>
                                <Route path="/change/:string" component={UpdateForm}/>
                                <Route component={List}/>
                            </Switch>
                        </Router>
                    </Body>
                </Content>
                <Footer style={{textAlign: 'center'}}>Chlenc incorporated ©2020 Created by drunk guys</Footer>
            </Layout>
        </Root>
    }
};
