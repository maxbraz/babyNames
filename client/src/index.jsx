import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoyInput from './components/BoyInput.jsx';
import GirlInput from './components/GirlInput.jsx';
import BoyList from './components/BoyList.jsx';
import GirlList from './components/GirlList.jsx';
import testData from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: testData
    }
    this.fetchNames = this.fetchNames.bind(this);
    this.addName = this.addName.bind(this);
  }

  addName(item) {
    let names;
    axios.post('/item', {
      item: item
    })
    .then(function(response) {
      console.log('this is the Add response: ', response);
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetchNames(coordinates);
  }

  fetchNames(names) {
    let fetchednames;

    axios.get('/names', {
      params: {
        names: names
      }
    })
    .then(function (response) {
      fetchednames = response.data;
      this.setState({names: fetchednames})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <div>
              <BoyInput addName={this.addName}/>
              <GirlInput addName={this.addName}/>
          </div>
          <div>
            <h4>Name Generator Here Add Button and render on click</h4>
          </div>
          <div>
            <BoyList names={this.state.names}/>
            <GirlList names={this.state.names}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));