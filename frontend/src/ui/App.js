import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {MapPage} from './MapPage'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {NavBar} from "./shared/NavBar";
import {Footer} from "./shared/Footer";
import {Provider} from "react-redux";
import {DetailPage} from "./DetailPage";
import {Signup} from "./Signup";
import {Signin} from "./Signin";
import 'mapbox-gl/dist/mapbox-gl.css';
import {InfoForm} from "./shared/InfoForm";
import {ImageDropZone} from "./shared/components/ImageDropZone";
import {ProfilePage} from "./ProfilePage";


export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map' component={MapPage}/>
                    <Route exact path='/DetailPage/:womanId' component={DetailPage} womanId=":womanId"/>
                    <Route exact path='/InfoForm' component={InfoForm}/>
                    <Route exact path='/sign-up' component={Signup}/>
                    <Route exact path='/sign-in' component={Signin} />
                    <Route exact path='/image' component={ImageDropZone}/>
                    <Route exact path='/profile-page/:appUserId' component={ProfilePage}  appUserId=":appUserId" />
                    <Route component={FourOhFour}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Provider>
    </>
)