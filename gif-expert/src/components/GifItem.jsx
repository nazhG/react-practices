import React from 'react'
import PropTypes from 'prop-types';

export const GifItem = ({id, url, title }) => {
  return (
    <img 
      key={id} 
      src={url} 
      alt={title} 
      className="gif-item"
    />
  )
}

//npm i prop-types
GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}