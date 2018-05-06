import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id,
});

export const updateTodo = (id, text) => ({
  type: "UPDATE_TODO",
  id, 
  text,
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id,
});

export const addTodo = text => ({
  type: "ADD_TODO",
  id: uid.randomUUID(6),
  text
});
