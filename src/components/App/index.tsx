/**@jsx jsx*/
import React from 'react';
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import MainPage from '../MainPage';
import ShopPage from '../ShopPage';
import Page404 from '../Page404';
import Navbar from '../Navbar'
import Footer from '../Footer'
import SubFooter from '../SubFooter'
import { Route, Router, Switch } from 'react-router-dom';
import { History } from 'history';
import { BasketStore } from '../../stores/BasketStore'
import { observer, inject } from 'mobx-react';
import HistoryStore from '../../stores/HistoryStore';
import ProductPage from '../ProductPage';
import CartPage from '../CartPage';

interface IProps {
    historyStore?: HistoryStore;
}

interface IState {
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

@inject('historyStore')
@observer
export default class App extends React.Component<IProps, IState>{
    render() {
        return <Router history={this.props.historyStore!.history}>
            {sessionStorage.setItem('selectedTags', '')}
            <Root>
                <Navbar/>
                <Switch >
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/products" component={ShopPage} />
                    <Route exact path="/product/:id" component={ProductPage} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route component={Page404} />
                </Switch>
                <Footer />
                <SubFooter />
            </Root>
        </Router>
    }

};
