import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class GirlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sex: 'Female',
    }

    this.add = this.add.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.add();
    }
  }

  add() {
    this.props.addName(this.state.name, this.state.sex);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
    <div>
      <TextField
        hintText="Add a Girl Name"
        value={this.state.name}
        onChange={this.onChange}
        onKeyUp={this.handleKeyPress}
      />
      <FloatingActionButton
        onClick={this.add}
        backgroundColor={'#F48FB1'}
        mini
        secondary
      >
        <ContentAdd />
      </FloatingActionButton>
    </div>
    )
  }
}

export default GirlInput;