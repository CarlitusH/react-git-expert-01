import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {images,isLoading} = useFetchGifs({category});

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading?
                <h4>cargando......</h4>:
                <li className='card-grid'>
                    <ol>
                        {
                            images.map(({id,title,url})=>
                                <GifItem key={id} id={id} title={title} url={url} />
                            )
                        }
                    </ol>
                </li>
            }
        </>
    )
}

GifGrid.propTypes = {
    category:PropTypes.string.isRequired
}