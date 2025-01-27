import {saveLikeToggle , saveTweet} from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

function toggleTweet({id,authedUser,hasLiked}){
  return{
    type :TOGGLE_TWEET,
    id ,
    authedUser,
    hasLiked,
  }
}

export function handleToggleTweet(info) {
  return (dispatch) => {
      dispatch(toggleTweet(info))

      return saveLikeToggle(info)
      .catch((e) => {
          console.warn("error",e);
          dispatch(toggleTweet(info))
          alert('There was an error liking tweet.Try again.')
      })
  }
}

export function addTweet(tweet){
  return{
      type:ADD_TWEET,
      tweet,
  }
}

export function handleAddTweet(text,replyingTo){
  return (dispatch,getState) => {
    const {authedUser}= getState();

    return saveTweet({
      text,
      author : authedUser,
      replyingTo
    })
    .then((tweet) => dispatch(addTweet(tweet)))
  }
}