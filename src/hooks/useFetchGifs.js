import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import {callApi} from '../helpers/getGifs';


export const useFetchGifs = ({category}) => {
    
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] =  useState(true);

    const getImages = async()=>{
        const rptaImages = await callApi(category);
        setGifs(rptaImages);
        setLoading(false);
    }


    useEffect(() => {
        getImages();
        return () => {
            //aqui sería realizar el remove
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ])
    
    
    return {
        images:gifs,
        isLoading:loading
    }
}

useFetchGifs.propTypes = {
    category:PropTypes.string.isRequired
}