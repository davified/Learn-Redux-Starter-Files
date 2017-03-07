import React from 'react'
import {Link} from 'react-router'

import Single from './Single'
import PhotoGrid from './PhotoGrid'

const Main = React.createClass({
  render () {
    return (
      <div>
        <h1><Link to="/">Reduxstagram</Link></h1>
				{/* this cloneElement() method passes down props from Main to its first child */}
				{React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main
