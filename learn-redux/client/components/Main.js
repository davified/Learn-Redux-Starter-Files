import React from 'react'
import {Link} from 'react-router'

import Single from './Single'
import PhotoGrid from './PhotoGrid'

const Main = React.createClass({
  render () {
    return (
      <div>
        <h1><Link to="/">Reduxstagram</Link></h1>
				{/* clone element for routing purposes - see Video 4 */}
				{React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main
