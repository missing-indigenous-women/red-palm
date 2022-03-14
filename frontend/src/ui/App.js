import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {MapPage} from './MapPage'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {NavBar} from "./shared/NavBar";
import {Footer} from "./shared/Footer";
import {Help} from "./shared/InfoForm";
import {Provider} from "react-redux";
import {DetailPage} from "./DetailPage";
import {Signup} from "./Signup";
import {Signin} from "./Signin";
import 'mapbox-gl/dist/mapbox-gl.css';
import {ImageDropZone} from "./shared/components/ImageDropZone";

import ImageSlider from "./shared/components/ImageSlider";
import {SliderData} from "./shared/components/SliderData";

export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/map' component={MapPage}/>
                    <Route exact path='/DetailPage/:womanId' component={DetailPage} womanId=":womanId"/>
                    <Route exact path='/InfoForm' component={Help}/>
                    <Route exact path='/sign-up' component={Signup}/>
                    <Route exact path='/sign-in' component={Signin} />
                    <Route exact path='/image' component={ImageDropZone}/>
                    <Route component={FourOhFour}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Provider>
    </>
)