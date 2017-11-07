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
// import Item from '../../db/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: testData
    }
    this.fetch = this.fetch.bind(this);
    this.add = this.add.bind(this);
  }

  addName(item) {
    let items;
    axios.post('/item', {
      item: item
    })
    .then(function(response) {
      console.log('this is the Add response: ', response);
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetch(coordinates);
  }

  fetch(items) {
    let fetchedItems;

    axios.get('/items', {
      params: {
        items: items
      }
    })
    .then(function (response) {
      fetchedItems = response.data;
      this.setState({items: fetchedItems})
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
            <BoyList items={this.state.items}/>
            <GirlList items={this.state.items}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));