// a reducer takes in: (i) the action (info about what happened) and (ii) a copy of the current state, and **returns an updated store**

function postComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      console.log('removing comment')
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
}

// reducer composition
function comments (state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments
