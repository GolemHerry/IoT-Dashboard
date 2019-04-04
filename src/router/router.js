import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashhistory, Route } from 'react-router';

ReactDOM.render(
    (
        <Router history={hashhistory}>
            <Route path='/' >

            </Route>
        </Router>
    ),
    document.getElementById('root')
);