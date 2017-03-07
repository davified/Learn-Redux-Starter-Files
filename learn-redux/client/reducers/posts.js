// a reducer takes in: (i) the action (info about what happened) and (ii) a copy of the current state, and **returns an updated store**

function posts (state = [], action) {
  console.log(state, action)
  return state
}

export default posts
