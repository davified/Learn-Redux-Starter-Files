// a reducer takes in: (i) the action (info about what happened) and (ii) a copy of the current state, and **returns an updated store**

// this is where we handle the action (this is like the callback function that is triggered when certain events(actions) are dispatched)

function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
    console.log('incrementing likes')

      const i = action.index
      console.log(action)
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state
  }
}

export default posts
