import React from 'react';
import classes from './Modal.css'

const backdrop = (props) => (
  <div>
    {props.children}
  </div>
)

export default backdrop
