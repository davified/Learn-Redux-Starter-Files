import React from 'react' // react is coming from node_modules
import {render} from 'react-dom'
// import Main from './components/Main' //replace Main with App
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// integrating sentry with our react application in 3 lines!
import Raven from 'raven-js'
import {sentry_url} from './data/config'
Raven.config(sentry_url).install()

// import css
import css from './styles/style.styl'

// import react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
// importing Provider - this is the binding between react and redux
import { Provider } from 'react-redux'
import store, {history} from './store'

// creating a router component in JSX that determines which component are loaded depending on what route is in the browser
const router = (

	<Provider store={store}>
	{/* version 1: just plain routers that load React components, without redux functionality */}
  {/* <Router history={browserHistory}> */}
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={PhotoGrid} />
      <Route path='/view/:postId' component={Single} />
    </Route>
  </Router>
	</Provider>
)

// we ask React to render the router object that we've created above, rather than a single component
render(router, document.getElementById('root'))
