import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/react-movie/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/react-movie/:category/:id'
                component={Detail}
            />
            <Route
                path='/react-movie/:category'
                component={Catalog}
            />
            <Route
                path='/react-movie'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
