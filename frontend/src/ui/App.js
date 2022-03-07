import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {Map} from './Map'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {NavBar} from "./shared/NavBar";
import {Footer} from "./shared/Footer";
import {InfoForm} from "./shared/InfoForm";
import {Provider} from "react-redux";

export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map' component={Map}/>
                    <Route component={FourOhFour}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Provider>
    </>
)