import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  vetoed: {
    textDecoration: 'line-through'
  }
}
const ListItem = ({name}) => (
  name.vetoed ?
    <li style={style.vetoed}>
      {`${name.name}`}
    </li>
  :
    <li>
      {`${name.name}`}
    </li>
)

export default ListItem;

//${name.sex} ${name.votes} ${name.vetoed}