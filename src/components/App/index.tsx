import React from 'react';
import styled from '@emotion/styled'
import MainPage from '../MainPage';
import ShopPage from '../ShopPage';
import Page404 from '../Page404';
import Navbar from '../ReusableComponents/Navbar'
import Footer from '../ReusableComponents/Footer'
import SubFooter from '../ReusableComponents/SubFooter'
import { Route, Router, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import HistoryStore from '../../stores/HistoryStore';
import ProductPage from '../ProductPage';
import CartPage from '../CartPage/Step1';
import OrderDetails from '../CartPage/Step2';

interface IProps {
    historyStore?: HistoryStore;
}

interface IState {
    searchValue: string
}

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

@inject('historyStore')
@observer
export default class App extends React.Component<IProps, IState>{

    state: IState = { searchValue: '' }

    handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: e.target.value});
        this.props.historyStore?.history.push("/products");
    }


    render() {
        const { searchValue } = this.state;
        return <Router history={this.props.historyStore!.history}>
            {sessionStorage.setItem('selectedTags', '')}
            <Root>
                <Navbar searchValue={searchValue} onChangeSearchValue={this.handleSearchValue} />
                <Switch >
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/products" component={() => <ShopPage searchValue={searchValue} />} />
                    <Route exact path="/product/:id" component={ProductPage} />
                    <Route exact path="/step1" component={CartPage} />
                    <Route exact path="/step2" component={OrderDetails} />
                    <Route component={Page404} />
                </Switch>
                <Footer />
                <SubFooter />
            </Root>
        </Router>
    }
};
