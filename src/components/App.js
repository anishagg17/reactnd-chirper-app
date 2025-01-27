import React, { Component ,Fragment} from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
  state = {
    l : true,
  };
  componentDidMount(){
    // handleInitialData()
    this.props.dispatch(handleInitialData())
    .then(this.setState({l : false}))
  }
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
      <Nav/>
      {this.state.l?<div>Still loding...</div>
        :
        <Switch>
            <Route path='/tweet/:id' component={TweetPage}/>
            <Route path='/new'component={NewTweet}/>
            <Route path='/'  component={Dashboard}/>
        </Switch>
      }
      </div>
      </BrowserRouter>
    )
  }
}

export default connect()( App)
