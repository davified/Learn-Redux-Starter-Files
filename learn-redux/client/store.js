// Creating our redux store. An object (that's originally empty) that is kind of like our database.

import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

// create an object for the default data
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// creating a store using Redux's createStore method, which takes in 2 arguments - the rootReducer and the defaultState
const store = createStore(rootReducer, defaultState, enhancers)

// export method 1 : 'named export'. when we import this in another file, we need wrap it in curly braces import {history}...
export const history = syncHistoryWithStore(browserHistory, store)

// export method 2 : 'default export'
export default store
