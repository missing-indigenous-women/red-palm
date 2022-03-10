import React, {useEffect} from "react"
import {Container, Form, Image} from "react-bootstrap";
import {MissingWoman} from "./MissingWoman";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWomen} from "../store/women";
import Map from 'react-map-gl';
import {Pin} from "./Pin";

export const MapPage = () => {
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

    //console.log(women)

    const [points, setPoints] = React.useState([
        {lat: 35.332, lng: -106.652},
        {lat: 35.339, lng: -106.656},
        {lat: 35.40, lng: -106.666},
        {lat: 35.23, lng: -106.4444}
    ]);
    // center={[-106.65, 35.33]}

    return (
        <>
            <Container className={'py-4'}>
                <Form>
                    <Form.Check
                        type="switch"
                        id="maplist-switch"
                        label="MapPage | List"
                    />
                </Form>
            </Container>
            <Container className="text-center pb-5">
    {/*`   `        <Image fluid src={"https://via.placeholder.com/1000x800"} alt={"map of missing women"}/>*/}
                <Map
                    initialViewState = {{
                        latitude: 35.33,
                        longitude: -106.65,
                        zoom: 12
                    }}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    style={{width: 600, height: 400}}
                >
                    {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
                </Map>
            </Container>
            <Container className={'pb-5'}>
                {/*{women.map(woman => <MissingWoman woman={woman} />)}*/}
                {women.map((woman,index) => <MissingWoman woman={woman} key={index}/>)}
            </Container>
        </>
    )
}

