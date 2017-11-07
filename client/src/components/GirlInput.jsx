import React from 'react';

const style = {
  input: {
    width: '256px',
    marginRight: '3px'
  },
  button: {
    backgroundColor: '#ffb6c1',
  },
};

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
      <h4>Add Girl</h4>
      <input
        placeholder="Enter Name"
        style={style.input}
        value={this.state.name}
        onChange={this.onChange}
        onKeyUp={this.handleKeyPress}
      />
      <button onClick={this.add} style={style.button}> + </button>
    </div>
    )
  }
}

export default GirlInput;