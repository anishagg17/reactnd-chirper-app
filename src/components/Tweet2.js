import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'
import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
class Tweet extends Component{
    

    render(){
        const tweet  = this.props.tweet;
        // console.log(this.props)

        if(!tweet){
            return (
                <div className="tweet">
                   This tweet Doesn't Exists
                </div>
            )
        }

        return (
            <div className="tweet">
               
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  
    return {
      authedUser,
      tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
        : null
    };
  }


export default connect(mapStateToProps)(Tweet)