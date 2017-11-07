import React from 'react';
import ReactDOM from 'react-dom';

const ListItem = ({name}) => (
  <li>
    {`${name.name} ${name.sex} ${name.votes} ${name.vetoed}`}
  </li>
)

export default ListItem;
