import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const BoyList = ({items}) => (
  <div>
    <ol>
      {items.map((item) => {
      if (item.sex === 'Male') {
        return <ListItem key={item.id} item={item} />
      }
      })}
    </ol>
  </div>
)

export default BoyList;