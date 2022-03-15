import React, {useEffect, useState} from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWomen} from "../../../store/women";
import {Pin} from "../../Pin";

const ImageSlider = ({ slides }) => {
    // const [current, setCurrent] = useState(2);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 3 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
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
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {women.map((woman, index) => {
            {/*{SliderData.map((slide, index) => {*/}
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={woman.womanPhoto1} alt='missing native american women' className='image-fluid' />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;