import React from 'react';
import styled from '@emotion/styled'
import MainPage from '../MainPage';
import ShopPage from '../ShopPage';
import Navbar from '../Navbar'
import Footer from '../Footer'
import SubFooter from '../SubFooter'
import { Route, Router, Switch } from 'react-router-dom';
import { History } from 'history';
import { BasketStore } from '../../stores/BasketStore'

interface IProps {
    history: History;
}

interface IState {
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class App extends React.Component<IProps, IState>{
    render() {
        return <Router history={this.props.history}>
            {sessionStorage.setItem('selectedTags', '')}
            <Root>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/products" component={ShopPage} />
                    <Route component={ShopPage} />
                </Switch>
                <SubFooter />
                <Footer />
            </Root>
        </Router>
    }

};
