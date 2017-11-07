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
  backgroundColor: '#8acff0',
  width: 'auto'
}

const BoyList = ({names}) => (
  <div style={style}>
    <ol>
      {names.map((name) => {
      if (name.sex === 'Male') {
        return <ListItem key={name._id} name={name} />
      }
      })}
    </ol>
  </div>
)

export default BoyList;