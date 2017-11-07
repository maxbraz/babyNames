import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const GirlList = ({items}) => (
  <div>
    <ol>
      {items.map((item, i) => {
        return <ListItem key={i} item={item} />
      })}
    </ol>
  </div>
)

export default GirlList;