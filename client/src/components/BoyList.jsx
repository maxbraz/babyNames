import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const style = {
  backgroundColor: '#81D4FA',
}

const BoyList = ({names, changeVeto}) => (
  <div style={style}>
    <ol>
      {names.map((name) => {
        if (name.sex === 'Male' && !name.vetoed) {
          return <ListItem key={name._id} name={name} changeVeto={changeVeto}/>
        }
      })}
    </ol>
  </div>
)

export default BoyList;