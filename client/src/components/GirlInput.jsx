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
      item: ''
    }

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.item);
    this.setState({
      item: ''
    });
  }

  render() {
    return (
    <div>
      <h4>Add Girl</h4>
      <input
        placeholder="Enter Name"
        style={style.input}
        value={this.state.item}
        onChange={this.onChange}
      />
      <button onClick={this.search} style={style.button}> + </button>
    </div>
    )
  }
}

export default GirlInput;