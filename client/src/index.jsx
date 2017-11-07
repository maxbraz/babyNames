import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BoyInput from './components/BoyInput.jsx';
import GirlInput from './components/GirlInput.jsx';
import BoyList from './components/BoyList.jsx';
import GirlList from './components/GirlList.jsx';
import testData from '../../data.json';
injectTapEventPlugin();

const style = {
  sideBySides: {
    display: 'inline-block',
    margin: '10px',
  },
  appBar: {
    width: '634px'
  },
  lists: {
    width: '634px',
    display: 'inline-block',
    margin: '10px',
  },
  container: {
    margin: '0 auto',
    width: '80%',
    height: '50%',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    }
    this.fetchNames = this.fetchNames.bind(this);
    this.addName = this.addName.bind(this);
  }

  componentWillMount() {
    this.fetchNames();
  }

  addName(name, sex) {
    axios.post('/name', {
      name: name,
      sex: sex,
    })
    .then((response) => {
      console.log('successful post');
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetchNames();
  }

  fetchNames() {
    let fetchedNames;

    axios.get('/names')
    .then((response) => {
      fetchedNames = response.data;
      this.setState({names: fetchedNames})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            style={style.appBar}
            title="Braz Baby Names 2017"
            showMenuIconButton={false}
          />
          <div>
            <div style={style.sideBySides}>
              <BoyInput addName={this.addName}/>
            </div>
            <div style={style.sideBySides}>
              <GirlInput addName={this.addName}/>
            </div>
          </div>
          <div>
            <div style={style.lists}>
              <BoyList names={this.state.names} />
            </div>
            <div style={style.lists}>
              <GirlList names={this.state.names}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));