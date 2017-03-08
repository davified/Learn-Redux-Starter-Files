// increment likes
export function increment (index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index // in ES6, you can also just write index. this is the identifier for which post is being incremented
  }
}

// add comments
export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId, // in these 3 lines, we are passing the payload of the information onward
    author,
    comment
  }
}

// remove comments

export function removeComment (postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
