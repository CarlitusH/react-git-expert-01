import {} from 'react'
import PropTypes from 'prop-types';


export const GifItem = ({id, title, url}) => {
    return (
        <li key={id}>
            <div className='card'>
                <p>{title}</p>
                <img src={url} alt={title} />
            </div>
        </li>
  )
}

GifItem.propTypes = {
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}