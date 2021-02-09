import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, NavBar } from '../_components';
import { HomePage } from '../HomePage';
import  {AuditPage}  from '../AuditPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-10">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                        <NavBar/>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute path="/audit" roles={[Role.AUDITOR]} component={AuditPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };