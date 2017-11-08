import React from 'react';
import ReactDOM from 'react-dom';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {Add, Clear } from 'material-ui-icons';

const style = {
  vetoed: {
    textDecoration: 'line-through'
  },
  icon: {
    width: 18,
    height: 18,
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {changeVeto, name} = this.props;
    changeVeto(name._id, name.vetoed);
  }

  render () {
    const {name, changeVeto} = this.props;

    return (
      name.vetoed && name.sex === 'Male' &&
        <div>
          <li style={style.vetoed}>
            {name.name}
            <IconButton onClick={this.handleClick} tooltip="restore name" tooltipPosition="top-center" iconStyle={style.icon}>
              <Add />
            </IconButton>
          </li>
        </div> ||
      name.vetoed && name.sex === 'Female' &&
        <div>
          <li style={style.vetoed}>
            {name.name}
            <IconButton onClick={this.handleClick} tooltip="restore name" tooltipPosition="top-center" iconStyle={style.icon}>
              <Add />
            </IconButton>
          </li>
        </div> ||
      name.sex === 'Female' && !name.vetoed &&
        <div>
          <li>
            {name.name}
            <IconButton onClick={this.handleClick} tooltip="remove name" tooltipPosition="top-center" iconStyle={style.icon}>
              <Clear />
            </IconButton>
          </li>
        </div> ||
      name.sex === 'Male' && !name.vetoed &&
        <div>
          <li>
            {name.name}
          <IconButton onClick={this.handleClick} tooltip="remove name" tooltipPosition="top-center" iconStyle={style.icon}>
            <Clear />
          </IconButton>
          </li>
        </div>
    )
  }
}

export default ListItem;