import React from 'react';
import ReactDOM from 'react-dom';

const ListItem = ({item}) => (
  <li>
    {`${item.name} ${item.sex} ${item.votes} ${item.vetoed}`}
  </li>
)

export default ListItem;
