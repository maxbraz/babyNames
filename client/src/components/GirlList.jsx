import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
  backgroundColor: '#ffb6c1'
}

const GirlList = ({names}) => (
  <div style={style}>
    <ol>
      {names.map((name) => {
        if (name.sex === 'Female') {
          return <ListItem key={name._id} name={name} />
        }
      })}
    </ol>
  </div>
)

export default GirlList;