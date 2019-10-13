import React, { Component ,Fragment} from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import {BrowserRouter,Route} from 'react-router-dom'

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
        <div>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/tweet/:id' component={TweetPage}/>
            <Route path='/new'component={NewTweet}/>
        </div>
          
      }
      </div>
      </BrowserRouter>
    )
  }
}

export default connect()( App)