import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const BoyList = ({names}) => (
  <div>
    <ol>
      {names.map((name) => {
      if (name.sex === 'Male') {
        return <ListItem key={name.id} name={name} />
      }
      })}
    </ol>
  </div>
)

export default BoyList;