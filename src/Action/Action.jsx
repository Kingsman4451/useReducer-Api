export const getPosts = (data) => {
  return {type: "posts", loading: false, payLoad: data}
}

export const getComments = (data) => {
  return {type: "comments", loading: false, payLoad: data}
}

export const getToDos = (data) => {
  return {type: "todos", loading: false, payLoad: data}
}

export const getError = (data) => {
  return {type: "error"}
}