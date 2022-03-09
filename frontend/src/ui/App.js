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
import {InfoPage} from "./InfoPage";
import {Signup} from "./Signup";
import {Signin} from "./Signin";
import {SignUpFormContent} from "./shared/Components/Main-nav/Sign-up/SignUpFormContent";

export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map' component={Map}/>
                    <Route exact path='/InfoPage' component={InfoPage}/>
                    <Route exact path='/InfoForm' component={InfoForm}/>
                    <Route exact path='/Signup' component={Signup}/>
                    <Route exact path='/Signin' component={Signin} />
                    <Route exact path='/SignUpFormContent' component={SignUpFormContent}/>
                    <Route component={FourOhFour}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Provider>
    </>
)