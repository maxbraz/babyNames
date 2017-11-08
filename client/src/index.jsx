import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import BoyInput from './components/BoyInput.jsx';
import GirlInput from './components/GirlInput.jsx';
import BoyList from './components/BoyList.jsx';
import GirlList from './components/GirlList.jsx';
import RejectedList from './components/RejectedList.jsx';
import testData from '../../data.json';
injectTapEventPlugin();

const style = {
  sideBySides: {
    display: 'inline-block',
    margin: '10px',
  },
  appBar: {
    width: '634px',
  },
  lists: {
    width: '306px',
    display: 'inline-block',
    margin: '9px',
  },
  rejected: {
    width: '636',
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
    this.addName = this.addName.bind(this);
    this.fetchNames = this.fetchNames.bind(this);
    this.changeVeto = this.changeVeto.bind(this);
  }

  componentWillMount() {
    this.fetchNames();
  }

  changeVeto(_id, vetoed) {
    axios.put('/veto', {
      _id: _id,
      vetoed: vetoed,
    })
    .then((response) => {
      console.log('successful put');
      this.fetchNames();
    })
    .catch((error) => {
      console.log('error index.jsx line 62: ', error);
    })
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
    .catch((error) => {
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
              <h4> Boys </h4>
                <BoyList names={this.state.names} changeVeto={this.changeVeto}/>
            </div>
            <div style={style.lists}>
              <h4> Girls </h4>
                <GirlList names={this.state.names} changeVeto={this.changeVeto}/>
            </div>
          </div>
            <div style={style.lists}>
              <h4> Rejected Names </h4>
                <RejectedList names={this.state.names} changeVeto={this.changeVeto}/>
            </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));