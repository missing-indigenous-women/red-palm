import React, {useEffect} from "react"
import {Card, Container, Form, Image} from "react-bootstrap";
import {MissingWoman} from "./MissingWoman";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWomen} from "../store/women";
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl, Popup, ScaleControl} from 'react-map-gl';
import {Pin} from "./Pin";
import { useState,useMemo } from "react";
import "./App.css"
import {Link} from "react-router-dom";
import South from './images/southWest.jpeg';
import Tribe from './images/tribeMap.png';

export const MapPage = () => {
    const [displayText, setDisplayText] = useState(true);
    const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);
    const [displayedWoman, setDisplayedWoman] = useState(null)
    const changeDisplayText = () => {
        setDisplayText(!displayText);
    };
    // returns the users store from Redux and assigns it to the users variable
    const women = useSelector(state => state.women ? state.women : []);

    // assigns useDispatch reference to the dispatch variable for later use.
    const dispatch = useDispatch();

    // Define the side effects that will occur in the application.
    // E.G code that handles dispatches to redux, API requests, or timers.
    function sideEffects() {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        dispatch(fetchAllWomen())
    }

    /**
     * Pass both sideEffects and sideEffectInputs to useEffect.
     * useEffect is what handles rerendering of components when sideEffects resolve.
     * E.g when a network request to an api has completed and there is new data to display on the dom.
     */
    useEffect(sideEffects, [dispatch])

    console.log("displayedWoman: ",displayedWoman)
    console.log("isPopupDisplayed: ",isPopupDisplayed)

    // const [points, setPoints] = React.useState([
    //     {lat: 35.332, lng: -106.652},
    //     {lat: 35.339, lng: -106.656},
    //     {lat: 35.40, lng: -106.666},
    //     {lat: 35.23, lng: -106.4444}
    // ]);

    // center={[-106.65, 35.33]}

    // const pins = useMemo(
    //     () =>
    //         women.map((woman, index) => (
    //             <Marker
    //                 key={`marker-${index}`}
    //                 longitude={woman.longitude}
    //                 latitude={woman.latitude}
    //                 anchor="bottom"
    //             >
    //                 <Pin onClick={() => setPopupInfo(woman)} />
    //             </Marker>
    //         )),
    //     []
    // );

    return (
        <>
            <Card.Img variant="top" src={South}/>
            <Container className={'py-4'}>
                <Form>
                    <Form.Check
                        type="switch"
                        id="maplist-switch"
                        checked={displayText}
                        onChange={changeDisplayText}
                        label="MapPage | List"
                    />
                </Form>
            </Container>
            {!displayText && (<Container id="test" className="text-center pb-5">
                <Map
                    initialViewState = {{
                        latitude: 35.33,
                        longitude: -106.65,
                        zoom: 6
                    }}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    style={{width: 1200, height: 800}}
                    >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl />
                    {women.map((woman, index) =>
                        <Pin lat={woman.womanLatitude} lng={woman.womanLongitude} index={index} key={index} woman={woman} setDisplayedWoman={setDisplayedWoman} setIsPopupDisplayed={setIsPopupDisplayed}/>
                    )
                    }
                    {isPopupDisplayed === true &&
                        <Popup longitude={Number(displayedWoman.womanLongitude)}
                               latitude={Number(displayedWoman.womanLatitude)}
                               anchor="top"
                               onClose={() => {
                                   setIsPopupDisplayed(false)
                               }}
                               closeOnClick={false}
                        >
                            <div>
                                <p><strong>{displayedWoman.womanFirstName} {displayedWoman.womanLastName}</strong></p>
                                <Image width="100%" src={displayedWoman.womanPhoto1} />
                                <Link to={`/DetailPage/${displayedWoman.womanId}`} state={{ woman: displayedWoman }}>Details
                                </Link>
                                {/*            <a*/}
                                {/*                target="_new"*/}
                                {/*                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}*/}
                                {/*            >*/}
                                {/*                Wikipedia*/}
                                {/*            </a>*/}
                                {/*        </div>*/}
                            </div>
                        </Popup>
                    }

                    {/*{pins}*/}

                    {/*{popupInfo && (*/}
                    {/*    <Popup*/}
                    {/*        anchor="top"*/}
                    {/*        longitude={Number(popupInfo.longitude)}*/}
                    {/*        latitude={Number(popupInfo.latitude)}*/}
                    {/*        closeOnClick={false}*/}
                    {/*        onClose={() => setPopupInfo(null)}*/}
                    {/*    >*/}
                    {/*        <div>*/}
                    {/*            {popupInfo.womanFirstName} {popupInfo.womanLastName} |{' '}*/}
                    {/*            <a*/}
                    {/*                target="_new"*/}
                    {/*                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}*/}
                    {/*            >*/}
                    {/*                Wikipedia*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*        <img width="100%" src={popupInfo.womanPhoto1} />*/}
                    {/*    </Popup>*/}
                    {/*)}*/}
                </Map>
            </Container>)}
            {displayText && (<Container className={'pb-5'}>
                {women.map((woman,index) => <MissingWoman woman={woman} key={index}/>)}
            </Container>)}
            {/*<Container className={'pb-5'}>*/}
            {/*    {women.map((woman,index) => <MissingWoman woman={woman} key={index}/>)}*/}
            {/*</Container>*/}
            <Card.Img variant="top" src={Tribe}/>
        </>
    )
}

