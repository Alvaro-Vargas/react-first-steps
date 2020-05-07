import React from 'react';
import Proptypes from 'prop-types';

/**
 * What I receive in this function are the 'props'
 * function TechItem(props){}
 * But I can destructure it and 
 * function ({ tech }) {}
*/

function TechItem({ tech, onDelete }) { 
  return (
    <li >
      {tech}
      <button 
        onClick={onDelete} 
        type="button"
      > 
        Remove
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: Proptypes.string,
  onDelete: Proptypes.func.isRequired,
};

export default TechItem;