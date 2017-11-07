import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import BoyInput from './components/BoyInput.jsx';
import GirlInput from './components/GirlInput.jsx';
import BoyList from './components/BoyList.jsx';
import GirlList from './components/GirlList.jsx';
import testData from '../../data.json';
injectTapEventPlugin();

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
    paddingTop: '5px',
  },
};

const tilesData = [
  {
    img: 'https://weetnow.com/wp-content/uploads/2016/04/babyboynames.jpg',
    title: 'Add a Boy',
  },
  {
    img: 'http://cdn2.momjunction.com/wp-content/uploads/2015/02/Christian-Baby-Girl-Names-With-Their-Meanings.jpg',
    title: 'Add a Girl',
  },
];

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
            title="Braz Baby Names 2017"
          />
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
            <BoyInput addName={this.addName}/>
            <GirlInput addName={this.addName}/>
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