import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components'


const Button = style.button`
  padding: 0.5rem;
  border:none;
  background-color: lightblue;
  margin-right:1rem;
  color: ${(props) => 
    props.color ? props.color : 'darkpink'  
  }
`

const CarouselButton = ({color, ...props}) => <Button color={color} {...props} />;

CarouselButton.propTypes = {
  color: PropTypes.string,
  Button: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

CarouselButton.defaultProps = {
  Button: Button,
};


export default CarouselButton;
