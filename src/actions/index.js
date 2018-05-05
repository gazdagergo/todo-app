export const toggleTodo = (id, isChecked) => {
  return ({
  type: "TOGGLE_TODO",
  id,
  isChecked,
})};

export const saveTodo = (id, text) => {
  return ({
  type: "SAVE_TODO",
  id, 
  text,
})};
