import React from 'react';
import styled from '@emotion/styled'
import MainPage from '../MainPage';
import ShopPage from '../ShopPage';
import { Route, Router, Switch, BrowserRouter} from 'react-router-dom';
import { History } from 'history';

interface IProps {
    history: History;
}

interface IState {
}


export default class App extends React.Component<IProps, IState>{

    render() {
        return <BrowserRouter >
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/products" component={ShopPage}/>
                {/* <Route component={Form404}/> */}
            </Switch>
        </BrowserRouter>
    }

};
