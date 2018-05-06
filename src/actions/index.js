import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();

export const requestTodos = () => ({
  type: 'REQUEST_TODOS',
});

export const receiveTodos = json => ({
  type: 'RECEIVE_TODOS',
  todos: json,
});

export const fetchTodos = () => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://gg-todo-app.firebaseio.com/todos.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
};

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
