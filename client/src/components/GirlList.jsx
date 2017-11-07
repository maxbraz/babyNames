import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const GirlList = ({names}) => (
  <div>
    <ol>
      {names.map((name) => {
        if (name.sex === 'Female') {
          return <ListItem key={name.id} name={name} />
        }
      })}
    </ol>
  </div>
)

export default GirlList;