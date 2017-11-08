import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';

const style = {
  backgroundColor: '#F48FB1',
}

const GirlList = ({names, changeVeto}) => (
  <div style={style}>
    <ol>
      {names.map((name) => {
        if (name.sex === 'Female' && !name.vetoed) {
          return <ListItem key={name._id} name={name} changeVeto={changeVeto}/>
        }
      })}
    </ol>
  </div>
)

export default GirlList;