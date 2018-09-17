import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

const styles = {
  card: {
    maxWidth: 345
  },
  openCard:{
    maxWidth: 200
  },
  openMedia: {
    height: 80,
  },
  media: {
    objectFit: 'cover',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      chatInput: '' 
    };
  }

  sendChat = () => {
    if (this.state.chatInput) {
        this.setState({ chatInput: '' })
    }

  }

  setChatInput = (event) => {
    this.setState({ chatInput: event.target.value })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.sendChat();
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <Card className={classes.card} >
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Messages
            </Typography>
              <div className={classes.root}>
                <List component="nav">
                  <ListItem>
                  <Typography component="div">
                    Messages will go here
                  </Typography>
                  </ListItem>
                </List>
              </div>
          </CardContent>
          <CardActions>
            <Input
              placeholder="Enter a message"
              value={this.state.chatInput}
              className={classes.input}
              onKeyDown={this.handleKeyPress}
              onChange={this.setChatInput}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </CardActions>
        </Card>
      );
    }
  }

const ChatComponent = withStyles(styles)(App);

ReactDOM.render(<ChatComponent />, document.getElementById('root'));
