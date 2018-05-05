export const toggleTodo = (id) => {
  return ({
  type: "TOGGLE_TODO",
  id,
})};

export const saveTodo = (id, text) => {
  return ({
  type: "SAVE_TODO",
  id, 
  text,
})};
