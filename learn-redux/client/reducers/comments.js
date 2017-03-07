// a reducer takes in: (i) the action (info about what happened) and (ii) a copy of the current state, and **returns an updated store**

function comments (state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return updated state
    default:
      return state
  }
}

export default comments
