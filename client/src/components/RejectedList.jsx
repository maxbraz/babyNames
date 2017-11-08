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
  backgroundColor: '#FFF59D',
}

const RejectedList = ({names, changeVeto}) => (
  <div>
    <ol style={style}>
      {names.map((name) => {
        if (name.vetoed) {
          return <ListItem key={name._id} name={name} changeVeto={changeVeto}/>
        }
      })}
    </ol>
  </div>
)

export default RejectedList;