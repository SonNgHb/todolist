import React from "react";
import Control from "./Control";
import HeaderText from "./HeaderText";
import List from "./List";
import './GUI.css';
import Form from "./Form";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routers from "../routers";
import Menu from './menu/Menu';

class  AppToDoList extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Menu/>
                    <Switch>
                        {this.showContentMenus(routers)}
                    </Switch>
                </div>
            </Router>

        );
    }
    showContentMenus = (routers) => {
        let result = null;
        if(routers.length > 0) {
            result = routers.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                    )
            });
        }
        return result;
    }
}
export default AppToDoList