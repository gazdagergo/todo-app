export const toggleTodo = (id) => {
  return ({
  type: "TOGGLE_TODO",
  id,
})};

export const updateTodo = (id, text) => {
  return ({
  type: "UPDATE_TODO",
  id, 
  text,
})};

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id,
});

let nextTodoId = 1;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});
